import { json, type RequestHandler } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { darshSystemPrompt } from "$lib/server/darshContext";

type GeminiResponse = {
    candidates?: Array<{
        content?: {
            parts?: Array<{
                text?: string;
            }>;
        };
    }>;
    error?: {
        message?: string;
    };
};

const fallbackAnswer =
    "I could not reach my AI brain right now. You can still explore the archive through the cards below.";

export const POST: RequestHandler = async ({ request, fetch }) => {
    const { question } = (await request.json().catch(() => ({}))) as {
        question?: unknown;
    };

    if (typeof question !== "string" || question.trim().length === 0) {
        return json(
            { answer: "Ask me something about Darsh first." },
            { status: 400 }
        );
    }

    if (question.length > 500) {
        return json(
            {
                answer: "Keep it under 500 characters and I can answer cleanly.",
            },
            { status: 400 }
        );
    }

    const apiKey = env.GEMINI_API_KEY;

    if (!apiKey) {
        return json(
            {
                answer: "Gemini is not configured yet. Add GEMINI_API_KEY to the server environment to wake me up.",
            },
            { status: 503 }
        );
    }

    const model = env.GEMINI_MODEL || "gemini-2.5-flash";

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": apiKey,
                },
                body: JSON.stringify({
                    systemInstruction: {
                        parts: [{ text: darshSystemPrompt }],
                    },
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: question.trim() }],
                        },
                    ],
                    generationConfig: {
                        temperature: 0.35,
                        maxOutputTokens: 220,
                    },
                }),
            }
        );

        const data = (await response
            .json()
            .catch(() => ({}))) as GeminiResponse;

        if (!response.ok) {
            console.error("Gemini API error", data);

            return json(
                {
                    answer:
                        data.error?.message ||
                        "Gemini had trouble answering that. Try again in a moment.",
                },
                { status: 502 }
            );
        }

        return json({
            answer:
                data.candidates?.[0]?.content?.parts
                    ?.map((part) => part.text || "")
                    .join("")
                    .trim() || fallbackAnswer,
        });
    } catch (error) {
        console.error("Darsh chat error", error);

        return json({ answer: fallbackAnswer }, { status: 500 });
    }
};

const facts = {
    about: "Darsh Soni is a Computer Science Engineering student at Vellore Institute of Technology, Chennai, specialising in AI and Robotics (July 2024 - July 2028). He previously attended Maheshwari Public School, Jaipur (2011-2024). His interests include AI, machine learning, robotics, IoT, web development, software projects, hardware prototypes, hackathons, research ideas, and community work. He speaks English, Hindi, and French.",

    experience: `Darsh Soni's experience:

1. Summer AI Intern at Centre for Cyber Physical Systems (CCPS), VIT Chennai — May to Aug 2026.
2. Space Tech Intern at Bharat Space Education Research Centre (BSERC) — Jan to Apr 2026. Collaborated with India Space Labs and IIT Madras.
3. Open Source Contributor at GirlScript Summer of Code (GSSOC) — Jul to Oct 2025.
4. Team Lead at French Club, VIT Chennai — Jul 2025 to Apr 2026.
5. Design Team Member at Animation Club, VIT Chennai — Aug 2025 to Apr 2026.
6. Student Ambassador for Google Gemini and Communique — Aug 2025 to Jan 2026.
7. Community Member at GDG Jaipur — 2025 to present.`,

    projects: `Darsh Soni's projects and research:

1. Multi-Stage NL to ER Diagram and SQL Generator — IEEE research project using agentic AI for multi-dialect SQL synthesis. Live: https://nl-to-er-diagram-and-sql-generator-icnn9oeac.vercel.app/
2. Oasis - Smart Water Management Dashboard — Hackathon project with multi-sensor IoT, Firebase, real-time monitoring.
3. Netflix Clone — Frontend project using HTML, CSS, and JavaScript.
4. Saheli - AI Powered Women Safety Ecosystem — Hackathon with IoT, AI safety, and CAD design.
5. VIT Mess and Laundry Management System — Full-stack web app using React, Node.js, and MySQL.
6. Cessna 210 (NASA Variant) - OpenVSP Aircraft Model — Aerospace design with OpenVSP, BSERC, IIT Madras.
7. Python LAN Chat App — Socket programming, TCP/IP, multithreaded networking.
8. Python Port Scanner — Cybersecurity, socket programming, TCP/IP.
9. Tetris - Classic Block Puzzle Game — Built with Amazon Q CLI, Python, and Pygame.`,

    skills: `Darsh Soni's skills and tools:

Languages: C, C++, Python, Java, JavaScript, HTML, CSS, Bash.
AI/ML: NumPy, Pandas, Matplotlib, OpenCV.
Frameworks: React, Node.js, ExpressJS, Svelte.
Databases: OracleDB, MySQL, Postgres, MongoDB, Firebase.
Tools: Docker, Arduino, Git, Matlab, AutoCAD, TinkerCAD, Photoshop, DaVinci Resolve.`,

    certifications: `Darsh Soni's certifications:

1. Winter Space Internship Certificate — India Space Labs, BSERC and IIT Madras (May 2026).
2. Gemini Certified University Student — Google (Jan 2026).
3. AWS Solutions Architecture Job Simulation — Forage (Jul 2025).
4. Deloitte Australia Data Analytics Job Simulation — Forage (Jul 2025).
5. Google Student Ambassador — Google Gemini and Communique (Jan 2025).
6. Certificate of Participation — DevTown, GDG VIT-AP and MSG VIT-AP (Apr 2025).
7. Gemini Certified Educator — Google (Jan 2026).
8. Google Certified Educator Level 1 — Google (Jan 2026).`,

    mentors: `Darsh Soni's mentors and referees:

- Dr. Ashis Tripathy, Associate Professor, CS, VIT Chennai (letter of recommendation available).
- Dr. Natarajan B, Associate Professor, CS, VIT Chennai.
- Dr. Manas Ranjan Prusty, Associate Professor, CS, VIT Chennai.
- Dr. Rishikeshan CA, Associate Professor, CS, VIT Chennai.
- Dr. Suseela S, Associate Professor, CS, VIT Chennai.
- Prashanth S., Senior Solution Engineer, GDG Jaipur, Google.
- Paresh Mayani, CEO, GDG Jaipur, SolGuruz.
- Ashok Saraswat, CS teacher at Maheshwari Public School, Jaipur.`,

    contact: `You can reach Darsh Soni at:
- Email: darsh.codes@gmail.com
- LinkedIn: https://www.linkedin.com/in/darshsoni04
- GitHub: https://github.com/Darshcmd
- YouTube: https://www.youtube.com/@dxrsh
- Medium: https://medium.com/@soni.darsh2004
- X: https://x.com/arre_darsh`,
};

type Rule = {
    keywords: string[];
    answer: (input: string) => string;
};

const rules: Rule[] = [
    {
        keywords: ["project", "build", "made", "create", "github", "repo", "what has darsh built"],
        answer: () => facts.projects,
    },
    {
        keywords: ["experience", "intern", "work", "job", "professional", "worked"],
        answer: () => facts.experience,
    },
    {
        keywords: ["skill", "tech", "language", "tool", "know", "stack", "technologies"],
        answer: () => facts.skills,
    },
    {
        keywords: ["education", "study", "college", "university", "vit", "school", "degree", "academic"],
        answer: () => facts.about,
    },
    {
        keywords: ["certification", "certificate", "cert", "credential"],
        answer: () => facts.certifications,
    },
    {
        keywords: ["contact", "email", "linkedin", "reach", "hire", "recruit", "message"],
        answer: () => facts.contact,
    },
    {
        keywords: ["mentor", "referee", "professor", "teacher", "reference"],
        answer: () => facts.mentors,
    },
    {
        keywords: ["about", "who is", "tell me about", "introduce", "bio", "background"],
        answer: () => facts.about,
    },
    {
        keywords: ["all", "everything", "full", "complete", "summary", "overview"],
        answer: () => `${facts.about}\n\n${facts.experience}\n\n${facts.projects}\n\n${facts.skills}\n\n${facts.certifications}\n\n${facts.contact}`,
    },
    {
        keywords: ["hello", "hi", "hey", "greeting", "sup", "yo", "namaste"],
        answer: () => {
            const greetings = [
                "Hey there! I'm Darsh's digital guide. Ask me about his projects, skills, experience, certifications, or anything from his archive!",
                "Hello! Curious about Darsh? You can ask about his projects, what tech he works with, his experience, or how to contact him.",
                "Hi! I've got the full lowdown on Darsh — his education, internships, projects, skills, and more. What do you want to know?",
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        },
    },
];

export function getAnswer(question: string): string {
    const lower = question.toLowerCase().trim();

    if (!lower) return "Ask me something about Darsh!";

    // First check for specific project/mentor mentions
    const specifics: Record<string, string> = {
        "nl to er": "Multi-Stage NL to ER Diagram and SQL Generator — an IEEE research project using agentic AI for multi-dialect SQL synthesis. Live link: https://nl-to-er-diagram-and-sql-generator-icnn9oeac.vercel.app/",
        "oasis": "Oasis - Smart Water Management Dashboard — a hackathon project using multi-sensor IoT, Firebase, and real-time monitoring.",
        "saheli": "Saheli - AI Powered Women Safety Ecosystem — a hackathon project with IoT, AI safety sensors, and CAD design.",
        "netflix": "Netflix Clone — a frontend project using HTML, CSS, and JavaScript.",
        "mess": "VIT Mess and Laundry Management System — a full-stack web app with React, Node.js, and MySQL.",
        "cessna": "Cessna 210 (NASA Variant) — an aerospace design project using OpenVSP, done at BSERC and IIT Madras.",
        "lan chat": "Python LAN Chat App — a networking project using socket programming, TCP/IP, and multithreading.",
        "port scan": "Python Port Scanner — a cybersecurity tool using socket programming and TCP/IP.",
        "tetris": "Tetris — a classic block puzzle game built using Amazon Q CLI, Python, and Pygame.",
        "ashis": "Dr. Ashis Tripathy is an Associate Professor in Computer Science at VIT Chennai. He has provided a letter of recommendation for Darsh.",
        "natarajan": "Dr. Natarajan B is an Associate Professor in Computer Science at VIT Chennai.",
        "manas": "Dr. Manas Ranjan Prusty is an Associate Professor in Computer Science at VIT Chennai.",
        "prusty": "Dr. Manas Ranjan Prusty is an Associate Professor in Computer Science at VIT Chennai.",
        "rishikeshan": "Dr. Rishikeshan CA is an Associate Professor in Computer Science at VIT Chennai.",
        "suseela": "Dr. Suseela S is an Associate Professor in Computer Science at VIT Chennai.",
        "prashanth": "Prashanth S. is a Senior Solution Engineer at GDG Jaipur, Google.",
        "paresh": "Paresh Mayani is the CEO of GDG Jaipur and SolGuruz.",
        "ashok saraswat": "Ashok Saraswat is a Computer Science teacher at Maheshwari Public School, Jaipur.",
        "gdg": "Darsh is a Community Member at GDG Jaipur (2025 to present).",
        "gssoc": "Darsh was an Open Source Contributor at GirlScript Summer of Code (GSSOC), Jul to Oct 2025.",
        "french club": "Darsh was Team Lead at French Club, VIT Chennai, from Jul 2025 to Apr 2026.",
        "animation club": "Darsh was a Design Team Member at Animation Club, VIT Chennai, from Aug 2025 to Apr 2026.",
        "google student": "Darsh was a Student Ambassador for Google Gemini and Communique, Aug 2025 to Jan 2026.",
        "gemini": "Darsh is Gemini Certified as both a University Student and Educator, and was a Student Ambassador for Google Gemini.",
        "aws": "Darsh completed the AWS Solutions Architecture Job Simulation through Forage in Jul 2025.",
        "deloitte": "Darsh completed the Deloitte Australia Data Analytics Job Simulation through Forage in Jul 2025.",
        "forage": "Darsh completed job simulations with AWS (Solutions Architecture) and Deloitte Australia (Data Analytics) through Forage in Jul 2025.",
    };

    for (const [key, answer] of Object.entries(specifics)) {
        if (lower.includes(key)) return answer;
    }

    // Then check general rule categories
    for (const rule of rules) {
        if (rule.keywords.some(k => lower.includes(k))) {
            return rule.answer(lower);
        }
    }

    return "I don't have that information in the archive yet. Try asking about Darsh's projects (like NL to ER, Oasis, Saheli), skills, experience, education, certifications, or contact details!";
}
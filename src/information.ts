export interface ITheme {
  primary: string;
}
export const theme = {
  primary: "#000000",
  accent: "#6F5392",
};

export interface IEducation {
  college: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  expected?: boolean;
}

export interface IProject {
  title: string;
  link?: string;
  description: string;
  bulletPoints: string[];
  startDate?: Date;
  endDate?: Date;
}

export interface IExperience {
  position: string;
  company: string;
  description: string;
  present?: boolean;
  bulletPoints: string[];
  startDate?: Date;
  endDate?: Date;
}

export interface IAchievement {
  award: string;
  link?: string;
  description: string;
  date?: Date;
}

export interface IExtra {
  title: string;
  elements: string[];
}

export interface IUser {
  name: string;
  contact: {
    linkedin: string;
    github: string;
    email: string;
    phoneNumber: string;
  };
  extras: IExtra[];
  education: IEducation[];
  projects: IProject[];
  achievements: IAchievement[];
  workExperience: IExperience[];
}

export const user: IUser = {
  name: "Naman Agrawal",
  contact: {
    github: "https://github.com/naman2003now",
    linkedin: "https://www.linkedin.com/in/naman2003now",
    email: "naman2003now@gmail.com",
    phoneNumber: "+91 8328601462",
  },
  extras: [
    {
      title: "Skills",
      elements: [
        "React",
        "NextJs",
        "Nodejs",
        "C++",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "ExpressJS",
        "Python",
        "Selenium",
        "Linux",
      ],
    },
    {
      title: "Languages",
      elements: ["English", "Hindi"],
    },
    {
      title: "Hobbies",
      elements: ["Speed Cubing", "Sketching", "Reading", "Music"],
    },
  ],
  education: [
    {
      college: "Vellore Institute of Technology",
      degree:
        "B.Tech Computer Science Engineering with Specilisation in IoT (Internet of Things)",
      startDate: new Date("13-Sep-2021"),
      expected: true,
      endDate: new Date("13-Aug-2025"),
    },
  ],

  achievements: [
    {
      award: "Techinca'22 Winner",
      link: "https://github.com/naman2003now/teamteam",
      description:
        "Secured first position among 60+ project submission and 250+ registrations.",
    },
    {
      award: "Reverse Coding 2022",
      description:
        "Best fresher price in a compitative coding among 50+ teams.",
    },
  ],

  projects: [
    {
      title: "STC Portal",
      link: "https://naman2003now.github.io/SimulationTrouble",
      description: "Student management system for college clubs",
      bulletPoints: [
        "Built full-stack web app using ReactJS, ExpressJS, NodeJS for student task and attendance management in clubs.",
        "Utilized PostgreSQL for efficient data storage and retrieval.",
        "Integrated Firebase Auth for secure login and registration functionalities.",
        "Implemented session management for scheduling and tracking student attendance.",
        "Conducted API testing and debugging using Postman for seamless communication.",
      ],
    },
    {
      title: "Focus Mode",
      link: "fuck your link",
      description:
        "A chrome extension that removes distractions from youtube and let's you focus on what's important",
      bulletPoints: [
        "Developed a Chrome extension that eliminates distractions on YouTube, empowering users to focus on essential content.",
        "Implemented JavaScript Chrome extension manifest v3 to ensure compatibility and optimized performance.",
        "Utilized YouTube API to retrieve video data and provide enhanced functionalities within the extension.",
        "Employed Machine Learning techniques to analyze and determine video relevance, filtering out irrelevant content and enhancing user experience.",
      ],
    },
  ],

  workExperience: [
    {
      company: "Stealth Startup",
      position: "Full Stack Developer",
      startDate: new Date("APR-2023"),
      present: false,
      endDate: new Date("JUL-2023"),
      description: "Full Stack Developer, Freelance",
      bulletPoints: [
        "Assisted in setting up the company's website using Next.js, React, and Tailwind CSS, resulting in a highly responsive user interface.",
        "Implemented TypeScript to improve code maintainability and minimize errors.",
        "Established the backend infrastructure using MongoDB for data storage and Firebase for secure authentication.",
        "Created comprehensive API documentation using Postman to facilitate developer onboarding.",
        "Implemented CI/CD pipelines with GitHub Actions, Docker, Docker Hub, and Azure for seamless software delivery.",
      ],
    },

    {
      company: "JMSC POS",
      position: "Software Development Engineer",
      startDate: new Date("JAN-2023"),
      present: false,
      endDate: new Date("APR-2023"),
      description: "Backend Developer, Intern",
      bulletPoints: [
        "Developed a standalone microservice utilizing Google Cloud Vision to automate bill parsing within a POS application, reducing workflow speed by over 95%.",
        "Leveraged Google Cloud Vision's OCR capabilities to accurately extract item details, prices, and quantities from bills, eliminating manual data entry and reducing errors.",
        "Integrated the microservice seamlessly with existing software, ensuring efficient data transfer and synchronization.",
        "Tested and optimized the solution for reliability, streamlining bill processing and enhancing overall productivity.",
      ],
    },

    {
      company: "STCVIT",
      position: "Full Stack Developer",
      startDate: new Date("NOV-2021"),
      present: false,
      endDate: new Date("DEC-2022"),
      description: "Core committee member",
      bulletPoints: [
        "Led a team of 8 members to develop a proprietary Student Management System.",
        "Conducted a session on database designs and Entity-Relationship Diagram (ERD), imparting knowledge on effective data modeling and database management.",
        "Collaborated closely with the team to ensure effective communication, task delegation, and timely project delivery.",
        "Gained experience in the web development field through practical application and problem-solving in a team setting.",
      ],
    },
  ],

  
};

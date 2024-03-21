import ISA from "@/public/project/ISA.webp";
import POWER from "@/public/project/Power.webp";
import BBB from "@/public/project/BBB.webp";
import CS from "@/public/project/CS.webp";

export const PROJECTS = [
  {
    title: "Indian Students Association",
    date: "Jan. 2024 - Mar. 2024",
    links: {
      github: "https://github.com/acm-ucr/isa-website",
      web: "https://isa.ucrhighlanders.org/",
    },
    body: [
      "Led a team of 9 developers to develop a front-end website for ISA @ UCR using Next.js Static Website Generation.",
      "Managed weekly meetings teaching Git, React and Tailwind CSS concepts to onboard members and peer-reviewed 60+ pull requests ensuring code quality.",
      "Enhanced user experience of the website by creating visually appealing React components using Framer Motion to animate the web pages. Ensured mobile responsiveness with Tailwind CSS and reduced code complexity by mapping static club information with JavaScript.",
    ],
    image: ISA,
  },
  {
    title: "bitByBit",
    date: "Jun. 2023 - Jan. 2024",
    links: {
      github: "https://github.com/acm-ucr/undecided",
    },
    body: [
      "Worked with 5 developers to develop an online coding platform teaching students programming fundamentals.",
      "Refurbished legacy code base to conform to ACM @ UCR’s standardized web architecture, improving maintainability and reducing overall code complexity.",
      "Utilized NextAuth.js to implement error handling for invalid problem IDs and user authentication, refining website security and user experience.",
    ],
    image: BBB,
  },
  {
    title: "Computer Science Courses Recommender",
    date: "Sep. 2022 - Dec. 2022",
    links: {
      github: "https://github.com/seanquiambao/CS-Course-Recommender",
    },
    body: [
      "Worked with 3 developers to create a C++ terminal program that generates a list of easiest computer science courses at UC Riverside",
      "Utilized C++ SQLite3 as a database engine to query and fetch college courses and store user’s information.",
      "Profiled memory leaks of multiple SQL query functions using Valgrind.",
      "Configured 10+ unit tests using GoogleTest framework testing to validate the functionality of query functions",
    ],
    image: CS,
  },
  {
    title: "Powerlifting Project",
    date: "Dec. 2023 - Present",
    links: {
      github: "https://github.com/ZacharyTa/powerlifting-project",
    },
    body: ["Currently in development"],
    image: POWER,
  },
];

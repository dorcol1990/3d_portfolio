import { ace, back, freelancer } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    motion,
    mui,
    nextjs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Ace Digital Studio",
        icon: ace,
        iconBg: "#FF8500",
        date: "Jul 2023 - September 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Teacher Assistant",
        company_name: "danilovesovic.com",
        icon: back,
        iconBg: "#E12558",
        date: "September 2023 - December 2023",
        points: [
            "Guided students in web development, ensuring understanding of key concepts through engaging lectures and practical exercises.",
            "Taught HTML, CSS, and Tailwind CSS, aligning coursework with industry standards to develop versatile skills in students.",
            "Created challenging tasks to reinforce theoretical knowledge, promoting practical application in web development.",
            "Monitored student performance, provided feedback, and offered support to enhance the learning experience in web development.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Freelancer",
        icon: freelancer,
        iconBg: "#b7e4c7",
        date: "Jan 2024 - present",
        points: [
            "Successfully delivered multiple websites using Next.js and React, emphasizing seamless user experiences and modern design.",
            "Crafted tailored solutions, prioritizing client needs, and implementing scalable and responsive web applications.",
            "Implemented efficient code practices in Next.js, ensuring optimal website performance and loading speeds.",
            "Demonstrated adaptability by staying current with industry trends, fostering innovation in web development projects.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Advertisement Placement Application',
        description: "I have worked on the development of an application that enables users to post advertisements for renting various items.",
        link: 'https://e-rent.rs/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: "Programming School Website",
        description: "Programming School Website: Guiding Beginners into the World of Coding",
        link: 'https://www.hellohood.rs/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built app for finding and comparing cars on the market, streamlining the car-rent process.',
        link: 'https://github.com/dorcol1990/cars_showcase',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'E-Shop',
        description: 'Effortless Shopping: An E-Shop Streamlining Online Discovery for Customers',
        link: 'https://github.com/dorcol1990/e-commerce-client',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Drum Kit',
        description: "Drums, hands down my favorite thing. Feel free to check it out on my GitHub and have some fun!",
        link: 'https://github.com/dorcol1990/javascript-drum-kit',
    }
];
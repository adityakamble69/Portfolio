import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Aditya Shashikant Kamble",
  initials: "AK",
  url: "https://aadii-personal-portfolio.vercel.app/",
  location: "Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Maharashtra",
  description:
    "Full Stack Developer • Software Developer • Web Developer • UI/UX Designer",
  summary:
    "Passionate Full Stack Developer focused on building modern, scalable, and user-friendly web applications. I turn ideas into impactful digital solutions through clean code, intuitive design, strong performance, and secure technology.",
  avatarUrl: "/aditya.jpg",
  skills: [
    { name: "TypeScript", icon: Icons.typescript },
    { name: "JavaScript", icon: Icons.javascript },
    { name: "HTML5", icon: Icons.html5 },
    { name: "CSS3", icon: Icons.css3 },
    { name: "Next.js", icon: Icons.nextjs },
    { name: "React", icon: Icons.react },
    { name: "Svelte", icon: Icons.svelte },
    { name: "SvelteKit", icon: Icons.svelte },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Three.js", icon: Icons.globe },
    { name: "React Three Fiber", icon: Icons.react },
    { name: "Framer Motion", icon: Icons.framermotion },
    { name: "GSAP", icon: Icons.globe },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Nodejs },
    { name: "Flask", icon: Icons.flask },
    { name: "Python", icon: Python },
    { name: "MySQL", icon: Icons.mysql },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Supabase", icon: Icons.supabase },
    { name: "JWT Auth", icon: Icons.globe },
    { name: "REST API Design", icon: Icons.globe },
    { name: "Postman", icon: Icons.postman },
    { name: "VS Code", icon: Icons.globe },
    { name: "Git", icon: Icons.git },
    { name: "GitHub", icon: Icons.github },
    { name: "Vercel", icon: Icons.vercel },
    { name: "Render", icon: Icons.vercel },
    { name: "Figma", icon: Icons.figma },
    { name: "Linux", icon: Icons.globe },
    { name: "XAMPP", icon: Icons.mysql },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "adityakamble692006@gmail.com",
    tel: "+91 75584 33644",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adityakamble69",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adityakamble69",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/aadii_.yy",
        icon: Icons.instagram,
        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.com/users/adityakamble69",
        icon: Icons.discord,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:adityakamble692006@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Codomax Digital Solutions",
      href: "#",
      badges: [],
      location: "Santhoshapuram, Chennai, India (On-site/Remote)",
      title: "Full Stack Web Development Intern",
      logoUrl: "/codomax-logo.png",
      start: "August 2026",
      end: "Present",
      description:
        "Developed full-stack web applications through hands-on industry assignments. Built responsive, functional, and user-friendly web solutions with modern technologies. Worked with REST APIs, database schemas, and structured deployment pipelines.",
    },
    {
      company: "Asterisc Technocart Pvt Ltd",
      href: "#",
      badges: [],
      location: "India (On-site)",
      title: "Web Developer Intern",
      logoUrl: "/asterisc-technocart-logo.png",
      start: "January 2026",
      end: "Present",
      description:
        "Contributed to designing and developing responsive frontend components. Developed front-end pages focusing on cross-device compatibility and UI design. Troubleshooting code issues and improving existing website functionalities.",
    },
    {
      company: "Techfest, IIT Bombay",
      href: "#",
      badges: [],
      location: "Nagpur, India",
      title: "College Ambassador",
      logoUrl: "/techfest-iit-bombay-logo.png",
      start: "July 2026",
      end: "Present",
      description:
        "Promoted Techfest initiatives, technical courses, and competitions among peers. Drove student engagement, leadership, and public relations within Nagpur.",
    },
  ],
  education: [
    {
      school: "RTM Nagpur University",
      href: "#",
      degree: "Bachelor of Vocational Education (B.Voc) in Computer Science / Software Development (GPA: 7.8/10.00)",
      logoUrl: "/rtmnu.jpg",
      start: "Duration",
      end: "3 Years",
    },
    {
      school: "Mahatma Gandhi Junior College",
      href: "#",
      degree: "HSC Board - Science Stream (Mathematics & Computer Science)",
      logoUrl: "/gandhi.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Yashoda Marathi Madhymik Vidhyalaya",
      href: "#",
      degree: "SSC Board (Maharashtra State Board)",
      logoUrl: "/yashoda.jpg",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "LearnSphere",
      href: "https://github.com/adityakamble69/LearnSphere.git",
      dates: "2026",
      active: true,
      description:
        "A pure JavaScript Learning Management System (LMS) with course cataloging, simulated course tracking, interactive quizzes, student progress, certificates, and an administrative panel.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "sessionStorage",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/adityakamble69/LearnSphere.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/learnsphere.png",
      video: "",
    },
    {
      title: "Lifeline",
      href: "https://github.com/adityakamble69/Blood-Donation-Camp-Management-Platform.git",
      dates: "2026",
      active: true,
      description:
        "A healthcare and collaboration platform connecting blood donors, recipients, and camps. Includes real-time donor matching, campaign management, request processing, and secure analytics.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Supabase RLS",
        "Express.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/adityakamble69/Blood-Donation-Camp-Management-Platform.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/lifelineblood.png",
      video: "",
    },
    {
      title: "ArcoCafe",
      href: "https://arco-cafe.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "An interactive cafe website showcasing order placements, menu configuration, tables reservation system, and a visual customer gallery.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "EmailJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://arco-cafe.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/adityakamble69/ArcoCafe.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/arcocafe.png",
      video: "",
    },
    {
      title: "Hackathon Team Matcher",
      href: "https://hackethon-team-matcher.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "Interactive matchmaking platform allowing developers to create teams, outline required skills, and request/invite members dynamically.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Supabase RLS",
        "JWT Auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://hackethon-team-matcher.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/adityakamble69/Hackethon-Team-Matcher.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hackethonteam.png",
      video: "",
    },
    {
      title: "Urban Infrastructure Cascade Simulator",
      href: "https://github.com/adityakamble69/Urban-Infrastructure-Cascade-Simulator",
      dates: "2026",
      active: true,
      description:
        "A smart city simulator demonstrating deterministic cascading failures across municipal assets (power grid, water networks, transit lines) using interactive node diagrams.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/adityakamble69/Urban-Infrastructure-Cascade-Simulator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/urbaninfra.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "CODEX State Level Hackathon 2026",
      dates: "August 1st, 2026",
      location: "Priyadarshini Bhagwati College of Engineering, Nagpur",
      description:
        "Participated in the state-level 8-hour hackathon organized by the Department of Information Technology in collaboration with GrepX Service Pvt. Ltd. Developed project solutions as a member of Team 'Syntax Squad'.",
      image: "/grepx.png",
      links: [],
    },
    {
      title: "TECHXPLORE 2K26 — Technical Hackathon Competition",
      dates: "August 19th, 2026",
      location: "Tulsiramji Gaikwad-Patil College of Engineering & Technology, Nagpur",
      description:
        "Participated in the Technical Hackathon Competition organized by the CSE Department on the occasion of the departmental technical event TECHXPLORE 2K26.",
      image: "/techxplore.png",
      links: [],
    },
    {
      title: "CODEFORGE - 2K26",
      dates: "August 25th, 2026",
      location: "G H Raisoni Skill Tech University, Nagpur",
      description:
        "Participated in the CODEFORGE-2K26 'Code, Create, Innovate' competition at Shraddha Park, Nagpur, demonstrating coding, collaboration, and software design skills.",
      image: "/codeforge.png",
      links: [],
    },
  ] as readonly {
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    win?: string;
    mlh?: string;
    links: readonly {
      title: string;
      icon: any;
      href: string;
    }[];
  }[],
} as const;

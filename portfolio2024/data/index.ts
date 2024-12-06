export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Innovation Hub", link: "#innovation_pipeline" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Empowering innovation with collaboration and communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Trusted partner for global solutions, flexible time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stacks",
    description: "Always Refining",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building meaningful experiences",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

import slugify from "slugify";

export const projects = [
  {
    id: 1,
    title: "Zeniverse: Portal to the Metaverse",
    slug: slugify("Zeniverse: Portal to the Metaverse", { lower: true, remove: /[:]/g }),
    des: "Bridges the gap between digital and physical worlds, offering a seamless platform for immersive and harmonious virtual experiences, enabling users to connect within the expansive realm.",
    img: "/zeniverse.png",
    iconLists: ["/re.svg", "/vite.svg", "/tail.svg", "/gsap.svg", "/js.svg", "/clippy.png"],
    link: "https://zeniverse.vercel.app",
    screenshots: [
      "/screenshots/zeniverse_1.png",
      "/screenshots/zeniverse_2.png",
      "/screenshots/zeniverse_3.png",
      "/screenshots/zeniverse_4.png",
    ],
  },
  {
    id: 2,
    title: "Evently: Event Management Platform",
    slug: slugify("Evently: Event Management Platform", { lower: true, remove: /[:]/g }),
    des: "Empowers users to effortlessly create, organize, and manage events. Solving the complexities of event planning with intuitive tools for attendee tracking, and seamless communication.",
    img: "/evently.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/nodejs.svg", "/mongodb.svg", "/stripe.svg"],
    link: "https://evently-pink-sigma.vercel.app",
    screenshots: [
      "/screenshots/evently_1.png",
      "/screenshots/evently_2.png",
      "/screenshots/evently_3.png",
      "/screenshots/evently_4.png",
    ],
  },
  {
    id: 3,
    title: "StoreIt: Your Personal Cloud",
    slug: slugify("StoreIt: Your Personal Cloud", { lower: true, remove: /[:]/g }),
    des: "Empowers users to securely store, organize, and share their PDFs, music, videos, and more. Solving the hassle of managing digital content while ensuring seamless accessibility across devices.",
    img: "/storeit.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/figma.svg", "/appwrite.png", "/shadcn.png"],
    link: "https://www.storeit.amberforrester.io",
    screenshots: [
      "/screenshots/storeit_1.png",
      "/screenshots/storeit_2.png",
      "/screenshots/storeit_3.png",
      "/screenshots/storeit_4.png",
    ],
  },
  {
    id: 4,
    title: "LiveDocs: Real-Time Collaboration",
    slug: slugify("LiveDocs: Real-Time Collaboration", { lower: true, remove: /[:]/g }),
    des: "Revolutionizes teamwork by enabling users to create, share, and refine content together solving the challenge of disjointed workflows and fostering seamless productivity.",
    img: "/livedocs.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nodejs.svg", "/re.svg", "/clerk.png", "/liveblocks.png"],
    link: "https://livedocs-livid.vercel.app",
    screenshots: [
      "/screenshots/livedocs_1.png",
      "/screenshots/livedocs_2.png",
      "/screenshots/livedocs_3.png",
      "/screenshots/livedocs_4.png",
    ],
  },
  {
    id: 5,
    title: "Quick Gist: AI-Powered Summarizer",
    slug: slugify("Quick Gist: AI-Powered Summarizer", { lower: true, remove: /[:]/g }),
    des: "Leverages OpenAI's GPT model to condense lengthy articles into concise summaries, solving the problem of information overload and helping users quickly grasp key insights with ease.",
    img: "/quickgist.png",
    iconLists: ["/openai.png", "/tail.svg", "/js.svg", "/vite.svg", "/redux.svg", "/rapidapi.png", "/re.svg"],
    link: "https://quickgist.amberforrester.io",
    screenshots: [
      "/screenshots/quickgist_1.png",
      "/screenshots/quickgist_2.png",
      "/screenshots/quickgist_3.png",
      "/screenshots/quickgist_4.png",
    ],
  },
  {
    id: 6,
    title: "Modern Next.js Portfolio: Personal Milestone",
    slug: slugify("Modern Next.js Portfolio: Personal Milestone", { lower: true, remove: /[:]/g }),
    des: "Showcases a beautifully crafted and highly functional portfolio, effectively presenting skills and projects while marking a milestone of dedication and growth in web development.",
    img: "/portfolio.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/aceternityui.png", "/npm.svg"],
    link: "https://www.amberforrester.io",
    screenshots: [
      "/screenshots/portfolio_1.png",
      "/screenshots/portfolio_2.png",
      "/screenshots/portfolio_3.png",
      "/screenshots/portfolio_4.png",
    ],
  },
];

export const innovation_pipeline = [
  {
    desc:
      "@Vibe is an innovative internal social media platform designed to enhance productivity and foster collaboration within companies. Inspired by the simplicity of Threads, @Vibe serves as a centralized hub for team communication, department updates, and company-wide interactions all under one roof. Empowering employees to stay connected, informed, and engaged. It’s more than just a communication tool; it’s the heartbeat of a modern, connected workplace, redefining how teams share, grow, and succeed together.",
    name: "@Vibe",
    title: "Redifining Workplace Collaboration",
    src: "/vibe.png",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg", "/mongodb.svg", "/figma.svg"],
  },
  {
    desc:
      "StackSociety is a dedicated platform where full-stack software engineers come together to share invaluable insights, experiences, and resources. It’s a hub for developers to showcase their journeys, offer tips and tricks, and recommend books that have significantly shaped their growth. Built with Next.js, StackSociety is designed to foster collaboration, enhance the open-source community, and amplify the value of shared knowledge. It’s more than a blog—it’s a movement to support and uplift developers across the globe.",
    name: "Stack Society",
    title: "Empowering Developers Together",
    src: "/stacksociety.png",
    iconLists: ["/next.svg", "/re.svg", "/graphql.svg", "/tail.svg", "/hygraph.png"],
  },
  {
    desc:
      "Donezino is your ultimate productivity companion, designed to help you organize tasks, stay focused, and achieve your goals effortlessly. From time-blocking your day to managing family events like birthdays and anniversaries, Donezino keeps everything in one place. Prioritize daily tasks by importance, set reminders, and never miss a deadline again. With Donezino, simplify your schedule and take control of your time, whether you're tackling work projects or personal to-dos.",
    name: "Donezno",
    title: "Productivity Made Simple",
    src: "/donezno.png",
    iconLists: ["/next.svg", "/re.svg", "/supabase.png", "/zustand.png", "/tail.svg", "/ts.svg", "/tanstackquery.png"],
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Innovation Driven Full Stack Software Engineer",
    desc: "Pioneered full stack applications, balancing both front-end and back-end responsibilities.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "RESTful API Lead",
    desc: "Optimized system integrations and streamlined secure data flow between applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Scalable Solutions Architect",
    desc: "Tailored to specific business needs, ensuring alignment with long-term growth strategies and objectives.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mentorship-Focused Lead Developer",
    desc: "Hands on leadership and guidance fostering skill growth and continous improvement.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/AmberForrester"
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/amber-forrester-6455a582/"
  },
];
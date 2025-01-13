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
    source: "https://github.com/AmberForrester/zeniverse",
    screenshots: [
      "/screenshots/zeniverse_1.png",
      "/screenshots/zeniverse_2.png",
      "/screenshots/zeniverse_3.png",
      "/screenshots/zeniverse_4.png",
    ],
    features: [
      {
        title: "Scroll Activated Visual Effects",
        description: "Showcasing mastery in GSAP, creating dynamic, scroll-triggered animations that captivate users and enhance storytelling through interactive visuals."
      },
      {
        title: "Artistic Geometric Transitions",
        description: "Harnessing the power of CSS clip-path to craft intricate geometric animations, merging creativity with technical precision."
      },
      {
        title: "Advanced Hover Interactions",
        description: "Leveraging React.js to deliver cutting-edge 3D hover effects, demonstrating expertise in creating responsive, interactive elements that elevate user engagement."
      },
      {
        title: "Immersive Media Integration",
        description: "Seamlessly blending video elements into the design for a cinematic user experience, highlighting proficiency in modern front-end development."
      },
      {
        title: "Polished UI/UX Design",
        description: "Expertly utilizing Tailwind CSS to create visually stunning, user-friendly interfaces with buttery smooth interactions and pixel perfect alignment."
      },
      {
        title: "Device-Agnostic Responsiveness",
        description: "Ensuring exceptional usability across all devices, showcasing skills in responsive web design for optimal performance on desktops, tablets, and smartphones."
      },
    ],
    pipeline: [
      {
        title: "Player Demos",
        description: "Develop a showcase section for dynamic, real-time or recorded gameplay demos, highlighting how users interact with the platform's features in creative and engaging ways."
      },
      {
        title: "Community Driven Reviews",
        description: "Incorporate a review system where members of the Zeniverse community can share authentic feedback, fostering trust and engagement among users."
      },
      {
        title: "Insightful Blogs",
        description: "Launch a dedicated blog section to share development updates, community stories, and thought leadership on bridging the gap between digital and physical worlds."
      },
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
    source: "https://github.com/AmberForrester/evently",
    screenshots: [
      "/screenshots/evently_1.png",
      "/screenshots/evently_2.png",
      "/screenshots/evently_3.png",
      "/screenshots/evently_4.png",
    ],
    features: [
      {
        title: "Robust User Authentication",
        description: "Leveraging Clerk to implement secure, scalable user authentication and management with seamless account creation, login, and session handling."
      },
      {
        title: "Dynamic Event Lifecycle Management",
        description: "Building end-to-end features for events, including -",
        subfeatures: [
          "Creation: Crafting user-friendly event creation forms with React Hook Form and Zod validation.",
          "Detail Views: Optimizing event detail pages with advanced database queries using Mongoose and Next.js routing.",
          "Edit Existing Events: Enable real-time updates to event information while preserving data accuracy through validation and user feedback.",
          "Remove Events: Implement straightforward yet secure deletion workflows, empowering users to manage their events effectively."
        ]
      },
      {
        title: "Intelligent Event Recommendations",
        description: "Designing a recommendation engine to enhance user engagement by showcasing related events on profile and event detail pages."
      },
      {
        title: "Personalized User Dashboards",
        description: "Creating visually compelling dashboards with Tailwind CSS, displaying user-specific events for intuitive organization."
      },
      {
        title: "Advanced Search and Filters",
        description: "Implementing efficient search and filtering functionality using server-side rendering and client-side interactivity for precise results."
      },
      {
        title: "Dynamic Event Categories",
        description: "Designing a flexible category management system to accommodate evolving event types with ease."
      },
      {
        title: "Integrated Payment System",
        description: "Developing secure and seamless payment processing powered by Stripe, ensuring user-friendly checkout experiences."
      },
      {
        title: "Comprehensive Order Management",
        description: "Building an intuitive order tracking system, including searchable transaction histories for both users and administrators."
      },
      {
        title: "Scalable Architecture",
        description: "Architecting a modular, reusable Next.js codebase for enhanced scalability, maintainability, and team collaboration."
      },
    ],
    pipeline: [
      {
        title: "Global Currency Support",
        description: "Implement a multi-currency payment system to streamline transactions for users worldwide, leveraging real-time currency conversion APIs for accuracy."
      },
      {
        title: "Hybrid Event Date Management",
        description: "Introduce flexible scheduling options to support events with separate dates for in person and remote attendees, ensuring seamless coordination across formats."
      },
      {
        title: "Time Zone Customization",
        description: "Add intelligent time zone support, allowing organizers and attendees to view event schedules in their local time zones, utilizing libraries like Luxon for precise date-time handling."
      },
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
    source: "https://github.com/AmberForrester/store_it",
    screenshots: [
      "/screenshots/storeit_1.png",
      "/screenshots/storeit_2.png",
      "/screenshots/storeit_3.png",
      "/screenshots/storeit_4.png",
    ],
    features: [
      {
        title: "Robust Authentication System",
        description: "Implemented secure and seamless user authentication using Appwrite, including OTP verification for enhanced security."
      },
      {
        title: "Efficient File Uploading",
        description: "Designed a smooth file upload process for diverse file types, ensuring optimal performance and secure storage of documents, images, videos, and more."
      },
      {
        title: "Advanced File Management",
        description: "Developed a comprehensive file management system featuring real-time organization, categorization, and summary storage for an effortless user experience."
      },
      {
        title: "Streamlined File Sharing",
        description: "Enabled hassle-free file sharing capabilities, fostering collaboration with secure access controls."
      },
      {
        title: "Insightful Dashboard",
        description: "Built a dynamic dashboard that provides users with a visual overview of their storage usage, recent uploads, and categorized file summaries."
      },
      {
        title: "Powerful Global Search",
        description: "Integrated a robust global search feature for quickly locating files, shared content, and resources across the platform."
      },
      {
        title: "Customizable Sorting Options",
        description: "Delivered flexible file sorting by name, size, or date to improve efficiency and user productivity."
      },
      {
        title: "Modern UI/UX Design",
        description: "Leveraged Tailwind CSS and shadcn/ui to craft a sleek, responsive, and intuitive interface that works flawlessly across all devices."
      },
    ],
    pipeline: [
      {
        title: "Custom Avatars",
        description: "Empower users to select or upload personalized avatars during sign-up and/or after completing their profiles, enhancing identity personalization."
      },
      {
        title: "Enhanced File Management Rules",
        description: "Ensure shared file integrity by restricting users from deleting files shared with them, while allowing full control over files they upload."
      },
      {
        title: "Custom Folder Organization",
        description: "Introduce customizable folder structures, enabling users to personalize their dashboards and streamline content organization for an intuitive experience."
      },
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
    source: "https://github.com/AmberForrester/live_docs",
    screenshots: [
      "/screenshots/livedocs_1.png",
      "/screenshots/livedocs_2.png",
      "/screenshots/livedocs_3.png",
      "/screenshots/livedocs_4.png",
    ],
    features: [
      {
        title: "Secure Authentication with Google",
        description: "Implemented user-friendly, secure sign-in and sign-out processes using NextAuth, ensuring robust session management and data privacy."
      },
      {
        title: "Real-Time Collaborative Editing",
        description: "Engineered seamless, simultaneous document editing for multiple users with instant updates, leveraging Liveblocks for cutting-edge real-time synchronization."
      },
      {
        title: "Comprehensive Document Management",
        description: "Developed intuitive features for document lifecycle management -",
        subfeatures: [
          "Create New Documents: Enabled quick setup with auto-saving for uninterrupted productivity.",
          "Delete Documents: Integrated secure deletion capabilities to maintain document control.",
          "Advanced Sharing Options: Empowered users to share documents with customizable view and edit permissions via email or direct link.",
          "Organized Document Listings: Designed clear navigation to access owned or shared documents efficiently."
        ]
      },
      {
        title: "In-Context Commenting",
        description: "Facilitated threaded discussions through inline and general comments, enhancing collaboration and feedback workflows."
      },
      {
        title: "Live Collaboration Indicators",
        description: "Visualized team activity with live presence indicators, offering real-time insights into collaborators' actions within the editor."
      },
      {
        title: "Smart Notifications System",
        description: "Built a responsive notification system to inform users about document updates, comments, and collaborator activities, ensuring everyone stays aligned."
      },
      {
        title: "Fully Responsive Design",
        description: "Created a fully responsive, adaptive interface with Tailwind CSS, enabling seamless usage across all devices, from desktop to mobile."
      },
    ],
    pipeline: [
      {
        title: "Version History and Rollback",
        description: "Implement a robust version control system to track changes made by collaborators in real-time. Allow users to view edit histories, compare document versions, and roll back to previous iterations seamlessly."
      },
      {
        title: "Integrated Voice and Video Collaboration",
        description: "Enhance collaboration by embedding voice and video calling directly into the platform. This enables teams to discuss changes and brainstorm ideas without leaving the document interface, fostering real-time communication."
      },
      {
        title: "Offline Mode with Sync",
        description: "Introduce an offline editing mode to ensure uninterrupted productivity. Changes made offline will sync automatically to the cloud once the user regains internet connectivity, leveraging WebRTC or IndexedDB for local storage."
      },
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
    source: "https://github.com/AmberForrester/QuickGist",
    screenshots: [
      "/screenshots/quickgist_1.png",
      "/screenshots/quickgist_2.png",
      "/screenshots/quickgist_3.png",
      "/screenshots/quickgist_4.png",
    ],
    features: [
      {
        title: "Modern and Intuitive UI",
        description: "Designed a sleek, user-friendly interface with Tailwind CSS, ensuring seamless navigation and interaction for all users."
      },
      {
        title: "AI-Powered Article Summarization",
        description: "Leveraged OpenAI's GPT-4 to generate concise, insightful summaries from lengthy articles, enabling quick and efficient content consumption."
      },
      {
        title: "Local Storage Integration",
        description: "Implemented automatic saving of summaries to local storage, allowing users to effortlessly manage and revisit their reading history."
      },
      {
        title: "Effortless Clipboard Functionality",
        description: "Enabled quick copying of generated summaries to the clipboard for easy sharing and storage."
      },
      {
        title: "Customizable History Management",
        description: "Added an intuitive delete feature, allowing users to keep their summary history organized with a single click."
      },
      {
        title: "Optimized API Performance",
        description: "Utilized Redux Toolkit Query for efficient, conditional API requests, enhancing app performance and reducing unnecessary data fetching."
      },
    ],
    pipeline: [
      {
        title: "Customizable Summary Lengths",
        description: "Introduce options for users to tailor summary lengths based on their preferences, such as short bullet points, medium-length summaries, or detailed explanations, offering flexibility to suit varying needs."
      },
      {
        title: "Multi-Language Support",
        description: "Expand the platform’s accessibility by enabling summaries in multiple languages using OpenAI’s multilingual capabilities. This feature would allow users worldwide to process and understand content in their native languages."
      },
      {
        title: "Context-Aware Summarization Modes",
        description: "Develop advanced summarization modes tailored for specific contexts, such as educational overviews, technical briefs, or business highlights, providing domain-specific insights while preserving key details."
      },
    ],
  },
  {
    id: 6,
    title: "Next.js Portfolio: Personal Milestone",
    slug: slugify("Modern Next.js Portfolio: Personal Milestone", { lower: true, remove: /[:]/g }),
    des: "Showcases a beautifully crafted and highly functional portfolio, effectively presenting skills and projects while marking a milestone of dedication and growth in web development.",
    img: "/portfolio.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/aceternityui.png", "/npm.svg"],
    link: "https://portfolio.amberforrester.io",
    source: "https://github.com/AmberForrester/Portfolio",
    screenshots: [
      "/screenshots/portfolio_1.png",
      "/screenshots/portfolio_2.png",
      "/screenshots/portfolio_3.png",
      "/screenshots/portfolio_4.png",
    ],
    features: [
      {
        title: "Dynamic Hero Section",
        description: "Designed an engaging introduction with spotlight effects and a dynamic background, leveraging Framer Motion and Tailwind CSS to create visually stunning animations."
      },
      {
        title: "Bento Grid Layout",
        description: "Built a modern, modular layout for personal details using advanced CSS techniques and Tailwind utilities, delivering a sleek and adaptable design."
      },
      {
        title: "Interactive 3D Elements",
        description: "Integrated immersive 3D components, including a GitHub-style globe, utilizing @react-three/fiber and three-globe for enhanced interactivity."
      },
      {
        title: "Next.js Dynamic Routing",
        description: "Implemented a flexible file-based routing system in Next.js, dynamically rendering project pages and portfolio sections for seamless scalability and navigation."
      },
      {
        title: "Canvas Effects",
        description: "Engineered visually striking HTML5 canvas effects in my approach section using three.js and CSS animations to captivate viewers."
      },
      {
        title: "Aceternity UI Integration",
        description: "Incorporated Aceternity UI components for consistent, elegant styling and reusable design elements across the portfolio."
      },
      {
        title: "Optimized Code Architecture",
        description: "Developed a scalable, modular codebase with TypeScript and utilities like clsx and tailwind-merge for maintainable and efficient styling."
      },
    ],
    pipeline: [
      {
        title: "Performance Optimization",
        description: "Implement advanced performance improvements focused on Core Web Vitals metrics such as Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and First Input Delay (FID)."
      },
      {
        title: "Interactive Case Studies",
        description: "Add in-depth project case studies with interactive elements such as demo videos, technical challenges, and solutions."
      },
      {
        title: "Dynamic Theme Customization",
        description: "Incorporate a theme customization feature allowing visitors to toggle between light, dark, and custom themes, showcasing design adaptability while improving user experience."
      },
    ],
  },
];

export const innovation_pipeline = [
  {
    desc:
      "@Vibe is an innovative internal social media platform designed to enhance productivity and foster collaboration within companies. Inspired by the simplicity of Threads, @Vibe serves as a centralized hub for team communication, department updates, and company-wide interactions all under one roof. Empowering employees to stay connected, informed, and engaged. It’s more than just a communication tool; it’s the heartbeat of a modern, connected workplace, redefining how teams share, grow, and succeed together.",
    name: "@Vibe",
    title: "Redefining Workplace Collaboration",
    src: "/vibe.png",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg", "/mongodb.svg", "/figma.svg"],
  },
  {
    desc:
      "StackSociety is a dedicated platform where Full Stack Software Developer's come together to share invaluable insights, experiences, and resources. It’s a hub for developers to showcase their journeys, offer tips and tricks, and recommend books that have significantly shaped their growth. Built with Next.js, StackSociety is designed to foster collaboration, enhance the open-source community, and amplify the value of shared knowledge. It’s more than a blog—it’s a movement to support and uplift developers across the globe.",
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
    title: "Innovation Driven Full Stack Software Developer",
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
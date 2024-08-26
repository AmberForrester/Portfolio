<a id="readme-top"></a>

<h1 align='center'>2024 Portfolio :mortar_board:</h1> 

<div align='center'>

<img src='' alt=''>

<p align='center'>Unveil your journey of a Developer who turns complex problems into elegant solutions. This portfolio is more than just a showcase—it's a testament to the power of passion, precision, and relentless curiosity.
<br />
<br /> Are you ready to be inspired?

<a href='https://github.com/AmberForrester/Portfolio'><strong>Source Code »</strong></a>
<br />
<br />
<a href='https://github.com/AmberForrester/Portfolio/issues/new?assignees=&labels=bug&projects=&template=bug-report-%F0%9F%90%9E.md'>Report Bug</a>
.
<a href='https://github.com/AmberForrester/Portfolio/issues/new?assignees=&labels=enhancement&projects=&template=feature-request-%F0%9F%9A%80.md'>Request Feature</a>
</p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-this-project">About This Project</a>
      <ul>
        <!-- <li><a href="#built-with">Built With</a></li> -->
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setting-up-the-environment">Setting up the Environment</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
          <ul>
            <li><a href="#vscode-extensions">VSCode Extensions</a></li>
            <li><a href="#project-dependencies">Project Dependencies</a></li>   
          </ul>
      </ul>
    </li>
    <li><a href="#project-features">Project Features</a>
      <ul>
        <li><a href="#main-page-spotlight-styling">Main Page Spotlight Styling</a></li>
        <li><a href="#ui-grid-background">UI Grid Background</a></li>
        <li><a href="#dark-mode-in-next.js">Dark Mode in Next.js</a></li>
        <li><a href="#text-generate-effect">Text Generate Effect</a></li>
        <li><a href="#add-magic-button">Add Magic Button</a></li>
        <li><a href="#react-icons">React Icons</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />



# About This Project

Build a modern Developer Portfolio using React, Next.JS, TypeScript and Aceternity UI providing the most beautiful Tailwind CSS with Framer Motion components.  

A good understanding of React, Next.JS, TypeScript, Aceternity UI and Tailwind CSS would be beneficial to helping you create this project. 

However, it is always good practice regardless of your experience to refer to the Documentation available when developing ***any*** project.  

*Please refer to the following Documentation for this specific project:*
1. [React](https://react.dev/learn)
2. [Next.JS](https://nextjs.org/docs/getting-started/installation)
3. [TypeScript](https://www.typescriptlang.org/docs/)
4. [Aceternity UI](https://ui.aceternity.com/)
5. [TailwindCSS](https://v2.tailwindcss.com/docs/installation)
6. [npmjs](https://www.npmjs.com/)

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Getting Started

Start a new Next.js app using `create-next-app`, this will set up everything automatically. 
To create a project, run the following command in your terminal:
```
npx create-next-app@latest
```

### Installation

During the installation process you will see the following prompts within your terminal, and for this particular project pay attention to the answers that are <ins>underlined</ins>.

Those are the options you want to choose using the left/right arrows, and enter on your keyboard:
> What is your project named?*type name of project here* <br />
> Would you like to use TypeScript? No / <ins>Yes</ins> <br />
> Would you like to use ESLint? No / <ins>Yes</ins> <br />
> Would you like to use Tailwind CSS? No / <ins>Yes</ins><br />
> Would you like your code inside a `src/` directory? <ins>No</ins> / Yes <br />
> Would you like to use App Router? (recommended) No / <ins>Yes</ins> <br />
> Would you like to customize the import alias (`@/*` by default)? <ins>No</ins> / Yes <br />

Navigate to the project's root directory within the terminal using the following command:
```
cd .\nameofyourproject\
```

Run the following command to start your application:
```
npm run dev
```
Open (http://localhost:3000) on your browser to view your project.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### Setting up the Environment 

Starting any project with a clean slate is key for the organization and maintability of your code as it grows later on. 

To ensure we kick off to a great start you can delete the following:
1. Within your `app` folder, **delete** the `favicon.ico` file.
2. Within the `globals.css` file you will **keep** the TailwindCSS import of the base, components and the utilities:  
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
3. Clear all of the styles in the `globals.css` file. 
4. The `layout.tsx` file is where the font being used is located, and where you will change the title and description of your project, on line 7:
```tsx
export const metadata: Metadata = {
  title: "CHANGE YOUR TITLE HERE",
  description: "ADD A DESCRIPTION HERE",
};
```
> [!IMPORTANT]
> If done correctly, these changes will be visible in your browser's tab.
5. Go to your `page.tsx` file, and delete all of the code within the return. Once you have done that you can now add in:
```tsx
export default function Home() {
  return (
    <main>
      <div>
        <h1>Hello, Portfolio</h1>
      </div>
    </main>
  );
}
```
> [!IMPORTANT]
> If done correctly, you should see the message output on your webpage.
6. To ensure TailwindCSS is working, add some className's with TailwindCSS properties watching the rendered output on your webpage.
```tsx
export default function Home() {
  return (
    <main className='relative bg-black'>
      <div>
```
7. Remove the existing backgroundImage code within your `tailwind.config.ts` file and extend the theme by adding your preferred colours:
```ts
theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000319'
        },
      },
    },
  },
```
> [!TIP]
> Add custom colours of your choice, plus a default and create a variant colour to further personalize your portfolio project. 

<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Prerequisites 

<h4 align='center'>VSCode Extensions</h4> 

1. <ins>TailwindCSS IntelliSense</ins> - *Visualize which CSS properties are applied given a specific TailwindCSS className.* 
2. <ins>ES7+ React/Redux/React-Native snippets</ins> - *Provides shorthand prefixes,creates faster code snippets, and syntax.*
<br />

<h4 align='center'>Project Dependencies</h4> 

The specific packages this project depends on are listed as dependencies or devDependencies in your packages `package.json` file. 

When you or another user run the npm install, npm will download both of your dependencies and devDependencies that are listed in the package.json meeting the semantic version requirements listed for each. 

* dependencies: Required packages by your application in production.
* devDependencies: Packages only needed for both testing and local development.

For this specific project, see the package.json file below:<br>
`package.json` file contents will go here.
<br />

To learn more about ***"Specifying dependencies and devDependencies in a package.json file"*** read the article by visiting the [npmDocs](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)

<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Project Features 

<h4 align='center'>Main Page Spotlight Styling</h4> 

Create a spotlight style on the main page within the `Hero.tsx` file using [Aceternity UI](https://ui.aceternity.com/). Once on the website use CTRL + K to bring up the search functionality, then type: spotlight and follow installation instructions: <br />

Open a ***second*** terminal to install dependencies and copy code:
```
npm i framer-motion clsx tailwind-merge
```

Create a folder within the root folder named `lib`. Within that folder create a new file named `utils.ts`, then add the *"Add util file"* code as a helper function to make everything work with TailwindCSS:
```ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Create a folder within the `components` folder called `ui` - <ins>this will hold all the Acerternity UI components.</ins> <br />
Within the `ui` folder create the `Spotlight.tsx` file and paste the source code from the installation instructions. 

Add the `Spotlight.tsx` file affect to the `Hero.tsx` component by importing and adding className's with styling: 
```tsx
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>

        {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
       
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>

        <Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='purple'/>

        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>
```

Instead of needing to override your `tailwind.config.ts` file repeatedly every time you choose a new Aceternity UI component, use the code snippet below:
<details>
<summary><code>tailwind.config.ts</code></summary>

```ts
import type { Config } from "tailwindcss";

import svgToDataUri from "mini-svg-data-uri";

import colors from "tailwindcss/colors";

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

export default config;
```
</details>

> [!WARNING]
> There will be errors related to your imports for the dependencies not installed yet, if you chose to copy the `tailwind.config.ts` code snippet provided above. 

To solve the errors within the `tailwind.config.ts` after copying the code snippet, use the ***second*** terminal and do the following:
```
npm install mini-svg-data-uri
```
```
npm install tailwindcss-animate
```
You will need to create a custom type declaration file to tell TypeScript how to handle this module:
> import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
1. Within the root project folder add a `src` folder.
2. Next add a folder named `types` and create a custom type declaration file within that folder called `tailwindcss.d.ts`.
3. Adding the following code:
```ts
declare module 'tailwindcss/lib/util/flattenColorPalette' {
  export default function flattenColorPalette(colors: any): Record<string, string>;
}
```

<p align="right">(<a href="#readme-top">top of page</a>)</p>

<h4 align='center'>UI Grid Background</h4> 

Search the [Aceternity UI](https://ui.aceternity.com/) webpage with CTRL+K for *"Grid and Dot Backgrounds"*.<br />
Copy and paste the code as a second div in your `Hero.tsx` file, directly below the UI Spotlight div:
```tsx
{/**
  *  UI: grid
  * Link: https://ui.aceternity.com/components/grid-and-dot-backgrounds*/}
  <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black-100/[0.2] relative flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
     bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
  </div>
```
> [!TIP]
> Use a theme provider to switch the UI Grid Background to dark mode.

<h4 align='center'>Dark Mode in Next.js</h4>

Visit [npmjs](https://www.npmjs.com/) and search *"next-themes"* by paco.
Install it using the ***second*** terminal:
```
npm i next-themes
```

Google 'next-themes' and find the [Next.js - shadcn/ui](https://ui.shadcn.com/docs/dark-mode/next), and follow the setup to add dark mode.

Within the `app` folder, create a new file named `provider.tsx`. Copy the code provided to create a theme provider. 

Next you want to wrap your root layout by visiting your `layout.tsx` file and wrapping your {children}:
```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>{children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```
Import the { ThemeProvider } from "./provider"; at the top. 

<p align="right">(<a href="#readme-top">top of page</a>)</p>



<h4 align='center'>Text Generate Effect</h4> 

Create a file named `TextGenerateEffect.tsx` within the `ui` components folder.

Search the [Aceternity UI](https://ui.aceternity.com/) webpage with CTRL+K for *"Text Generate Effect"*.

Copy and paste the source code snippet inside your `TextGenerateEffect.tsx` file:
<details>
<summary><code>TextGenerateEffect.tsx</code></summary>

```tsx
"use client";
import { useEffect, useCallback } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  const animateWords = useCallback(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate, wordsArray]);

  useEffect(() => {
    animateWords();
  }, [scope, animateWords]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={` ${
                idx > 3 ? "text-purple" : "dark:text-white text-black"
              } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
```
</details>

Within your `Hero.tsx` file, import the <TextGenerateEffect> following the h2 tag and add props to it to give it style plus render your text:
```tsx
  </h2>

    <TextGenerateEffect
      className='text-center text-[40px] md:text-5xl lg:text-6xl'
      words='Transforming Concepts into Seamless Experiences'/>
</div>
```

<p align="right">(<a href="#readme-top">top of page</a>)</p>



<h4 align='center'>Add Magic Button</h4> 

Search the [Aceternity UI](https://ui.aceternity.com/) webpage with CTRL+K for *"buttons"*.

Choose the *"Tailwind CSS buttons"* option, and scroll down to your preferred button type. Click the button to copy return value of the button.

> For this project, the *'Border Magic'* button was selected.

Within the `ui` folder, create a new file named `MagicButton.tsx`.

Using the rafce import, create a new React Arrow Function Component Export and paste the button within the return:
```tsx
import { title } from 'process'

const MagicButton = () => {
  return (
    <button className='relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span className={'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl gap-3 ${otherClasses}'}>
            Border Magic
        </span>
    </button>
  );
};

export default MagicButton;
```
To visualize your button, place the button under the p tag within your `Hero.tsx` file, and wrap it with an ahref link:
```tsx
</p>
  <a href='#about'>
    <MagicButton
      title='Show my work'
      icon=''
      position='right'
      />
  </a>
```
Make the Magic Button more dynamic by accepting props like title, icon, position, an optional handleClick, and optional otherClasses within the `MagicButton.tsx` file.

Since we are using TypeScript for this project, we define those props:
  - Title of a type string
  - Icon of a type React.ReactNode
  - Position of a type string
  - handleClick made optional of a type function that does not return anything, so it is void
  - otherClasses made optional of a type string if used
```tsx
const MagicButton = ({title, icon, position, handleClick, otherClasses}: {
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
```
The title is already being passed as you can see a button after the text on your main page with the title 'Border Magic'. 

On line 10, located in the `MagicButton.tsx` file replace Border Magic with {title} and you can now see your personalized title from line 45 in your `Hero.tsx` file on your webpage.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



<h4 align='center'>React Icons</h4> 

Render icons either on the left side or the right side by adding the following to your last span tag within your `MagicButton.tsx` file:
```tsx
<span className={'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl gap-3 ${otherClasses}'}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
```

You can add an Icon to your button by using a regular PNG or SVG, but for this project an icon was used from [react-icons](https://react-icons.github.io/react-icons/) because it offers icons from all of the different most popular packages. 

Install the ability to use those icons by installing [React Icons](https://www.npmjs.com/package/react-icons) within your ***second*** terminal by typing:
```
npm i react-icons
```
After that you can use it by simply importng an icon starting on line 44 within your `Hero.tsx` file:
```tsx
<a href='#about'>
    <MagicButton
    title='Discover My Skills'
    icon={<FaLocationArrow/>}
    position='right'/>
</a>
```
Making sure the import has reflected on the top of your `Hero.tsx` file:
> import { FaLocationArrow } from 'react-icons/fa6';

<p align="right">(<a href="#readme-top">top of page</a>)</p>















For easier styling with personalization, adjust your `globals.css` file using this code snippet: 

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border !scroll-smooth;
  }
  body {
    @apply bg-background text-foreground;
  }
  button {
    @apply active:outline-none;
  }
}

@layer utilities {
  .heading {
    @apply font-bold text-4xl md:text-5xl text-center;
  }

  .black-gradient {
    background: linear-gradient(90deg, #161a31 0%, #06091f 100%);
  }
}
```
</details>

<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Contributing

I have learned that contributions are the heart of what makes the open source community such an amazing place! We are constantly able to learn, grow, inspire eachother, and create incredible things. Any contributions you make are **greatly appreciated**, we are so lucky to be here together.

If you have a suggestion that would make this project better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please, don't forget to give the project a :star:! 

I appreciate you!

<p align="right">(<a href="#readme-top">top of page</a>)</p>



## License

Distributed under the MIT License. See `License.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Acknowledgments

Please take some time to check out the links below! 

I found value in each and every one of them, so my hope is that you will to!

* [JavaScript Mastery](https://youtu.be/FTH6Dn3AyIQ?si=ILnRQt5gixQkllFU) - ***Special thanks for the incredible tutorial video that brought my Portfolio to life!***
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Basic Syntax: Markdown Guide](https://www.markdownguide.org/basic-syntax/#reference-style-links)
* [Formatting Syntax: GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#animal-bug)
* [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)
* [Learn Next.js](https://nextjs.org/learn)
* [npmDocs](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)

<p align="right">(<a href="#readme-top">top of page</a>)</p>
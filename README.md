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
    <li>
      <a href="#about-this-project">About This Project</a>
      <ul>
        <!-- <li><a href="#built-with">Built With</a></li> -->
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setting-up-the-environment">Setting up the Environment</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
          <ul>
            <li><a href="#vscode-extensions">VSCode Extensions</a></li>
          </ul>
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

<h5 align='center'>Main Page Spotlight Feature</h5> 


Create a spotlight feature on the main page within the `Hero.tsx` file using [Aceternity UI](https://ui.aceternity.com/). Once on the website use CTRL + K to bring up the search functionality, then type: spotlight and follow installation instructions: <br />

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

            <Spotlight className='top-10 left-full h-[80-vh] w-[50vw]' fill='purple'/>

            <Spotlight className='top-28 left-80 h-[80-vh] w-[50vw]' fill='blue'/>
        </div>
```

Instead of needing to edit your `tailwind.config.ts` file repeatedly to use Aceternity UI components, use the code snippet below:
<details>
<summary><code>tailwind.config.ts</code></summary>

```ts
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
}

export default config;
```

</details>

> [!NOTE]
> There will be errors related to your imports for the dependencies not installed yet, if you chose to copy the `tailwind.config.ts` code snippet provided above. 

To solve the errors, within your ***second*** terminal use the following commands:
```
npm install mini-svg-data-uri
```
```
npm install tailwindcss-animate
```







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












`package.json` file contents will go here.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



#### VSCode Extensions

1. <ins>TailwindCSS IntelliSense</ins> - *Visualize which CSS properties are applied given a specific TailwindCSS className.* 
2. <ins>ES7+ React/Redux/React-Native snippets</ins> - *Provides shorthand prefixes,creates faster code snippets, and syntax.*

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

* [JavaScript Mastery](https://youtu.be/FTH6Dn3AyIQ?si=ILnRQt5gixQkllFU) - *Special thanks for the incredible tutorial video that brought my Portfolio to life!*
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Basic Syntax: Markdown Guide](https://www.markdownguide.org/basic-syntax/#reference-style-links)
* [Formatting Syntax: GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#animal-bug)

<p align="right">(<a href="#readme-top">top of page</a>)</p>
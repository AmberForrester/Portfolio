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
> npx create-next-app@latest

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
> cd .\nameofyourproject\

Run the following command to start your application:
> npm run dev

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
  > If done correctly, these changes will be visible in your browser's tab.
5. Go to your `page.tsx` file, and delete all of the code within the retun. Once you have done that you can now add in:
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
  > If done correctly, you should see the message output on your webpage.
6. To ensure TailwindCSS is working, add some className's 



<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Prerequisites 

`package.json` file contents will go here.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



#### VSCode Extensions

1. TailwindCSS IntelliSense - *Visualize which CSS properties are applied given a specific TailwindCSS className.* 
2. ES7+ React/Redux/React-Native snippets - *Provides shorthand prefixes,creates faster code snippets, and syntax.*

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
"use client";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-5">

      <Image
        src="/profile.png"
        alt="Profile Picture"
        className="rounded-full"
        width={150}
        height={150}
        priority
      />
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <code className="font-mono font-bold">{"Hello, I'm Guilherme, nice to see you!"}</code>
      </p>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <div
          // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="col-span-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Presentation
          </h2>
          <p className="m-0 text-sm opacity-50 text-justify">
            {`I'm 21 years old and I was born in Sombrio/SC. I started in the developer area when 
           was 15 years old, when I took a high school integrated with a technical course in informatics, 
           where I stayed for three years until I graduated. To pass the course, I developed mobile software in 
           Java with a database connection to Google Firebase, which was completely new to me. 
           Today I work as a developer at Regulatório Mais, 
           I work as technical leader of the development team, where I work with technologies such as React, 
           Typescript, Express, using AWS Cloud for deployment. Here you will see some of my biggest and latest projects,
          Hope you like!`}
          </p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">

        <a
          href="/projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Projects
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Take a look at my projects
          </p>
        </a>

        <a
          href="/skills"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Skills
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Let me introduce you to my soft and tech skills
          </p>
        </a>

        <a
          href="/experience"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Experience
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Find out about my journey so far as a developer
          </p>
        </a>
      </div>
    </main>
  );
}

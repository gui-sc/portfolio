"use client";
import Image from "next/image";
import { LanguageContext } from "./components/Header";
import { useContext } from "react";
import { MainPageMessages } from "./messages/MessagesEnum";

export default function Home() {
  const { language } = useContext(LanguageContext)
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
      <p className="flex justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-5 px-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static w-auto rounded-xl border bg-gray-200 p-4">
        <code className="font-mono font-bold text-center">{MainPageMessages["hello"][language]}</code>
      </p>

      <div className="mb-8 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <div
          // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="col-span-4 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {MainPageMessages["presentationTitle"][language]}
          </h2>
          <p className="m-0 text-sm opacity-50 text-justify">
            {MainPageMessages["presentationText"][language]}
          </p>
        </div>
      </div>

      <div className="mb-16 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">

        <a
          href="/projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {MainPageMessages["projects"][language]}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {MainPageMessages["projectsDescription"][language]}
          </p>
        </a>

        <a
          href="/skills"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {MainPageMessages["skills"][language]}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {MainPageMessages["skillsDescription"][language]}
          </p>
        </a>

        <a
          href="/experience"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {MainPageMessages["experience"][language]}
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            {MainPageMessages["experienceDescription"][language]}
          </p>
        </a>
      </div>
    </main>
  );
}

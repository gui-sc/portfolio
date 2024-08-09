"use client"
import Image from "next/image";
import {  useLanguage } from "../contexts/LanguageContext";

export default function Header() {
    const {language, setLanguagePt, setLanguageEn} = useLanguage()
    const languagesOptions: {
        lang: 'en' | 'pt';
        flag: string;
    }[] = [
        {
            lang: "en",
            flag: "us"
        },
        {
            lang: "pt",
            flag: "brazil"
        }
    ]

    return (
        <header className="w-full h-10 flex justify-end items-center gap-3 px-4">
                {languagesOptions.map((option, index) => (
                    <a className="flex items-center gap-1" key={index} onClick={
                        () => {
                            if (option.lang === "en") setLanguageEn()
                            if (option.lang === "pt") setLanguagePt()
                        }
                    }>
                        {option.lang === language ? 
                        <Image
                            alt="check icon"
                            className="dark:filter dark:invert"
                            width={20}
                            height={20}
                            src="/check.svg"
                        /> 
                        : null}
                        <Image
                            alt={`${option.flag} flag`}
                            width={30}
                            height={30}
                            src={`/${option.flag}.png`}
                        />
                    </a>
                ))}
        </header>
    );
}
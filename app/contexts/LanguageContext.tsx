"use client"
import {  useState } from "react";
import { LanguageContext } from "../components/Header";

// eslint-disable-next-line no-unused-vars
export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<'en' | 'pt'>("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
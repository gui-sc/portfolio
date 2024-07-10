"use client"
import {  createContext, useContext, useState } from "react";
export const LanguageContext = createContext<{ 
    language: 'en' | 'pt', 
    setLanguagePt: () => void,
    setLanguageEn: () => void 
}>({
    language: 'en',
    setLanguagePt: () => {},
    setLanguageEn: () => {}
});


// eslint-disable-next-line no-unused-vars
export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<'en' | 'pt'>("en");

    function setLanguagePt() {
        setLanguage("pt")
    }
    function setLanguageEn() {
        setLanguage("en")
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguagePt, setLanguageEn }}>
            {children}
        </LanguageContext.Provider>
    );
}
export function useLanguage() {
    const context = useContext(LanguageContext);
    return context;
  };
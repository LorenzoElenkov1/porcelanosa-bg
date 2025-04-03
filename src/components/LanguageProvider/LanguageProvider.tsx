"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type LanguageContext = {
    lang: 'bg' | 'en' | null;
    setLang: (lang: 'bg' | 'en') => void;
}

const LanguageContext = createContext<LanguageContext>({ lang: null, setLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<'bg' | 'en' | null>(null);

    return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>

}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('Error with context');
    return context;
}
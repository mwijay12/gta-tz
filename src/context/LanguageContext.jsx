import React, { createContext, useContext, useState } from "react";
import { translations } from "../constants/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en"); // Default to English as requested
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "sw" : "en"));
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        t,
        isPreOrderOpen,
        setIsPreOrderOpen,
        openPreOrder: () => setIsPreOrderOpen(true),
        closePreOrder: () => setIsPreOrderOpen(false),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

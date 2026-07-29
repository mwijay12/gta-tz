import React from "react";
import { useLanguage } from "../context/LanguageContext";

const NavBar = () => {
  const { lang, toggleLanguage, t, openPreOrder } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-12 py-4 z-[100] bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      {/* Brand logo & Tanzania Badge */}
      <div className="flex items-center space-x-3">
        <img src="/images/nav-logo.svg" alt="GTA logo" className="h-8 md:h-10 scale-90" />
        <div className="hidden sm:flex flex-col">
          <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
            {t.nav.edition}
          </span>
          <span className="text-[10px] text-gray-300 font-semibold tracking-wider">
            {t.nav.byAuthor} 🇹🇿
          </span>
        </div>
      </div>

      {/* Center / Right controls */}
      <div className="flex items-center space-x-3 md:space-x-4">
        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-800/80 border border-amber-400/40 text-amber-300 hover:bg-amber-400 hover:text-black transition-all cursor-pointer shadow-md flex items-center gap-1.5"
          title="Switch Language (Kiswahili / English)"
        >
          <span>{lang === "sw" ? "🇬🇧 English" : "🇹🇿 Swahili"}</span>
        </button>

        {/* Pre-order TZ CTA */}
        <button
          onClick={openPreOrder}
          className="px-4 py-1.5 rounded-full text-xs md:text-sm font-extrabold text-black bg-gradient-to-r from-amber-400 via-yellow-300 to-rose-400 hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer uppercase tracking-wider"
        >
          {t.nav.preOrder}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
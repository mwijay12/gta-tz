import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t, openPreOrder } = useLanguage();

  return (
    <footer className="relative z-20 bg-slate-950 border-t border-amber-500/20 pt-16 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
        
        {/* Brand & Author Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <img src="/images/logo.webp" alt="GTA VI Logo" className="w-28 md:w-36" />
            <span className="px-2.5 py-1 text-xs font-extrabold bg-gradient-to-r from-amber-500 to-rose-500 text-black rounded-md uppercase tracking-wider">
              {t.nav.edition}
            </span>
          </div>

          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            {t.footer.tagline}
          </p>

          <div className="pt-2 flex items-center space-x-2 text-sm font-bold text-amber-400">
            <span>🇹🇿</span>
            <span>{t.footer.company}</span>
          </div>
        </div>

        {/* Navigation & Links */}
        <div className="space-y-3">
          <h4 className="text-amber-300 font-bold uppercase text-xs tracking-wider">
            GTA VI Tanzania
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#hero" className="hover:text-amber-400 transition-colors">
                {t.nav.home}
              </a>
            </li>
            <li>
              <a href="#characters" className="hover:text-amber-400 transition-colors">
                {t.nav.characters}
              </a>
            </li>
            <li>
              <button
                onClick={openPreOrder}
                className="hover:text-amber-400 transition-colors text-left font-semibold text-amber-300 cursor-pointer"
              >
                {t.nav.preOrder} 🇹🇿
              </button>
            </li>
          </ul>
        </div>

        {/* Creator & Tech Details */}
        <div className="space-y-3">
          <h4 className="text-amber-300 font-bold uppercase text-xs tracking-wider">
            Developer Credits
          </h4>
          <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 space-y-2">
            <div className="text-xs text-gray-400 uppercase tracking-widest">
              Lead Architect
            </div>
            <div className="text-lg font-black text-amber-400 flex items-center gap-1.5">
              <span>Mwijay Davie</span>
              <span className="text-sm">✨</span>
            </div>
            <div className="text-xs text-gray-400">
              Mwijay Tech Solutions • Tanzania
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p className="text-center md:text-left">
          {t.footer.rights}
        </p>

        <div className="flex items-center space-x-4 text-gray-400">
          <span className="hover:text-amber-400 transition-colors cursor-default">
            Made by Mwijay Davie 🇹🇿
          </span>
          <span>•</span>
          <span className="hover:text-amber-400 transition-colors cursor-default">
            Release Date: Nov 19, 2026
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

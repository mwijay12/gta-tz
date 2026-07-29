import React from "react";
import { useLanguage } from "../context/LanguageContext";

const ComingSoon = () => {
  const { t, openPreOrder } = useLanguage();

  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-4 md:gap-8 text-center px-4">
        <img src="/images/logo.webp" alt="logo" className="entrance-logo" />

        {/* Creator & Tanzania Edition Badge */}
        <div className="mt-32 md:mt-44 inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-black bg-gradient-to-r from-amber-500/30 via-rose-500/30 to-purple-500/30 border border-amber-400/40 text-amber-300 shadow-xl uppercase tracking-widest">
          {t.hero.craftedBy}
        </div>

        <div className="text-wrapper">
          <h3 className="gradient-title">
            Coming <br /> Nov 19th <br /> 2026
          </h3>
          <p className="text-xs md:text-sm font-semibold text-amber-300 mt-2 tracking-wide">
            {t.hero.preloadDate}
          </p>
        </div>

        {/* Pre-order Local Button */}
        <div className="pt-2 flex flex-col items-center gap-4">
          <button
            onClick={openPreOrder}
            className="px-8 py-3.5 rounded-full text-base font-extrabold text-black bg-gradient-to-r from-yellow-300 via-amber-400 to-rose-400 hover:scale-105 transition-transform shadow-2xl uppercase tracking-wider cursor-pointer"
          >
            {t.tanzania.preorderBtn}
          </button>

          <div className="flex-center gap-8 opacity-90">
            <img src="/images/ps-logo.svg" className="md:w-32 w-20" alt="PS5" />
            <img src="/images/x-logo.svg" className="md:w-52 w-40" alt="Xbox" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
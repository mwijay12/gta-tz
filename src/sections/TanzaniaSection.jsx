import React from "react";
import { useLanguage } from "../context/LanguageContext";

const TanzaniaSection = () => {
  const { t, openPreOrder } = useLanguage();

  return (
    <section className="relative z-20 py-24 px-6 md:px-16 max-w-7xl mx-auto my-16 rounded-3xl bg-gradient-to-b from-slate-950/90 via-slate-900/90 to-black/95 border border-amber-500/20 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <span className="px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-300 border border-amber-400/30 uppercase shadow-inner">
          {t.tanzania.badge}
        </span>

        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-rose-500 tracking-tight uppercase">
          {t.tanzania.heading}
        </h2>

        <p className="max-w-2xl text-base md:text-xl text-gray-300 font-medium leading-relaxed">
          {t.tanzania.subheading}
        </p>

        {/* Updated Release Date Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs md:text-sm font-bold">
          <span>📅</span>
          <span>{t.tanzania.releaseBanner}</span>
        </div>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {t.tanzania.features.map((feat, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-amber-400/60 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div className="text-4xl mb-4 p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:scale-110 transition-transform">
              {feat.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              {feat.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-8 rounded-2xl bg-gradient-to-r from-amber-900/30 via-rose-950/40 to-slate-900 border border-amber-400/30 gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-amber-400 font-bold text-sm tracking-wide">
            POWERED BY MWIJAY DAVIE
          </div>
          <div className="text-white font-extrabold text-xl md:text-2xl">
            Get your copy ready for November 19th, 2026 launch!
          </div>
          <div className="text-emerald-400 text-xs font-semibold">
            Pre-loading starts Nov 12, 2026 on PS5 & Xbox Series X|S
          </div>
        </div>

        <button
          onClick={openPreOrder}
          className="px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-yellow-300 hover:to-amber-400 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-amber-500/20 uppercase tracking-wide cursor-pointer whitespace-nowrap"
        >
          {t.tanzania.preorderBtn}
        </button>
      </div>
    </section>
  );
};

export default TanzaniaSection;

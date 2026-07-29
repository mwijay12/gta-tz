import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { askViceCityAI } from "../services/aiService";

const ViceCityAISection = () => {
  const { lang, t } = useLanguage();
  const [persona, setPersona] = useState("radio");
  const [inputPrompt, setInputPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const quickPrompts =
    lang === "sw"
      ? [
          "Mambo gani mapya Leonida Keys?",
          "Tueleze kuhusu Jason na Lucia",
          "Kwanini Toleo la Tanzania ni la kipekee?",
          "Lini usakinishaji wa mapema unaanza?",
        ]
      : [
          "What is happening in Leonida Keys?",
          "Tell me about Jason & Lucia's story",
          "Why is Tanzania Edition special?",
          "When does pre-loading begin?",
        ];

  const handleAsk = async (queryText) => {
    const q = queryText || inputPrompt;
    if (!q.trim()) return;

    setLoading(true);
    setResponse("");
    try {
      const aiReply = await askViceCityAI(q, lang, persona);
      setResponse(aiReply);
    } catch (e) {
      setResponse(
        lang === "sw"
          ? "Mfumo wa Vice City FM uko hewani! Jaribu tena punde."
          : "Vice City FM signal acquired! Try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-20 py-20 px-4 sm:px-6 md:px-16 max-w-6xl mx-auto my-12 rounded-3xl bg-slate-950/90 border border-amber-500/30 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Background neon ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest bg-amber-500/10 text-amber-400 border border-amber-400/30 uppercase">
          {lang === "sw" ? "✨ AI ya Vice City FM • Mwijay Tech" : "✨ Vice City AI Companion • Mwijay Tech"}
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-rose-400 uppercase tracking-tight">
          {lang === "sw" ? "Ongea na Vice City AI" : "Chat with Vice City AI"}
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
          {lang === "sw"
            ? "Uliza maswali kuhusu GTA VI, historia ya Jason & Lucia, au mfumo wa mchezo. Mfumo huu unaendeshwa na Mwijay Tech AI."
            : "Ask anything about GTA VI, Jason & Lucia's story, or Leonida Keys. Powered by Mwijay Tech AI."}
        </p>
      </div>

      {/* Persona Selector */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        {[
          { id: "radio", label: lang === "sw" ? "📻 Vice City FM Radio" : "📻 Vice City Radio Host" },
          { id: "jason", label: "🕶️ Jason Duval" },
          { id: "lucia", label: "💥 Lucia Caminos" },
        ].map((p) => (
          <button
            key={p.id}
            onClick={() => setPersona(p.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              persona === p.id
                ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white border-amber-300 shadow-lg scale-105"
                : "bg-slate-900/90 text-gray-400 border-slate-800 hover:border-slate-600 hover:text-white"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Quick Questions Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-3xl mx-auto">
        {quickPrompts.map((promptText, idx) => (
          <button
            key={idx}
            onClick={() => {
              setInputPrompt(promptText);
              handleAsk(promptText);
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/80 border border-slate-700/80 text-gray-300 hover:text-amber-300 hover:border-amber-400/50 transition-all cursor-pointer"
          >
            💬 {promptText}
          </button>
        ))}
      </div>

      {/* Input Box & Submit Button */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8"
      >
        <input
          type="text"
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          placeholder={
            lang === "sw"
              ? "Andika swali lako hapa... (Mf. 'Niambie kuhusu magari ya Vice City')"
              : "Type your query here... (e.g. 'Tell me about Leonida Key cars')"
          }
          className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 shadow-inner"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:opacity-95 active:scale-95 transition-all shadow-xl uppercase tracking-wider cursor-pointer whitespace-nowrap disabled:opacity-50"
        >
          {loading ? (lang === "sw" ? "Inatafuta..." : "Thinking...") : lang === "sw" ? "Uliza AI" : "Ask AI"}
        </button>
      </form>

      {/* Response Box */}
      {(loading || response) && (
        <div className="max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-amber-400/30 text-gray-200 text-sm sm:text-base leading-relaxed shadow-xl relative animate-fadeIn">
          <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 mb-2">
            <span>📻</span>
            <span>
              {persona === "radio"
                ? "VICE CITY FM RADIO TRANSMISSION"
                : persona === "jason"
                ? "JASON DUVAL DIRECT RESPONSE"
                : "LUCIA CAMINOS DIRECT RESPONSE"}
            </span>
          </div>

          {loading ? (
            <div className="flex items-center space-x-3 text-amber-300 py-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-ping" />
              <span>{lang === "sw" ? "Inapokea matangazo kutoka Vice City..." : "Receiving transmission from Vice City..."}</span>
            </div>
          ) : (
            <p className="text-white font-medium whitespace-pre-wrap">{response}</p>
          )}
        </div>
      )}
    </section>
  );
};

export default ViceCityAISection;

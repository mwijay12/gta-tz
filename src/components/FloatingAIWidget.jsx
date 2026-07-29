import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { askViceCityAI } from "../services/aiService";

const FloatingAIWidget = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [persona, setPersona] = useState("radio");
  const [inputPrompt, setInputPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const quickPrompts =
    lang === "sw"
      ? [
          "Mambo mapya Leonida Keys?",
          "Tueleze kuhusu Jason & Lucia",
          "Kwanini Toleo la Tanzania?",
        ]
      : [
          "What's new in Leonida Keys?",
          "Tell me about Jason & Lucia",
          "Why is Tanzania Edition special?",
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
          ? "Vice City FM iko hewani! Jaribu tena punde."
          : "Vice City FM online! Try again shortly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-[350]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-950/90 border border-amber-400/50 text-white font-extrabold shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xl"
        >
          {/* Animated Glow Ring */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 opacity-60 group-hover:opacity-100 blur-sm transition-opacity" />

          <div className="relative flex items-center gap-2">
            <span className="text-xl">📻</span>
            <span className="text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent">
              Vice City AI
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </button>
      </div>

      {/* Floating Drawer Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-[400] w-[calc(100vw-2rem)] sm:w-96 max-h-[75vh] flex flex-col rounded-3xl bg-slate-950/95 border border-amber-500/40 text-white shadow-2xl backdrop-blur-2xl overflow-hidden animate-fadeIn">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="text-lg">📻</span>
              <div>
                <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
                  Vice City AI • Mwijay Tech
                </div>
                <div className="text-[10px] text-gray-400">
                  {lang === "sw" ? "Msaidizi wa GTA VI" : "GTA VI Assistant"}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-slate-800 text-gray-400 hover:text-white flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 overflow-y-auto space-y-3 flex-1">
            {/* Persona Selector */}
            <div className="flex gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
              {[
                { id: "radio", label: "📻 Radio" },
                { id: "jason", label: "🕶️ Jason" },
                { id: "lucia", label: "💥 Lucia" },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPersona(p.id)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    persona === p.id
                      ? "bg-amber-500 text-black shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap gap-1.5">
              {quickPrompts.map((qText, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInputPrompt(qText);
                    handleAsk(qText);
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] bg-slate-900 border border-slate-800 text-gray-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors cursor-pointer text-left"
                >
                  💬 {qText}
                </button>
              ))}
            </div>

            {/* Response Output Box */}
            {(loading || response) && (
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-amber-400/30 text-xs text-gray-200 leading-relaxed shadow-inner">
                <div className="text-[10px] font-bold text-amber-400 uppercase mb-1">
                  {persona === "radio"
                    ? "Vice City FM:"
                    : persona === "jason"
                    ? "Jason Duval:"
                    : "Lucia Caminos:"}
                </div>

                {loading ? (
                  <div className="flex items-center space-x-2 text-amber-300">
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
                    <span>{lang === "sw" ? "Inapokea taarifa..." : "Receiving transmission..."}</span>
                  </div>
                ) : (
                  <p className="text-white font-medium whitespace-pre-wrap">{response}</p>
                )}
              </div>
            )}
          </div>

          {/* Form Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder={
                lang === "sw" ? "Uliza swali kuhusu GTA VI..." : "Ask GTA VI AI..."
              }
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-3.5 py-2 rounded-xl text-xs font-extrabold text-black bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FloatingAIWidget;

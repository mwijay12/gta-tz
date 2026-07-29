import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const PreOrderModal = () => {
  const { isPreOrderOpen, closePreOrder, t } = useLanguage();
  const [edition, setEdition] = useState("Standard");
  const [platform, setPlatform] = useState("PS5");
  const [payment, setPayment] = useState("M-Pesa 🇹🇿");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isPreOrderOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closePreOrder();
    }, 3500);
  };

  const getPriceText = () => {
    return edition === "Standard"
      ? t.preorderModal.standardPrice
      : t.preorderModal.ultimatePrice;
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) closePreOrder();
      }}
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 transition-all duration-300 animate-fadeIn"
    >
      <div className="relative w-full max-w-lg max-h-[88vh] flex flex-col rounded-3xl bg-slate-950 border border-amber-500/40 text-white shadow-2xl overflow-hidden">
        
        {/* Sticky Mobile Friendly Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-slate-900/95 border-b border-slate-800/90 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-black tracking-widest text-amber-300 uppercase">
              {t.nav.edition}
            </span>
          </div>

          {/* Highly Visible Mobile Touch Close Button */}
          <button
            type="button"
            onClick={closePreOrder}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-600 hover:text-white active:scale-95 transition-all text-xs font-bold cursor-pointer"
            aria-label="Close modal"
          >
            <span>Close</span>
            <span className="text-sm font-black">✕</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-4">
          {/* Header text */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-pink-500">
              {t.preorderModal.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              {t.preorderModal.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl animate-bounce">
                ✓
              </div>
              <p className="text-lg font-semibold text-emerald-300">
                {t.preorderModal.successMsg}
              </p>
              <p className="text-xs text-gray-400">
                Mwijay Tech Team will send your pre-load access code via SMS/Email on November 12, 2026.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Edition Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                  {t.preorderModal.selectEdition}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: "Standard", name: "Standard ($79.99)", price: "TZS 210,000" },
                    { key: "Ultimate", name: "Ultimate ($99.99)", price: "TZS 260,000" },
                  ].map((ed) => (
                    <button
                      key={ed.key}
                      type="button"
                      onClick={() => setEdition(ed.key)}
                      className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border text-center cursor-pointer ${
                        edition === ed.key
                          ? "bg-gradient-to-r from-amber-500 to-rose-500 border-amber-300 text-white shadow-lg"
                          : "bg-slate-900/90 border-slate-800 text-gray-300 hover:border-slate-600"
                      }`}
                    >
                      <div>{ed.name}</div>
                      <div className="text-[10px] opacity-80">{ed.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Tag */}
              <div className="bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-purple-500/20 p-3 rounded-2xl border border-amber-400/30 text-center font-bold text-amber-300 text-sm sm:text-base">
                <div>{getPriceText()}</div>
                <div className="text-xs font-medium text-emerald-400 mt-1">
                  {t.preorderModal.preloadNote}
                </div>
              </div>

              {/* Platform selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                  {t.preorderModal.selectPlatform}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["PlayStation 5", "Xbox Series X|S"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPlatform(p)}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                        platform === p
                          ? "bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400"
                          : "bg-slate-900/80 border-slate-800 text-gray-300 hover:border-slate-600"
                      }`}
                    >
                      🎮 {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment method selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                  {t.preorderModal.selectPayment}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "M-Pesa 🇹🇿",
                    "Tigo Pesa 🇹🇿",
                    "Airtel Money 🇹🇿",
                    "Card (Visa/MC)",
                  ].map((pay) => (
                    <button
                      key={pay}
                      type="button"
                      onClick={() => setPayment(pay)}
                      className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border text-left flex items-center justify-between cursor-pointer ${
                        payment === pay
                          ? "bg-slate-800 border-amber-400 text-amber-300 ring-1 ring-amber-400"
                          : "bg-slate-900/80 border-slate-800 text-gray-300 hover:border-slate-600"
                      }`}
                    >
                      <span>{pay}</span>
                      {payment === pay && <span className="text-amber-400">●</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone / Email input */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Tanzania Mobile No. / Email:
                </label>
                <input
                  type="text"
                  required
                  placeholder="+255 7XX XXX XXX or your email"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-5 rounded-2xl font-bold text-sm sm:text-base bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 text-black hover:opacity-90 active:scale-95 transition-all shadow-xl uppercase tracking-wider cursor-pointer"
                >
                  {t.preorderModal.confirmBtn}
                </button>

                <button
                  type="button"
                  onClick={closePreOrder}
                  className="py-3 px-5 rounded-2xl font-semibold text-xs text-gray-400 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-600 transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <div className="pt-2 text-center text-[11px] text-gray-500 border-t border-slate-800/80">
            Made with ❤️ by <span className="text-amber-400 font-bold">Mwijay Davie</span> for Tanzania 🇹🇿
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrderModal;

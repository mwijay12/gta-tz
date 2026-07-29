import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

const Outro = () => {
  const { t, openPreOrder } = useLanguage();

  useGSAP(() => {
    gsap.set('.final-message', { marginTop: '-100vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.final-message',
        start: 'top 30%',
        end: 'top 10%',
        scrub: true,
      }
    });

    tl.to('.final-content', { opacity: 0, duration: 1, ease: 'power1.inOut' });
    tl.to('.final-message', { opacity: 1, duration: 1, ease: 'power1.inOut' });
  });

  return (
    <section className="final-message">
      <div className="h-full col-center gap-4 md:gap-8 text-center px-4">
        <img src="/images/logo.webp" alt="logo" className="md:w-72 w-52" />

        {/* Creator & Tanzania Edition Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-black bg-gradient-to-r from-amber-500/30 via-rose-500/30 to-purple-500/30 border border-amber-400/40 text-amber-300 shadow-xl uppercase tracking-widest">
          {t.hero.craftedBy}
        </div>

        <div>
          <h3 className="gradient-title">
            Coming <br /> Nov 19th <br /> 2026
          </h3>
          <p className="text-xs md:text-sm font-bold text-amber-300 mt-2">
            {t.hero.preloadDate}
          </p>
        </div>

        <button
          onClick={openPreOrder}
          className="px-8 py-3.5 rounded-full text-base font-extrabold text-black bg-gradient-to-r from-yellow-300 via-amber-400 to-rose-400 hover:scale-105 transition-transform shadow-2xl uppercase tracking-wider cursor-pointer"
        >
          {t.tanzania.preorderBtn}
        </button>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" alt="PS5" />
          <img src="/images/x-logo.svg" className="md:w-52 w-40" alt="Xbox" />
        </div>
      </div>
    </section>
  );
};

export default Outro;
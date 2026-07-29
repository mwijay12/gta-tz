import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageContext";

const Jason = () => {
  const { t } = useLanguage();

  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.jason',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.jason .img-box', {
      scrollTrigger: {
        trigger: '.jason',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -300, duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section className="jason">
      <div className="max-w-xl jason-content p-4 sm:p-6 rounded-3xl">
        <h1>{t.jason.name}</h1>
        <h2>{t.jason.headline}</h2>
        <p>{t.jason.bio}</p>

        <div className="jason-2">
          <img src="/images/jason-2.webp" alt="Jason 2" />
        </div>
      </div>

      <div className="space-y-6 mt-8 sm:mt-24 lg:mt-96 img-box w-full lg:w-1/2">
        <div className="jason-1">
          <img src="/images/jason-1.webp" alt="Jason 1" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" alt="Jason 3" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
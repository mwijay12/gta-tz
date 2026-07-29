import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageContext";

const Lucia = () => {
  const { t } = useLanguage();

  useGSAP(() => {
    gsap.set('.lucia-life', { marginTop: '-80vh'});

    gsap.timeline({
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top 80%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.lucia-life .img-box', {
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -200, duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section className="lucia-life">
      <div className="flex flex-col gap-6 items-end img-box w-full lg:w-1/2 px-4 sm:px-8 lg:ps-10 mt-8 sm:mt-24 lg:mt-96">
        <div className="lucia-1">
          <img src="/images/lucia-1.webp" alt="Lucia 1" />
        </div>
        <div className="lucia-3">
          <img src="/images/lucia-3.webp" alt="Lucia 3" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 lucia-life-content p-4 sm:p-6 rounded-3xl">
        <div className="max-w-xl px-4 sm:px-8 lg:ps-32">
          <h1>{t.lucia.name}</h1>
          <h2>{t.lucia.headline}</h2>
          <p>{t.lucia.bio1}</p>
        </div>

        <div className="lucia-2">
          <img src="/images/lucia-2.webp" alt="Lucia 2" />
        </div>

        <p className="max-w-xl px-4 sm:px-8 lg:ps-32">{t.lucia.bio2}</p>
      </div>
    </section>
  );
};

export default Lucia;
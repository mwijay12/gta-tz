import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const PostCard = () => {
  const videoRef = useRef(null);
  const { t, openPreOrder } = useLanguage();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.post-card',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    })

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
      }
    }
  });

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:scale-[1.01] transition duration-700">
        <img src="/images/overlay.webp" alt="Card Overlay" />

        <video 
          ref={videoRef}
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />

        <button
          onClick={openPreOrder}
          className="group-hover:bg-amber-400 font-bold transition duration-700 cursor-pointer shadow-xl"
        >
          {t.postcard.button} • 🇹🇿
        </button>
      </div>
    </section>
  );
};

export default PostCard;
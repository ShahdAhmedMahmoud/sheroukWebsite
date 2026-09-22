

import React, { useEffect, useRef, useState, useCallback } from "react";


const slides = [
  {
    id: "financial-district",
    type: "panorama",
    title: "FINANCIAL DISTRICT SQUARE",
    src: "/panoramas/hero-360.jpg",
  },
  {
    id: "sallum-port",
    type: "video",
    title: "SALLUM LAND PORT",
    src: "/videos/hero.mp4",
  },
  {
    id: "midtown-condo",
    type: "image",
    title: "MIDTOWN CONDO",
    src: "src/assets/images/50.png",
  },
];

const AUTOPLAY_MS = 10000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewerRef = useRef(null);
  const panoramaInstance = useRef(null);
  const autoplayRef = useRef(null);

  const activeSlide = slides[activeIndex];

  // ✅ تشغيل/إعادة ضبط التايمر التلقائي - بينادى أول ما الصفحة تفتح
  // وكل مرة المستخدم يدوس على دوت يدوي (عشان الدورة تبدأ من جديد وميحصلش
  // قفزة غريبة في التوقيت)
  const restartAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
  }, []);

  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(autoplayRef.current);
  }, [restartAutoplay]);

  // ✅ البانوراما بتتبني/تتهد بس وهي السلايد النشط - عشان منشغلش أكتر من
  // instance في نفس الوقت (بيثقل الأداء ومحتاج تنضيف صح)
  useEffect(() => {
    if (activeSlide.type !== "panorama") return;
    if (!window.pannellum || !viewerRef.current) return;

    panoramaInstance.current = window.pannellum.viewer(viewerRef.current, {
      type: "equirectangular",
      panorama: activeSlide.src,
      autoLoad: true,
      autoRotate: -2,
      autoRotateInactivityDelay: 1500,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: true,
      hotSpotDebug: false,
      title: activeSlide.title,
    });

    return () => {
      panoramaInstance.current?.destroy();
      panoramaInstance.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const goToSlide = (i) => {
    setActiveIndex(i);
    restartAutoplay();
  };

  // ✅ السكرول لـ About section - بيدور على الـ FlowSection اللي عندها
  // aria-label="About" (زي ما هي متعرّفة في Home.jsx)
  const scrollToAbout = () => {
    const aboutEl = document.querySelector('[aria-label="About"]');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#404041]">
      {/* ===== الميديا: بانوراما / فيديو / صورة - سلايد واحد بس شغال ===== */}
      <div key={activeSlide.id} className="absolute inset-0 h-full w-full animate-[heroFade_0.6s_ease]">
        {activeSlide.type === "panorama" && (
          <div ref={viewerRef} className="absolute inset-0 h-full w-full" />
        )}

        {activeSlide.type === "video" && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={activeSlide.src}
            autoPlay
            muted
            loop
            playsInline
          />
        )}

        {activeSlide.type === "image" && (
          <img
            src={activeSlide.src}
            alt={activeSlide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* تظليل خفيف تحت بس عشان النص والـ dots يبانوا واضحين، من غير
            ما يغطي على الصورة/الفيديو نفسه */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>

      {/* ===== المحتوى فوق الميديا ===== */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col">
        {/* العنوان - في المنتصف تقريبًا */}
        <div className="flex flex-1 items-center justify-center px-6">
          <h1 className="max-w-3xl text-center text-[clamp(1.6rem,4.2vw,3.25rem)] font-bold leading-tight tracking-wide text-white drop-shadow-md">
            {activeSlide.title}
          </h1>
        </div>

        {/* ===== أسفل الشاشة: dots + سهم، بمسافات ثابتة ومريحة ===== */}
        <div className="pointer-events-auto flex flex-col items-center gap-6 pb-8">
          {/* Dots */}
          <div className="flex items-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goToSlide(i)}
                aria-label={`Go to ${s.title}`}
                aria-current={i === activeIndex}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-7 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* سهم السكرول لـ About */}
          {/* <button
            onClick={scrollToAbout}
            aria-label="Scroll to About section"
            className="group flex flex-col items-center gap-1 text-white/80 transition-colors hover:text-white"
          >
            <span className="text-[10px] font-medium tracking-[0.2em]">SCROLL</span>
            <svg
              className="h-5 w-5 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button> */}

          {/* مؤشر السكرول لـ About - شكل ماوس بدل السهم */}
<button
  onClick={scrollToAbout}
  aria-label="Scroll to About section"
  className="group flex flex-col items-center gap-2 text-white/80 transition-colors hover:text-white"
>
  <span className="text-[10px] font-medium tracking-[0.2em]">SCROLL</span>

  <span className="flex h-9 w-[22px] items-start justify-center rounded-full border-2 border-white/70 p-1.5 transition-colors group-hover:border-white">
    <span
      className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_2px_rgba(40,58,133,0.65)]"
      style={{ animation: "scrollWheel 1.6s ease-in-out infinite" }}
    />
  </span>
</button>
        </div>
      </div>
    </section>
  );
}
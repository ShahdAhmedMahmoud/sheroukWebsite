



// import { useRef, useState, useCallback, useEffect, useLayoutEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";


// function cx(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export function ProjectsCarousel({
//   slides,
//   rotate = 44,
//   depth = 0.9,
//   perspective = 5,
//   falloff = 0.56,
//   fade = 0.1,
//   cardWidth = "clamp(220px, 30vw, 380px)",
//   gap = 0,
//   //back card
//   backSpread = 0.15,
//   loop = true,
//   showNavigation = true,
//   autoplay = true,
//   autoplayInterval = 2000, 
//   label = "معرض المشاريع",
//   className,
// }) {
//   const count = slides.length;

//   const frameRef = useRef(null);
//   const cardRefs = useRef([]);
//   const posRef = useRef(0);
//   const targetRef = useRef(0);
//   const widthRef = useRef(0);
//   const rafRef = useRef(null);
//   const dragRef = useRef(null);
//   const autoplayRef = useRef(null); // ref جديد بيحمل الـ timer بتاع الـ autoplay

//   const [selected, setSelected] = useState(0);

//   // بيرجع أقرب رقم كارت صحيح، ملفوف داخل نطاق 0 إلى count-1
//   const indexAt = useCallback(
//     (pos) => ((Math.round(pos) % count) + count) % count,
//     [count]
//   );

//   // بيرسم موضع كل كارت مباشرة على الـ DOM (من غير re-render) في كل فريم
//   const paint = useCallback(() => {
//     const width = widthRef.current;
//     if (!width) return;
//     const pitch = width * (1 + gap);
//     const pos = posRef.current;

//     cardRefs.current.forEach((card, index) => {
//       if (!card) return;

//       let offset = index - pos;
//       if (loop) {
//         offset = ((offset % count) + count) % count;
//         if (offset > count / 2) offset -= count;
//       }

//       const distance = Math.abs(offset);

//       const ramp = Math.pow(distance, falloff);
//       const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

//       card.style.transform =
//         `translateX(calc(-50% + ${offset * pitch}px)) ` +
//         `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

//       const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
//       card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
//       card.style.zIndex = String(100 - Math.round(distance));
//     });
//   }, [count, depth, fade, falloff, gap, loop, rotate]);

//   // بيحرك الموضع تدريجيًا (تباطؤ) لحد ما يوصل للهدف
//   const settle = useCallback(
//     (target) => {
//       if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
//       targetRef.current = target;
//       setSelected(indexAt(target));

//       const step = () => {
//         const remaining = target - posRef.current;
//         if (Math.abs(remaining) < 0.0004) {
//           posRef.current = target;
//           paint();
//           rafRef.current = null;
//           return;
//         }
//         posRef.current += remaining * 0.16;
//         paint();
//         rafRef.current = requestAnimationFrame(step);
//       };
//       rafRef.current = requestAnimationFrame(step);
//     },
//     [indexAt, paint]
//   );

//   const clamp = useCallback(
//     (pos) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
//     [count, loop]
//   );

//   const nudge = useCallback(
//     (by) => settle(clamp(Math.round(targetRef.current) + by)),
//     [clamp, settle]
//   );

//   // ==== Autoplay: بيوقف نفسه ويشتغل تاني ====
//   const stopAutoplay = useCallback(() => {
//     if (autoplayRef.current !== null) {
//       clearInterval(autoplayRef.current);
//       autoplayRef.current = null;
//     }
//   }, []);

//   const startAutoplay = useCallback(() => {
//     if (!autoplay) return;
//     stopAutoplay(); // نتأكد الأول إن مفيش نسخة تانية شغالة
//     autoplayRef.current = setInterval(() => {
//       nudge(1);
//     }, autoplayInterval);
//   }, [autoplay, autoplayInterval, nudge, stopAutoplay]);

//   // بيشغل الـ autoplay أول ما الكومبوننت يظهر، وبيوقفه لما يتشال
//   useEffect(() => {
//     startAutoplay();
//     return () => stopAutoplay();
//   }, [startAutoplay, stopAutoplay]);

//   const onPointerDown = (event) => {
//     stopAutoplay(); // المستخدم بدأ يسحب بإيده - نوقف الحركة التلقائية
//     if (rafRef.current !== null) {
//       cancelAnimationFrame(rafRef.current);
//       rafRef.current = null;
//     }
//     event.currentTarget.setPointerCapture(event.pointerId);
//     targetRef.current = posRef.current;
//     dragRef.current = {
//       id: event.pointerId,
//       x: event.clientX,
//       pos: posRef.current,
//       v: 0,
//       t: performance.now(),
//     };
//   };

//   const onPointerMove = (event) => {
//     const drag = dragRef.current;
//     if (!drag || drag.id !== event.pointerId) return;

//     const pitch = widthRef.current * (1 + gap);
//     if (!pitch) return;

//     const now = performance.now();
//     const previous = posRef.current;
//     posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
//     drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
//     drag.t = now;

//     const index = indexAt(posRef.current);
//     if (index !== selected) setSelected(index);
//     paint();
//   };

//   const endDrag = (event) => {
//     const drag = dragRef.current;
//     if (!drag || drag.id !== event.pointerId) return;
//     dragRef.current = null;
//     const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
//     settle(clamp(Math.round(posRef.current + carried)));
//     startAutoplay(); // المستخدم خلّص سحب - نرجّع الحركة التلقائية تاني
//   };

//   // بيقيس عرض الكارت الفعلي على الشاشة، ويعيد القياس لو حجم النافذة اتغيّر
//   useLayoutEffect(() => {
//     const frame = frameRef.current;
//     if (!frame) return;

//     const measure = () => {
//       const card = cardRefs.current[0];
//       if (!card) return;
//       widthRef.current = card.offsetWidth;
//       paint();
//     };

//     measure();
//     const observer = new ResizeObserver(measure);
//     observer.observe(frame);
//     return () => observer.disconnect();
//   }, [paint]);

//   useEffect(
//     () => () => {
//       if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
//     },
//     []
//   );

//   return (
//     <div
//       className={cx("w-full", className)}
//       style={{ "--cf-card": cardWidth }}
//       role="region"
//       aria-roledescription="carousel"
//       aria-label={label}
//     >
//       <div className="relative">
//         <div
//           ref={frameRef}
//           tabIndex={0}
//           onPointerDown={onPointerDown}
//           onPointerMove={onPointerMove}
//           onPointerUp={endDrag}
//           onPointerCancel={endDrag}
//           onKeyDown={(event) => {
//             if (event.key === "ArrowLeft") {
//               event.preventDefault();
//               nudge(-1);
//             } else if (event.key === "ArrowRight") {
//               event.preventDefault();
//               nudge(1);
//             }
//           }}
//           className="cursor-grab overflow-hidden py-10 outline-none active:cursor-grabbing"
//           style={{
//             perspective: `calc(var(--cf-card) * ${perspective})`,
//             touchAction: "pan-y",
//           }}
//         >
//           <div
//             className="relative select-none"
//             style={{ height: "var(--cf-card)", transformStyle: "preserve-3d" }}
//           >
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 ref={(node) => {
//                   cardRefs.current[index] = node;
//                 }}
//                 role="group"
//                 aria-roledescription="slide"
//                 aria-label={`${index + 1} من ${count}`}
//                 className="group absolute left-1/2 top-0 aspect-[4/5] overflow-hidden rounded-2xl bg-[#F8F9FD] shadow-xl will-change-transform"
//                 style={{ width: "var(--cf-card)" }}
//               >
//                 {/* صورة المشروع كاملة كخلفية الكارت */}
//                 <img
//                   src={slide.src}
//                   alt={slide.alt}
//                   draggable={false}
//                   className="h-full w-full select-none object-cover"
//                 />

//                 {/* ==== طبقة الـ Hover: اسم المشروع كبير في النص + الحالة تحته ====
//                     bg-[#1E2432]/80 لون غامق موحّد (مش gradient) عشان يبقى غامق بالتساوي فوق الصورة كلها */}
//                 <div className="absolute inset-0 bg-[#1E2432]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center text-center p-5">
//                   <h3 className="text-white font-bold text-2xl mb-3 scale-90 group-hover:scale-100 transition-transform duration-400">
//                     {slide.title}
//                   </h3>
//                   <span
//                     className={cx(
//                       "px-3 py-1 rounded-full text-xs font-semibold mb-4",
//                       slide.status === "Finished"
//                         ? "bg-[#D98A2B] text-[#1E2432]"
//                         : "bg-white/20 text-white"
//                     )}
//                   >
//                     {slide.status === "Finished" ? "Finished" : "Ongoing"}
//                   </span>
//                   <a
//                     href={slide.href || "#"}
//                     className="inline-flex items-center gap-1 text-[#D98A2B] font-semibold text-sm"
//                   >
//                     Learn More
//                     <ChevronRight className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {showNavigation && (
//           <>
//             <button
//               type="button"
//               aria-label="المشروع السابق"
//               onClick={() => nudge(-1)}
//               className="absolute left-3 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#1E2432] backdrop-blur transition hover:bg-white"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               type="button"
//               aria-label="المشروع التالي"
//               onClick={() => nudge(1)}
//               className="absolute right-3 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#1E2432] backdrop-blur transition hover:bg-white"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProjectsCarousel;



















import { useRef, useState, useCallback, useEffect, useLayoutEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function ProjectsCarousel({
  slides,
  rotate = 44,
  depth = 0.9,
  perspective = 5,
  falloff = 0.56,
  fade = 0.1,
  cardWidth = "clamp(220px, 30vw, 380px)",
  gap = 0,
  backSpread = -0.2, // مسافة إضافية بتتحكم في تباعد الكروت البعيدة (اللي ورا) بس، من غير ما تأثر على الكارت النص
  backStart = 1, // من عندها يبدأ تأثير backSpread (distance <= backStart مش بتتأثر خالص)
  backRamp = 2, // بعد كام "خطوة" (كارت) بعد backStart يوصل التأثير لأقصاه
  loop = true,
  showNavigation = true,
  autoplay = true,
  autoplayInterval = 2000, 
  label = "معرض المشاريع",
  className,
}) {
  const count = slides.length;

  const frameRef = useRef(null);
  const cardRefs = useRef([]);
  const posRef = useRef(0);
  const targetRef = useRef(0);
  const widthRef = useRef(0);
  const rafRef = useRef(null);
  const dragRef = useRef(null);
  const autoplayRef = useRef(null); // ref جديد بيحمل الـ timer بتاع الـ autoplay

  const [selected, setSelected] = useState(0);

  // بيرجع أقرب رقم كارت صحيح، ملفوف داخل نطاق 0 إلى count-1
  const indexAt = useCallback(
    (pos) => ((Math.round(pos) % count) + count) % count,
    [count]
  );

  // بيرسم موضع كل كارت مباشرة على الـ DOM (من غير re-render) في كل فريم
  const paint = useCallback(() => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);

      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

      // مسافة إضافية مستقلة تمامًا عن الشفافية: بتبدأ صفر لحد distance = backStart
      // (يعني الكارت النص واللي جنبه مباشرة مش بيتأثروا)، وبتوصل لأقصاها
      // (backSpread كامل) بعد ما تعدي backRamp خطوة زيادة. النطاق ده ثابت
      // ومش مربوط بنقطة اختفاء الكارت، فالتأثير بيبان فعليًا على الكروت
      // اللي لسه ظاهرة بس بعيدة عن النص.
      const backProgress = Math.min(
        1,
        Math.max(0, (distance - backStart) / Math.max(0.0001, backRamp))
      );
      const extraSpread = backSpread * width * backProgress * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch + extraSpread}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
    });
  }, [backRamp, backSpread, backStart, count, depth, fade, falloff, gap, loop, rotate]);

  // بيحرك الموضع تدريجيًا (تباطؤ) لحد ما يوصل للهدف
  const settle = useCallback(
    (target) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));

      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }
        posRef.current += remaining * 0.16;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint]
  );

  const clamp = useCallback(
    (pos) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
    [count, loop]
  );

  const nudge = useCallback(
    (by) => settle(clamp(Math.round(targetRef.current) + by)),
    [clamp, settle]
  );

  // ==== Autoplay: بيوقف نفسه ويشتغل تاني ====
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;
    stopAutoplay(); // نتأكد الأول إن مفيش نسخة تانية شغالة
    autoplayRef.current = setInterval(() => {
      nudge(1);
    }, autoplayInterval);
  }, [autoplay, autoplayInterval, nudge, stopAutoplay]);

  // بيشغل الـ autoplay أول ما الكومبوننت يظهر، وبيوقفه لما يتشال
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const onPointerDown = (event) => {
    stopAutoplay(); // المستخدم بدأ يسحب بإيده - نوقف الحركة التلقائية
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
  };

  const onPointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
    settle(clamp(Math.round(posRef.current + carried)));
    startAutoplay(); // المستخدم خلّص سحب - نرجّع الحركة التلقائية تاني
  };

  // بيقيس عرض الكارت الفعلي على الشاشة، ويعيد القياس لو حجم النافذة اتغيّر
  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    []
  );

  return (
    <div
      className={cx("w-full", className)}
      style={{ "--cf-card": cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative">
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="cursor-grab overflow-hidden py-10 outline-none active:cursor-grabbing"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{ height: "var(--cf-card)", transformStyle: "preserve-3d" }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} من ${count}`}
                className="group absolute left-1/2 top-0 aspect-[4/5] overflow-hidden rounded-2xl bg-[#F8F9FD] shadow-xl will-change-transform"
                style={{ width: "var(--cf-card)" }}
              >
                {/* صورة المشروع كاملة كخلفية الكارت */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className="h-full w-full select-none object-cover"
                />

                {/* ==== طبقة الـ Hover: اسم المشروع كبير في النص + الحالة تحته ====
                    bg-[#1E2432]/80 لون غامق موحّد (مش gradient) عشان يبقى غامق بالتساوي فوق الصورة كلها */}
                <div className="absolute inset-0 bg-[#1E2432]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center text-center p-5">
                  <h3 className="text-white font-bold text-2xl mb-3 scale-90 group-hover:scale-100 transition-transform duration-400">
                    {slide.title}
                  </h3>
                  <span
                    className={cx(
                      "px-3 py-1 rounded-full text-xs font-semibold mb-4",
                      slide.status === "Finished"
                        ? "bg-[#D98A2B] text-[#1E2432]"
                        : "bg-white/20 text-white"
                    )}
                  >
                    {slide.status === "Finished" ? "Finished" : "Ongoing"}
                  </span>
                  <a
                    href={slide.href || "#"}
                    className="inline-flex items-center gap-1 text-[#D98A2B] font-semibold text-sm"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="المشروع السابق"
              onClick={() => nudge(-1)}
              className="absolute left-3 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#1E2432] backdrop-blur transition hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="المشروع التالي"
              onClick={() => nudge(1)}
              className="absolute right-3 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#1E2432] backdrop-blur transition hover:bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectsCarousel;
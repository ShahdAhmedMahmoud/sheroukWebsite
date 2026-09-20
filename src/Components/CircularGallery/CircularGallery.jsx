// import { forwardRef, useState, useEffect, useRef } from "react";

// function cn(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// // بيصغّر نصف قطر الدائرة على الشاشات الصغيرة عشان الكاردز متطلعش برّه الشاشة
// function useResponsiveRadius(baseRadius) {
//   const [radius, setRadius] = useState(baseRadius);
//   useEffect(() => {
//     const calc = () => {
//       const w = window.innerWidth;
//       if (w < 640) setRadius(baseRadius * 0.35);
//       else if (w < 1024) setRadius(baseRadius * 0.6);
//       else setRadius(baseRadius);
//     };
//     calc();
//     window.addEventListener("resize", calc);
//     return () => window.removeEventListener("resize", calc);
//   }, [baseRadius]);
//   return radius;
// }

// const CircularGallery = forwardRef(
//   ({ items, className, radius: baseRadius = 550, autoRotateSpeed = 0.02, ...props }, ref) => {
//     const [rotation, setRotation] = useState(0);
//     const [isScrolling, setIsScrolling] = useState(false);
//     const scrollTimeoutRef = useRef(null);
//     const animationFrameRef = useRef(null);
//     const radius = useResponsiveRadius(baseRadius);

//     useEffect(() => {
//       const handleScroll = () => {
//         setIsScrolling(true);
//         if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

//         const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
//         const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
//         setRotation(scrollProgress * 720); // لفتين كاملتين على طول مساحة السكرول

//         scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
//       };

//       window.addEventListener("scroll", handleScroll, { passive: true });
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//         if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
//       };
//     }, []);

//     useEffect(() => {
//       const autoRotate = () => {
//         if (!isScrolling) setRotation((prev) => prev + autoRotateSpeed);
//         animationFrameRef.current = requestAnimationFrame(autoRotate);
//       };
//       animationFrameRef.current = requestAnimationFrame(autoRotate);
//       return () => {
//         if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
//       };
//     }, [isScrolling, autoRotateSpeed]);

//     const anglePerItem = 360 / items.length;

//     return (
//       <div
//         ref={ref}
//         role="region"
//         aria-label="معرض المشاريع الدائري"
//         className={cn("relative w-full h-full flex items-center justify-center", className)}
//         style={{ perspective: "1800px" }}
//         {...props}
//       >
//         <div
//           className="relative w-full h-full"
//           style={{ transform: `rotateY(${rotation}deg)`, transformStyle: "preserve-3d" }}
//         >
//           {items.map((item, i) => {
//             const itemAngle = i * anglePerItem;
//             const relativeAngle = (itemAngle + (rotation % 360) + 360) % 360;
//             const normalizedAngle = relativeAngle > 180 ? 360 - relativeAngle : relativeAngle;
//             const opacity = Math.max(0.25, 1 - normalizedAngle / 180);

//             return (
//               <div
//                 key={item.src}
//                 role="group"
//                 aria-label={item.title}
//                 className="absolute w-[190px] h-[250px] sm:w-[230px] sm:h-[300px] md:w-[260px] md:h-[340px]"
//                 style={{
//                   transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
//                   left: "50%",
//                   top: "50%",
//                   marginLeft: "-130px",
//                   marginTop: "-170px",
//                   opacity,
//                   transition: "opacity 0.3s linear",
//                 }}
//               >
//                 <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-[#1E2432]">
//                   <img
//                     src={item.src}
//                     alt={item.alt}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#1E2432]/95 via-[#1E2432]/10 to-transparent" />

//                   <span
//                     className={cn(
//                       "absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full",
//                       item.status === "Finished"
//                         ? "bg-[#FFBF00] text-[#1E2432]"
//                         : "bg-white/15 text-white backdrop-blur-sm"
//                     )}
//                   >
//                     {item.status}
//                   </span>

//                   <div className="absolute bottom-0 left-0 w-full p-4">
//                     <h3 className="text-sm md:text-base font-bold text-white uppercase leading-snug">
//                       {item.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// );

// CircularGallery.displayName = "CircularGallery";

// export default CircularGallery;


import { forwardRef, useState, useEffect, useRef } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * مقاسات الكارت + عمق الـ perspective حسب عرض الشاشة.
 * الأرقام دي هي اللي بيتحسب منها نصف قطر الدايرة، عشان الكاردز
 * ما تتراكبش على بعض ولا تطلع برّه الشاشة على الموبايل.
 */
function getLayout(width) {
  if (width < 480) return { cardW: 132, cardH: 178, perspective: 800 };
  if (width < 640) return { cardW: 150, cardH: 200, perspective: 950 };
  if (width < 1024) return { cardW: 200, cardH: 265, perspective: 1300 };
  return { cardW: 260, cardH: 340, perspective: 1800 };
}

const CircularGallery = forwardRef(
  (
    { items, className, radius: baseRadius = 550, autoRotateSpeed = 0.02, ...props },
    ref
  ) => {
    const [layout, setLayout] = useState(() =>
      getLayout(typeof window === "undefined" ? 1280 : window.innerWidth)
    );

    const ringRef = useRef(null);
    const itemRefs = useRef([]);
    const rotationRef = useRef(0);
    const targetRef = useRef(0);
    const dragOffsetRef = useRef(0);
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef(null);
    const rafRef = useRef(0);
    const dragRef = useRef({ active: false, startX: 0, startOffset: 0, moved: false });

    // نصف القطر بيتحسب من عدد الكاردز ومقاسها، مش رقم ثابت
    const count = Math.max(items.length, 1);
    const derivedRadius = (layout.cardW * count) / (2 * Math.PI) * 1.08;
    const radius =
      layout.cardW >= 260 ? Math.max(derivedRadius, baseRadius * 0.9) : derivedRadius;

    // تحديث المقاسات مع أي تغيير في عرض الشاشة (أو دوران الموبايل)
    useEffect(() => {
      const onResize = () => setLayout(getLayout(window.innerWidth));
      onResize();
      window.addEventListener("resize", onResize);
      window.addEventListener("orientationchange", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("orientationchange", onResize);
      };
    }, []);

    // السكرول بيحرّك الدايرة
    useEffect(() => {
      const handleScroll = () => {
        isScrollingRef.current = true;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress =
          scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        targetRef.current = scrollProgress * 720 + dragOffsetRef.current;

        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      };
    }, []);

    /**
     * لوب الأنيميشن. الدوران متسجّل في ref والـ DOM بيتحدّث مباشرة،
     * من غير setState كل فريم — ده الفرق الكبير في الأداء على الموبايل.
     */
    useEffect(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const tick = () => {
        if (!isScrollingRef.current && !dragRef.current.active && !reduceMotion) {
          targetRef.current += autoRotateSpeed;
        }

        rotationRef.current += (targetRef.current - rotationRef.current) * 0.12;
        const rotation = rotationRef.current;

        if (ringRef.current) {
          ringRef.current.style.transform = `translateZ(${-radius * 0.15}px) rotateY(${rotation}deg)`;
        }

        const anglePerItem = 360 / count;
        for (let i = 0; i < count; i++) {
          const el = itemRefs.current[i];
          if (!el) continue;
          const relativeAngle = (i * anglePerItem + (rotation % 360) + 360) % 360;
          const normalized = relativeAngle > 180 ? 360 - relativeAngle : relativeAngle;
          el.style.opacity = String(Math.max(0.25, 1 - normalized / 180));
        }

        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafRef.current);
    }, [autoRotateSpeed, count, radius]);

    // سحب بالإصبع أو الماوس عشان الموبايل يقدر يلف الدايرة من غير سكرول
    const onPointerDown = (e) => {
      dragRef.current = {
        active: true,
        startX: e.clientX,
        startOffset: dragOffsetRef.current,
        moved: false,
      };
      e.currentTarget.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.startX;
      if (Math.abs(dx) > 4) dragRef.current.moved = true;
      const delta = dx * 0.35;
      dragOffsetRef.current = dragRef.current.startOffset + delta;
      targetRef.current += delta * 0.08;
    };

    const endDrag = (e) => {
      if (!dragRef.current.active) return;
      dragRef.current.active = false;
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    };

    const anglePerItem = 360 / count;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="معرض المشاريع الدائري"
        className={cn(
          "relative w-full h-full flex items-center justify-center touch-pan-y select-none",
          className
        )}
        style={{ perspective: `${layout.perspective}px` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        {...props}
      >
        <div
          ref={ringRef}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          {items.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              ref={(el) => (itemRefs.current[i] = el)}
              role="group"
              aria-label={item.title}
              className="absolute left-1/2 top-1/2"
              style={{
                width: `${layout.cardW}px`,
                height: `${layout.cardH}px`,
                // translate(-50%,-50%) بدل الـ margin الثابت، عشان التوسيط
                // يفضل مظبوط مع أي مقاس كارت
                transform: `translate(-50%, -50%) rotateY(${i * anglePerItem}deg) translateZ(${radius}px)`,
                transition: "opacity 0.3s linear",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-[#1E2432]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2432]/95 via-[#1E2432]/10 to-transparent" />

                <span
                  className={cn(
                    "absolute top-2 right-2 sm:top-3 sm:right-3 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full",
                    item.status === "Finished"
                      ? "bg-[#FFBF00] text-[#1E2432]"
                      : "bg-white/15 text-white backdrop-blur-sm"
                  )}
                >
                  {item.status}
                </span>

                <div className="absolute bottom-0 left-0 w-full p-2.5 sm:p-4">
                  <h3 className="text-[11px] sm:text-sm md:text-base font-bold text-white uppercase leading-snug line-clamp-3">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = "CircularGallery";

export default CircularGallery;














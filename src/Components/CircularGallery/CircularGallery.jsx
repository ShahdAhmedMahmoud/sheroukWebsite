import { forwardRef, useState, useEffect, useRef } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// بيصغّر نصف قطر الدائرة على الشاشات الصغيرة عشان الكاردز متطلعش برّه الشاشة
function useResponsiveRadius(baseRadius) {
  const [radius, setRadius] = useState(baseRadius);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) setRadius(baseRadius * 0.35);
      else if (w < 1024) setRadius(baseRadius * 0.6);
      else setRadius(baseRadius);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [baseRadius]);
  return radius;
}

const CircularGallery = forwardRef(
  ({ items, className, radius: baseRadius = 550, autoRotateSpeed = 0.02, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);
    const animationFrameRef = useRef(null);
    const radius = useResponsiveRadius(baseRadius);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        setRotation(scrollProgress * 720); // لفتين كاملتين على طول مساحة السكرول

        scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      };
    }, []);

    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) setRotation((prev) => prev + autoRotateSpeed);
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };
      animationFrameRef.current = requestAnimationFrame(autoRotate);
      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }, [isScrolling, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="معرض المشاريع الدائري"
        className={cn("relative w-full h-full flex items-center justify-center", className)}
        style={{ perspective: "1800px" }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{ transform: `rotateY(${rotation}deg)`, transformStyle: "preserve-3d" }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const relativeAngle = (itemAngle + (rotation % 360) + 360) % 360;
            const normalizedAngle = relativeAngle > 180 ? 360 - relativeAngle : relativeAngle;
            const opacity = Math.max(0.25, 1 - normalizedAngle / 180);

            return (
              <div
                key={item.src}
                role="group"
                aria-label={item.title}
                className="absolute w-[190px] h-[250px] sm:w-[230px] sm:h-[300px] md:w-[260px] md:h-[340px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: "-130px",
                  marginTop: "-170px",
                  opacity,
                  transition: "opacity 0.3s linear",
                }}
              >
                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-[#1E2432]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2432]/95 via-[#1E2432]/10 to-transparent" />

                  <span
                    className={cn(
                      "absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full",
                      item.status === "Finished"
                        ? "bg-[#FFBF00] text-[#1E2432]"
                        : "bg-white/15 text-white backdrop-blur-sm"
                    )}
                  >
                    {item.status}
                  </span>

                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-sm md:text-base font-bold text-white uppercase leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = "CircularGallery";

export default CircularGallery;
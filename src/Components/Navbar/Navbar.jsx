


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const handleEsc = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100%-2rem)]">
        <motion.nav
          layout
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.65, 0.05, 0, 1] }}
          className={`flex items-center w-fit mx-auto bg-white rounded-full shadow-lg shadow-[#1E2432]/10 border border-[#1F3888]/10 ${
            scrolled ? "gap-3 px-4 py-2.5" : "gap-7 px-6 py-3"
          }`}
        >
          {/* اللوجو - دلوقتي هو نفسه زرار فتح/قفل القائمة */}
          <motion.button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? "قفل القائمة" : "فتح القائمة"}
            className="group relative shrink-0 h-8 md:h-9 px-3 flex items-center justify-center focus:outline-none"
            whileTap={{ scale: 0.92 }}
          >
            {/* حلقة متقطعة بتلف ببطء طول الوقت - لمسة حركية دايمة خفيفة */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#1F3888"
                strokeWidth="1"
                strokeDasharray="4 8"
                strokeLinecap="round"
                opacity={0.35}
              />
            </motion.svg>

            {/* حلقة صفراء صلبة بتنفجر لما القائمة تفتح */}
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-[#D98A2B]"
              initial={false}
              animate={{
                scale: menuOpen ? 1 : 0.5,
                opacity: menuOpen ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            />

            {/* نبضة دايرة صفراء بسيطة عند الـ hover (لغير حالة الفتح) */}
            <motion.span
              className="absolute inset-0 rounded-full bg-[#D98A2B]/10"
              initial={{ scale: 0.6, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* اللوجو نفسه - بيدور ويتكبّر/يصغّر شوية عند الدوسة */}
            <motion.div
              animate={{
                rotate: menuOpen ? 90 : 0,
                scale: menuOpen ? 0.9 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative z-10"
            >
              <AnimatePresence mode="wait" initial={false}>
                {scrolled ? (
                  <motion.img
                    key="icon"
                    src="/src/assets/images/logo-icon.webp"
                    alt="Alshorouk"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    className="h-6 md:h-7 w-auto object-contain"
                  />
                ) : (
                  <motion.img
                    key="full"
                    src="/src/assets/images/logo.png"
                    alt="Alshorouk Construction Company"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="h-7 md:h-8 w-auto object-contain"
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {/* تلميح نصي صغير بيظهر تحت اللوجو عند الـ hover (ديسك توب بس) */}
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 0, y: -4 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.2em] uppercase text-[#6C757D] whitespace-nowrap"
            >
              {menuOpen ? "Close" : "Menu"}
            </motion.span>
          </motion.button>

          {/* روابط الديسك توب - بتختفي بعد ما تبدأ السكرول */}
          <AnimatePresence>
            {!scrolled && (
              <motion.ul
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="hidden md:flex items-center gap-7"
              >
                {navItems.map((item) => (
                  <li key={item.label} className="relative group">
                    <a
                      href={item.href}
                      className="text-sm font-semibold tracking-wide text-[#404041] group-hover:text-[#1F3888] transition-colors duration-300 uppercase inline-block group-hover:-translate-y-0.5"
                    >
                      {item.label}
                    </a>
                    <span className="absolute left-1/2 -bottom-1.5 h-[1.5px] w-0 bg-[#D98A2B] -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full" />
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>

      {/* القائمة الكاملة - Full screen (زي ما هي من غير تغيير) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center overflow-hidden"
          >
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="0" y1="18" x2="100" y2="18"
                stroke="#1F3888" strokeWidth="0.1" strokeDasharray="1 2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <motion.line
                x1="0" y1="82" x2="100" y2="82"
                stroke="#1F3888" strokeWidth="0.1" strokeDasharray="1 2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: "easeInOut" }}
              />
            </svg>

            <span className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[#D98A2B]" />
            <span className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-[#D98A2B]" />
            <span className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-[#D98A2B]" />
            <span className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[#D98A2B]" />

            <ul className="relative z-10 flex flex-col items-center gap-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : i * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#404041] hover:text-[#1F3888] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative z-10 mt-10 text-sm text-[#6C757D]"
            >
              Shorouq Construction & Supply — Cairo, Egypt
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
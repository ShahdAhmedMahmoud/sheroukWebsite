
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useLanguage } from "../../Context/LanguageContext/LanguageContext";

// كل عنصر بقى ليه "key" بدل نص ثابت، عشان نقدر نترجمه بـ t(item.key)
const navItems = [
  { key: "navHome", href: "/" },
  { key: "navAbout", href: "#about" },
  { key: "navServices", href: "#services" },
  { key: "navProjects", href: "/projects" },
  { key: "navCareer", href: "/careers" },
  { key: "navBim", href: "/bim" },
  { key: "navSuppliers", href: "/suppliers" },
  { key: "navContact", href: "#contact" },
  { key: "navNews", href: "/news" },
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
  const { t, language } = useLanguage();

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

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className="
          fixed
          top-3 sm:top-4 md:top-6
          left-1/2
          -translate-x-1/2
          z-50
          w-[calc(100%-1.5rem)]
          sm:w-[calc(100%-2rem)]
          md:w-auto
          max-w-[calc(100%-1.5rem)]
        "
      >
        <motion.nav
          layout
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: [0.65, 0.05, 0, 1],
          }}
          className={`
            flex
            items-center
            justify-center
            mx-auto
            bg-white
            rounded-full
            shadow-lg
            shadow-[#1E2432]/10
            border
            border-[#1F3888]/10
            w-fit
            max-w-full

            ${
              scrolled
                ? "gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5"
                : "gap-3 sm:gap-5 lg:gap-7 px-3 sm:px-5 md:px-6 py-2.5 sm:py-3"
            }
          `}
        >
          {/* ================= LOGO / MENU BUTTON ================= */}
          <motion.button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? t("menuCloseLabel") : t("menuOpenLabel")}
            className="
              group
              relative
              shrink-0
              h-8
              sm:h-9
              px-2
              sm:px-3
              flex
              items-center
              justify-center
              focus:outline-none
            "
            whileTap={{ scale: 0.92 }}
          >
            {/* Rotating dashed circle */}
            <motion.svg
              viewBox="0 0 100 100"
              className="
                absolute
                inset-0
                w-full
                h-full
                pointer-events-none
              "
              animate={{ rotate: 360 }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
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

            {/* Yellow open state */}
            <motion.span
              className="
                absolute
                inset-0
                rounded-full
                border-2
                border-[#D98A2B]
              "
              initial={false}
              animate={{
                scale: menuOpen ? 1 : 0.5,
                opacity: menuOpen ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
            />

            {/* Hover pulse */}
            <motion.span
              className="
                absolute
                inset-0
                rounded-full
                bg-[#D98A2B]/10
              "
              initial={{
                scale: 0.6,
                opacity: 0,
              }}
              whileHover={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
              }}
            />

            {/* Logo */}
            <motion.div
              animate={{
                rotate: menuOpen ? 90 : 0,
                scale: menuOpen ? 0.9 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="relative z-10"
            >
              <AnimatePresence mode="wait" initial={false}>
                {scrolled ? (
                  <motion.img
                    key="icon"
                    src="/src/assets/images/logo-icon.webp"
                    alt="Alshorouk"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      h-5
                      sm:h-6
                      md:h-7
                      w-auto
                      object-contain
                    "
                  />
                ) : (
                  <motion.img
                    key="full"
                    src="/src/assets/images/logo.png"
                    alt="Alshorouk Construction Company"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      h-6
                      sm:h-7
                      md:h-8
                      max-w-[110px]
                      sm:max-w-[140px]
                      md:max-w-none
                      w-auto
                      object-contain
                    "
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {/* Menu tooltip - Desktop only */}
            <motion.span
              initial={{
                opacity: 0,
                y: -4,
              }}
              animate={{
                opacity: 0,
                y: -4,
              }}
              whileHover={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                hidden
                md:block
                absolute
                -bottom-4
                left-1/2
                -translate-x-1/2
                text-[16px]
                tracking-[0.2em]
                uppercase
                text-[#6C757D]
                whitespace-nowrap
              "
            >
              {menuOpen ? "Close" : "Menu"}
            </motion.span>
          </motion.button>

          {/* ================= DESKTOP LINKS ================= */}
          <AnimatePresence>
            {!scrolled && (
              <motion.ul
                key={language}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
                transition={{ duration: 0.3 }}
                className="
                  hidden
                  lg:flex
                  items-center
                  gap-4
                  lg:gap-7
                "
              >
                {navItems.map((item) => (
                  <li
                    key={item.key}
                    className="relative group"
                  >
                    <a
                      href={item.href}
                      className="
                        text-[16px]
                        lg:text-[16px]
                        font-medium
                        tracking-wide
                        text-[#404041]
                        group-hover:text-[#1F3888]
                        transition-colors
                        duration-300
                        uppercase
                        inline-block
                        group-hover:-translate-y-0.5
                        whitespace-nowrap
                      "
                    >
                      {t(item.key)}
                    </a>

                    <span
                      className="
                        absolute
                        left-1/2
                        -bottom-1.5
                        h-[1.5px]
                        w-0
                        bg-[#D98A2B]
                        -translate-x-1/2
                        transition-all
                        duration-300
                        ease-out
                        group-hover:w-full
                      "
                    />
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* ================= LANGUAGE SWITCHER (ثابت مع الـ navbar دايمًا) ================= */}
          <div className="shrink-0 pl-1 sm:pl-2 border-l border-[#1F3888]/10">
            <LanguageSwitcher />
          </div>
        </motion.nav>
      </header>

      {/* ================= FULL SCREEN MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-white
              flex
              flex-col
              items-center
              justify-center
              overflow-hidden
              px-6
            "
          >
            {/* Background lines */}
            <svg
              className="
                absolute
                inset-0
                w-full
                h-full
                pointer-events-none
                opacity-50
              "
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="0"
                y1="18"
                x2="100"
                y2="18"
                stroke="#1F3888"
                strokeWidth="0.1"
                strokeDasharray="1 2"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              />

              <motion.line
                x1="0"
                y1="82"
                x2="100"
                y2="82"
                stroke="#1F3888"
                strokeWidth="0.1"
                strokeDasharray="1 2"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                  ease: "easeInOut",
                }}
              />
            </svg>

            {/* Corner brackets */}
            <span className="
              absolute
              top-5
              left-5
              sm:top-8
              sm:left-8
              w-6
              h-6
              sm:w-8
              sm:h-8
              border-t-2
              border-l-2
              border-[#D98A2B]
            " />

            <span className="
              absolute
              top-5
              right-5
              sm:top-8
              sm:right-8
              w-6
              h-6
              sm:w-8
              sm:h-8
              border-t-2
              border-r-2
              border-[#D98A2B]
            " />

            <span className="
              absolute
              bottom-5
              left-5
              sm:bottom-8
              sm:left-8
              w-6
              h-6
              sm:w-8
              sm:h-8
              border-b-2
              border-l-2
              border-[#D98A2B]
            " />

            <span className="
              absolute
              bottom-5
              right-5
              sm:bottom-8
              sm:right-8
              w-6
              h-6
              sm:w-8
              sm:h-8
              border-b-2
              border-r-2
              border-[#D98A2B]
            " />

            {/* Language switcher - visible while the full menu is open too */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute top-5 sm:top-8 left-1/2 -translate-x-1/2 z-10"
            >
              <LanguageSwitcher />
            </motion.div>

            {/* Menu links */}
            <ul
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                gap-3
                sm:gap-4
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={language}
                  initial={{ opacity: 1 }}
                  className="flex flex-col items-center gap-3 sm:gap-4"
                >
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.key}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: reduceMotion ? 0 : i * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="
                          text-xl
                          xs:text-xl
                          sm:text-2xl
                          md:text-3xl
                          font-bold
                          uppercase
                          tracking-tight
                          text-[#404041]
                          hover:text-[#1F3888]
                          transition-colors
                          duration-300
                          text-center
                        "
                      >
                        {t(item.key)}
                      </a>
                    </motion.li>
                  ))}
                </motion.div>
              </AnimatePresence>
            </ul>

            {/* Footer text */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="
                relative
                z-10
                mt-8
                sm:mt-10
                text-xs
                sm:text-sm
                text-[#6C757D]
                text-center
              "
            >
              Shorouq Construction & Supply — Cairo, Egypt
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
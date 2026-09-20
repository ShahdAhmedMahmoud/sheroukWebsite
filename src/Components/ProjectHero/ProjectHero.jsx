import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronDown,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";

const AUTOPLAY_DELAY = 4500;

export default function ProjectHero({ project }) {
  // لو مفيش gallery أو فيها صورة واحدة بس، بنشتغل بالـ src الأساسي
  const images =
    project.gallery && project.gallery.length > 1
      ? project.gallery
      : [project.src];

  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index) => {
      setActiveIndex((index + images.length) % images.length);
    },
    [images.length]
  );

  // autoplay - بيشتغل بس لو فيه أكتر من صورة
  useEffect(() => {
    if (images.length < 2) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [images.length]);

  const isFinished = project.status?.toLowerCase() === "finished";

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-[#373A48]">
      {/* خلفية الصورة / السلايدر */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[activeIndex]}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* تعتيم متدرج عشان النص يبان فوق الصورة */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#373A48] via-[#373A48]/45 to-[#373A48]/10 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#373A48]/70 via-transparent to-transparent z-[1]" />

      {/* زرار الرجوع لصفحة المشاريع */}
      <Link
        to="/projects"
        className="absolute top-6 left-4 sm:top-8 sm:left-8 z-20 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-md border border-white/20 hover:bg-[#293A82] hover:border-[#293A82] transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        All Projects
      </Link>

      {/* Status badge */}
      <span
        className={`absolute top-6 right-4 sm:top-8 sm:right-8 z-20 text-[10px] sm:text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full ${
          isFinished ? "bg-[#FFBF00] text-[#1E2432]" : "bg-[#293A82] text-white"
        }`}
      >
        {project.status}
      </span>

      {/* المحتوى الأساسي */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-8 sm:px-8 sm:pb-10 lg:px-14 lg:pb-14">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#FFBF00] mb-3"
        >
          {project.category}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight text-white"
        >
          {project.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-5 flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-white/85"
        >
          {project.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FFBF00]" />
              {project.location}
            </span>
          )}

          {project.year && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#FFBF00]" />
              {project.year}
            </span>
          )}

          <span className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-[#FFBF00]" />
            {project.category}
          </span>
        </motion.div>

        {/* Thumbnails - بتظهر بس لو فيه أكتر من صورة واحدة */}
        {images.length > 1 && (
          <div className="mt-8 flex gap-2 sm:gap-3">
            {images.map((img, index) => (
              <button
                key={img + index}
                onClick={() => goTo(index)}
                aria-label={`Show image ${index + 1}`}
                className={`relative h-12 w-16 sm:h-16 sm:w-24 overflow-hidden rounded-md border-2 transition-all duration-300 ${
                  index === activeIndex
                    ? "border-[#FFBF00] opacity-100"
                    : "border-white/30 opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* مؤشر إن فيه محتوى تحت */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 right-1/2 translate-x-1/2 sm:right-8 sm:translate-x-0 z-10 text-white/70"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
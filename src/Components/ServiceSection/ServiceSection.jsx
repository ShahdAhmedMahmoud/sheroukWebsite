


import {
  HardHat,
  ClipboardList,
  Building2,
  Hammer,
  Route,
  Wrench,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  HoverSlider,
  TextStaggerHover,
  HoverSliderImageWrap,
  HoverSliderImage,
  useHoverSlider,
} from "../HoverSlider/HoverSlider";

const services = [
  {
    Icon: HardHat,
    title: "General Contracting",
    description:
      "End-to-end construction management for residential, commercial, and industrial projects.",
    image:
      "https://images.unsplash.com/photo-1653280662710-1cac52cde6d7?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    Icon: ClipboardList,
    title: "Project Management",
    description:
      "Professional oversight ensuring on-time, on-budget delivery with rigorous quality standards.",
    image:
      "https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    Icon: Building2,
    title: "Design & Build",
    description:
      "Integrated design-build solutions from concept to completion under one roof.",
    image:
      "https://images.unsplash.com/photo-1773637779568-8bf920d848e6?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    Icon: Hammer,
    title: "Renovation & Restoration",
    description:
      "Expert restoration of heritage buildings and modern renovation of existing structures.",
    image:
      "https://images.unsplash.com/photo-1690122254245-f85d6e738705?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    Icon: Route,
    title: "Infrastructure",
    description:
      "Roads, bridges, utilities, and large-scale civil engineering projects across Egypt.",
    image:
      "https://images.unsplash.com/photo-1715199399795-73deba5bee63?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    Icon: Wrench,
    title: "MEP Systems",
    description:
      "Complete mechanical, electrical, and plumbing engineering and installation.",
    image:
      "https://images.unsplash.com/photo-1744113439895-14529bb2f6e6?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
];

// component منفصل بيقرأ الـ activeSlide من الـ context عشان يعرض الوصف المناسب
function ServiceDescription() {
  const { activeSlide } = useHoverSlider();
  const active = services[activeSlide];
  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={active.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="text-[#6C757D] max-w-md mt-6"
      >
        {active.description}
      </motion.p>
    </AnimatePresence>
  );
}

export default function ServicesSection() {
  return (
    <section
      className="relative w-full py-24 px-4 overflow-hidden"
      id="services"
    >
  {/* Construction Video Background */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{
            filter: "grayscale(1) sepia(0.3) hue-rotate(175deg) saturate(2)",
            mixBlendMode: "multiply",
            opacity: 0.22,
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          }}
        >
          <source src="/videos/construction.mp4" type="video/mp4" />
        </video>
      </div> */}




      <div className="relative z-10 container m-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1E2432]">
            Our <span className="text-[#1F3888]">Services</span>
          </h2>
          <p className="text-[#6C757D] mt-2">
            Comprehensive construction solutions tailored to every project
          </p>
        </div>

        <HoverSlider className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* عمود العناوين */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col gap-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex items-center gap-4 cursor-pointer"
              >
                <span className="text-sm font-mono text-[#6C757D]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <service.Icon className="w-5 h-5 text-[#1F3888] shrink-0" />
                <TextStaggerHover
                  index={index}
                  text={service.title}
                  className="text-xl md:text-2xl font-bold uppercase tracking-tight"
                />
              </div>
            ))}
            <ServiceDescription />
          </div>

          {/* الصورة */}
          <HoverSliderImageWrap className="order-1 lg:order-2 w-full lg:w-1/2 aspect-[4/3] rounded-2xl shadow-xl">
            {services.map((service, index) => (
              <HoverSliderImage
                key={service.title}
                index={index}
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            ))}
          </HoverSliderImageWrap>
        </HoverSlider>
      </div>
    </section>
  );
}
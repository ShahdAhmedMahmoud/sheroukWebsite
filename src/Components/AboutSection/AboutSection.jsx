
// import { motion } from "motion/react";
// import {
//   Building2,
//   Award,
//   Users,
//   Calendar,
//   Wrench,
//   ShieldCheck,
//   ArrowRight,
// } from "lucide-react";
// import Counter from "../Counter/Counter";
// import TowerCraneArt from "./TowerCraneArt";
// import AnimatedTowerCrane from "../AnimatedTowerCrane/AnimatedTowerCrane.jsx";

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
// };
// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const features = [
//   {
//     icon: <Building2 className="w-6 h-6" />,
//     title: "Quality Craftsmanship",
//     description:
//       "We use premium materials and precise techniques to ensure every structure stands the test of time.",
//     position: "left",
//   },
//   {
//     icon: <Award className="w-6 h-6" />,
//     title: "Certified Engineers",
//     description:
//       "Our projects are led by certified engineers who bring technical expertise and strict quality control to every phase.",
//     position: "left",
//   },
//   {
//     icon: <Users className="w-6 h-6" />,
//     title: "Expert Team",
//     description:
//       "A skilled workforce of over 5000 professionals dedicated to bringing your vision to life.",
//     position: "left",
//   },
//   {
//     icon: <Calendar className="w-6 h-6" />,
//     title: "On-Time Delivery",
//     description:
//       "We plan meticulously to deliver every project on schedule, without compromising quality.",
//     position: "right",
//   },
//   {
//     icon: <Wrench className="w-6 h-6" />,
//     title: "Modern Equipment",
//     description:
//       "Equipped with the latest heavy machinery to handle projects of any scale efficiently.",
//     position: "right",
//   },
//   {
//     icon: <ShieldCheck className="w-6 h-6" />,
//     title: "Safety First",
//     description:
//       "Strict safety standards protect our team and ensure smooth, secure project execution.",
//     position: "right",
//   },
// ];

// const stats = [
//   { target: 5000, suffix: "+", label: "MANPOWER" },
//   { target: 500, suffix: "+", label: "HEAVY EQUIPMENT" },
//   { target: 1, suffix: "M", label: "CONCRETE" },
//   { target: 63, suffix: "+", label: "ACTIVE PROJECTS" },
//   { target: 42, suffix: "", label: "DELIVERED PROJECTS" },
// ];

// export default function AboutSection() {
//   return (
//     <section className="w-full py-24 px-4 overflow-hidden relative" id="about">
//       {/* عناصر ديكور خلفية */}
//       <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#D3D6E2]/5 blur-3xl pointer-events-none" />
//       <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#D3D6E2]/10 blur-3xl pointer-events-none" />
//         {/* الأوناش المرسومة بخطوط */}

// <AnimatedTowerCrane className="absolute inset-y-0 left-0 w-32 md:w-48 hidden lg:block" />
// <AnimatedTowerCrane className="absolute inset-y-0 right-0 w-32 md:w-48 hidden lg:block scale-x-[-1]" />
//   {/* <TowerCraneArt
//     className="absolute inset-y-0 left-0 h-full w-auto opacity-[0.35] pointer-events-none hidden md:block"
//     color="#000000"
//   />
//   <TowerCraneArt
//     className="absolute inset-y-0 right-0 h-full w-auto opacity-[0.35] pointer-events-none hidden md:block"
//     color="#000000"
//     flip
//   /> */}

//     {/* <TowerCraneArt
//     className="absolute inset-y-0 left-2 lg:left-8 w-24 lg:w-32 hidden lg:block pointer-events-none"
//   />
//   <TowerCraneArt
//     className="absolute inset-y-0 right-2 lg:right-8 w-24 lg:w-32 hidden lg:block pointer-events-none"
//     flip
//   /> */}



//       <motion.div
//         className="container mx-auto max-w-6xl relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={containerVariants}
//       >
//         {/* العنوان */}
//         <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
//           <span className="text-[#D98A2B] font-semibold mb-2 tracking-wide text-sm">
//             DISCOVER OUR STORY
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1E2432] text-center">
//             About Us
//           </h2>
//           <motion.div
//             className="w-24 h-1 bg-[#2A317A] mt-4"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           />
//         </motion.div>

//         <motion.p
//           variants={itemVariants}
//           className="text-center max-w-2xl mx-auto mb-4 text-[#6C757D]"
//         >
//           We are a leading construction company committed to excellence and
//           innovation, delivering high-quality projects that shape Egypt's
//           skyline.
//         </motion.p>

//         <motion.div variants={itemVariants} className="text-center mb-16">
//           <a
//             href="/about"
//             className="text-[#2A317A] font-semibold hover:underline"
//           >
//             Learn more about us →
//           </a>
//         </motion.div>

//         {/* الجدول: مميزات - صورة - مميزات */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative items-center">
//           <div className="space-y-12 order-2 md:order-1">
//             {features
//               .filter((f) => f.position === "left")
//               .map((f, i) => (
//                 <FeatureItem key={i} {...f} delay={i * 0.15} direction="left" />
//               ))}
//           </div>

//           <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0">
//             <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
//               <motion.div
//                 className="rounded-2xl overflow-hidden shadow-xl"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <img
//                   src="/src/assets/images/DSC_3583.JPG"
//                   alt="Shorouq project"
//                   className="w-full h-80 object-cover"
//                 />
//               </motion.div>
//               <div className="absolute inset-0 border-4 border-[#D98A2B] rounded-2xl -m-3 -z-10" />
//               <motion.div
//                 className="absolute -top-4 -right-6 w-16 h-16 rounded-full bg-[#2A317A]/10"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <motion.div
//                 className="absolute -bottom-6 -left-8 w-20 h-20 rounded-full bg-[#D98A2B]/20"
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//               />
//             </motion.div>
//           </div>

//           <div className="space-y-12 order-3">
//             {features
//               .filter((f) => f.position === "right")
//               .map((f, i) => (
//                 <FeatureItem key={i} {...f} delay={i * 0.15} direction="right" />
//               ))}
//           </div>
//         </div>

//         {/* الأرقام */}
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mt-24">
//           {stats.map((s, i) => (
//             <motion.div
//               key={i}
//               className="bg-white rounded-xl shadow-md py-6 px-3 text-center"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//             >
//               <Counter target={s.target} suffix={s.suffix} />
//               <p className="text-sm md:text-base text-[#6C757D] mt-2">
//                 {s.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           className="mt-20 bg-[#2A317A] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div>
//             <h3 className="text-2xl font-bold mb-2">
//               Ready to build your next project?
//             </h3>
//             <p className="text-white/80">Let's create something great together.</p>
//           </div>
//           <a
//             href="/contact"
//             className="bg-[#D98A2B] text-[#1E2432] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
//           >
//             Get In Touch <ArrowRight className="w-4 h-4" />
//           </a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// function FeatureItem({ icon, title, description, delay, direction }) {
//   return (
//     <motion.div
//       className="flex flex-col group"
//       initial={{ opacity: 0, x: direction === "left" ? -30 : 30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true, amount: 0.4 }}
//       transition={{ duration: 0.6, delay }}
//       whileHover={{ y: -5 }}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <div className="text-[#1F3888] bg-[#1F3888]/10 p-3 rounded-lg group-hover:bg-[#D98A2B]/20 group-hover:text-[#1E2432] transition-colors duration-300">
//           {icon}
//         </div>
//         <h4 className="text-lg font-bold text-[#1E2432]">{title}</h4>
//       </div>
//       <p className="text-sm text-[#6C757D] leading-relaxed pl-[52px]">
//         {description}
//       </p>
//     </motion.div>
//   );
// }


import { motion } from "motion/react";
import {
  Building2,
  Award,
  Users,
  Calendar,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Counter from "../Counter/Counter";
import AnimatedTowerCrane from "../AnimatedTowerCrane/AnimatedTowerCrane.jsx";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const features = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Quality Craftsmanship",
    description:
      "We use premium materials and precise techniques to ensure every structure stands the test of time.",
    position: "left",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certified Engineers",
    description:
      "Our projects are led by certified engineers who bring technical expertise and strict quality control to every phase.",
    position: "left",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team",
    description:
      "A skilled workforce of over 5000 professionals dedicated to bringing your vision to life.",
    position: "left",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "On-Time Delivery",
    description:
      "We plan meticulously to deliver every project on schedule, without compromising quality.",
    position: "right",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Modern Equipment",
    description:
      "Equipped with the latest heavy machinery to handle projects of any scale efficiently.",
    position: "right",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Safety First",
    description:
      "Strict safety standards protect our team and ensure smooth, secure project execution.",
    position: "right",
  },
];

const stats = [
  { target: 5000, suffix: "+", label: "MANPOWER" },
  { target: 500, suffix: "+", label: "HEAVY EQUIPMENT" },
  { target: 1, suffix: "M", label: "CONCRETE" },
  { target: 63, suffix: "+", label: "ACTIVE PROJECTS" },
  { target: 42, suffix: "", label: "DELIVERED PROJECTS" },
];

export default function AboutSection() {
  return (
    <section
      className="w-full py-24 px-4 overflow-hidden relative min-h-[900px] md:min-h-screen"
      id="about"
    >
      {/* عناصر ديكور خلفية */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#D3D6E2]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#D3D6E2]/10 blur-3xl pointer-events-none" />

      {/* الأوناش المرسومة بخطوط - بطول السكشن كله */}
      <AnimatedTowerCrane className="absolute top-0 left-0 h-full w-40 sm:w-56 md:w-72 lg:w-96 opacity-70 z-0 hidden sm:block" />
      <AnimatedTowerCrane className="absolute top-0 right-0 h-full w-40 sm:w-56 md:w-72 lg:w-96 opacity-70 z-0 hidden sm:block scale-x-[-1]" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* العنوان */}
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <span className="text-[#D98A2B] font-semibold mb-2 tracking-wide text-sm">
            DISCOVER OUR STORY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2432] text-center">
            About Us
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#2A317A] mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center max-w-2xl mx-auto mb-4 text-[#6C757D]"
        >
          We are a leading construction company committed to excellence and
          innovation, delivering high-quality projects that shape Egypt's
          skyline.
        </motion.p>

        <motion.div variants={itemVariants} className="text-center mb-16">
          <a
            href="/about"
            className="text-[#2A317A] font-semibold hover:underline"
          >
            Learn more about us →
          </a>
        </motion.div>

        {/* الجدول: مميزات - صورة - مميزات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative items-center">
          <div className="space-y-12 order-2 md:order-1">
            {features
              .filter((f) => f.position === "left")
              .map((f, i) => (
                <FeatureItem key={i} {...f} delay={i * 0.15} direction="left" />
              ))}
          </div>

          <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/src/assets/images/DSC_3583.JPG"
                  alt="Shorouq project"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 border-4 border-[#D98A2B] rounded-2xl -m-3 -z-10" />
              <motion.div
                className="absolute -top-4 -right-6 w-16 h-16 rounded-full bg-[#2A317A]/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-8 w-20 h-20 rounded-full bg-[#D98A2B]/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
          </div>

          <div className="space-y-12 order-3">
            {features
              .filter((f) => f.position === "right")
              .map((f, i) => (
                <FeatureItem key={i} {...f} delay={i * 0.15} direction="right" />
              ))}
          </div>
        </div>

        {/* الأرقام */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mt-24">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md py-6 px-3 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Counter target={s.target} suffix={s.suffix} />
              <p className="text-sm md:text-base text-[#6C757D] mt-2">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 bg-[#2A317A] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Ready to build your next project?
            </h3>
            <p className="text-white/80">Let's create something great together.</p>
          </div>
          <a
            href="/contact"
            className="bg-[#D98A2B] text-[#1E2432] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FeatureItem({ icon, title, description, delay, direction }) {
  return (
    <motion.div
      className="flex flex-col group"
      initial={{ opacity: 0, x: direction === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-[#1F3888] bg-[#1F3888]/10 p-3 rounded-lg group-hover:bg-[#D98A2B]/20 group-hover:text-[#1E2432] transition-colors duration-300">
          {icon}
        </div>
        <h4 className="text-lg font-bold text-[#1E2432]">{title}</h4>
      </div>
      <p className="text-sm text-[#6C757D] leading-relaxed pl-[52px]">
        {description}
      </p>
    </motion.div>
  );
}

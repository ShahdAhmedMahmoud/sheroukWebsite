// // import { motion } from "motion/react";
// // import {
// //   MapPin,
// //   Phone,
// //   Mail,
// // //   Facebook,
// // //   Instagram,
// // //   Linkedin,
// //   ArrowRight,
// // } from "lucide-react";

// // import { FaFacebookF, FaInstagram, FaLinkedinIn , FaTiktok } from "react-icons/fa6";

// // // خطوط الخلفية المتحركة - قللت العدد لـ 24 بدل 36 (الأصلي) عشان دي فوتر
// // // آخر الصفحة مش هيرو، ومفيش داعي نستهلك بروسيسور زيادة عليه
// // function FloatingPaths({ position }) {
// //   const paths = Array.from({ length: 24 }, (_, i) => ({
// //     id: i,
// //     d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
// //       380 - i * 5 * position
// //     } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
// //       152 - i * 5 * position
// //     } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
// //       684 - i * 5 * position
// //     } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,

// //     width: 0.5 + i * 0.03,
// //   }));

// //   return (
// //     <div className="absolute inset-0 pointer-events-none">
// //       <svg
// //         className="w-full h-full"
// //         viewBox="0 0 696 316"
// //         fill="none"
// //         preserveAspectRatio="none"
// //       >
// //         {paths.map((path) => (
// //           <motion.path
// //             key={path.id}
// //             d={path.d}
// //             stroke={path.id % 4 === 0 ? "#283A85" : "#FFFFFF"}
// //             strokeWidth={path.width}
// //             strokeOpacity={0.12}
// //             initial={{
// //               pathLength: 0,
// //               opacity: 0,
// //             }}
// //             animate={{
// //               pathLength: 1,
// //               opacity: 0.12,
// //             }}
// //             transition={{
// //               pathLength: {
// //                 duration: 4 + path.id * 0.08,
// //                 delay: path.id * 0.08,
// //                 ease: [0.22, 1, 0.36, 1],
// //               },
// //               opacity: {
// //                 duration: 1.2,
// //                 delay: path.id * 0.08,
// //                 ease: "easeOut",
// //               },
// //             }}
// //           />
// //         ))}
// //       </svg>
// //     </div>
// //   );
// // }

// // const quickLinks = [
// //   { label: "Home", href: "#home" },
// //   { label: "About", href: "#about" },
// //   { label: "Services", href: "#services" },
// //   { label: "Projects", href: "#projects" },
// //   { label: "Timeline", href: "#timeline" },
// // ];

// // const socialLinks = [
// //   {
// //     name: "Facebook",
// //     icon: FaFacebookF,
// //     href: "https://www.facebook.com/alshoroukconstruction?mibextid=ZbWKw",
// //   },
// //   {
// //     name: "Instagram",
// //     icon: FaInstagram,
// //     href: "https://www.instagram.com/alshoroukconstruction",
// //   },
// //   {
// //     name: "LinkedIn",
// //     icon: FaLinkedinIn,
// //     href: "https://www.linkedin.com/company/al-shorouk-construction-company/home/",
// //   },
// //   {
// //     name: "TikTok",
// //     icon: FaTiktok,
// //     href: "https://www.tiktok.com/@alshoroukconstruction",
// //   },
// // ];

// // export default function Footer() {
// //   return (
// //     <footer className="relative bg-[#1E2432] overflow-hidden pt-20 pb-8 px-4" id="contact">
// //       <div className="absolute inset-0">
// //         <FloatingPaths position={1} />
// //         <FloatingPaths position={-1} />
// //       </div>

// //       <div className="relative z-10 max-w-6xl mx-auto">
// //         {/* بانر الـ CTA */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.7 }}
// //           className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-12 mb-12"
// //         >
// //           <h3 className="text-2xl md:text-4xl font-bold text-white text-center md:text-left">
// //             Have a project in mind? <br className="hidden md:block" />
// //             <span className="text-[#D98A2B]">Let's build it together.</span>
// //           </h3>
// //           <a
// //             href="/contact"
// //             className="inline-flex items-center gap-2 bg-[#D98A2B] text-[#1E2432] font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shrink-0 group"
// //           >
// //             Contact Us
// //             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //           </a>
// //         </motion.div>

// //         {/* الأعمدة */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
// //           <div>
// //             <h4 className="text-xl font-bold text-white mb-3">AL SHOROUk</h4>
// //             <p className="text-white/60 text-sm leading-relaxed mb-5">
// //               Building Egypt's future with precision, integrity, and over a
// //               decade of construction excellence.
// //             </p>
// //             <div className="flex gap-3">
// //               {socialLinks.map((link) => (
// //                 <a
// //                   key={link.name}
// //                   href={link.href}
// //                   target="_blank"
// //                   className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D98A2B] hover:text-[#1E2432] transition-colors duration-300"
// //                 >
// //                   <link.icon className="w-4 h-4" />
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //           <div>
// //             <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
// //               Quick Links
// //             </h4>
// //             <ul className="space-y-2.5">
// //               {quickLinks.map((link) => (
// //                 <li key={link.label}>
// //                   <a
// //                     href={link.href}
// //                     className="text-white/60 text-sm hover:text-[#D98A2B] transition-colors duration-300"
// //                   >
// //                     {link.label}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div>
// //             <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
// //               Get In Touch
// //             </h4>
// //             <ul className="space-y-3.5">
// //               <li className="flex items-start gap-3">
// //                 <MapPin className="w-4 h-4 text-[#D98A2B] mt-0.5 shrink-0" />
// //                 <span className="text-white/60 text-sm">Cairo, Egypt</span>
// //               </li>
// //               <li className="flex items-center gap-3">
// //                 <Phone className="w-4 h-4 text-[#D98A2B] shrink-0" />
// //                 <a
// //                   href="tel:+201000000000"
// //                   className="text-white/60 text-sm hover:text-white transition-colors"
// //                 >
// //                   +20 100 000 0000
// //                 </a>
// //               </li>
// //               <li className="flex items-center gap-3">
// //                 <Mail className="w-4 h-4 text-[#D98A2B] shrink-0" />
// //                 <a
// //                   href="mailto:info@shorouq-construction.com"
// //                   className="text-white/60 text-sm hover:text-white transition-colors"
// //                 >
// //                   info@shorouq-construction.com
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>

// //           <div>
// //             <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
// //               Working Hours
// //             </h4>
// //             <ul className="space-y-2.5 text-sm text-white/60">
// //               <li className="flex justify-between gap-4">
// //                 <span>Sat – Thu</span>
// //                 <span>9:00 AM – 5:00 PM</span>
// //               </li>
// //               <li className="flex justify-between gap-4">
// //                 <span>Friday</span>
// //                 <span>Closed</span>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>

// //         <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-white/40">
// //           <p>
// //             © {new Date().getFullYear()} Shorouq Construction & Supply. All
// //             rights reserved.
// //           </p>
// //           <div className="flex gap-5">
// //             <a href="/privacy-policy" className="hover:text-white transition-colors">
// //               Privacy Policy
// //             </a>
// //             <a href="/terms" className="hover:text-white transition-colors">
// //               Terms & Conditions
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }



// import { motion } from "motion/react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   ArrowRight,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTiktok,
// } from "react-icons/fa6";

// // =========================================================
// // FLOATING PATHS
// // =========================================================

// function FloatingPaths({ position }) {
//   const paths = Array.from({ length: 24 }, (_, i) => ({
//     id: i,
//     d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
//       380 - i * 5 * position
//     } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
//       152 - i * 5 * position
//     } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
//       684 - i * 5 * position
//     } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,

//     width: 0.5 + i * 0.03,
//   }));

//   return (
//     <div className="pointer-events-none absolute inset-0">
//       <svg
//         className="h-full w-full"
//         viewBox="0 0 696 316"
//         fill="none"
//         preserveAspectRatio="none"
//       >
//         {paths.map((path) => (
//           <motion.path
//             key={path.id}
//             d={path.d}
//             stroke={
//               path.id % 4 === 0
//                 ? "#2A317A"
//                 : "#FFFFFF"
//             }
//             strokeWidth={path.width}
//             strokeOpacity={0.12}
//             initial={{
//               pathLength: 0,
//               opacity: 0,
//             }}
//             animate={{
//               pathLength: 1,
//               opacity: 0.12,
//             }}
//             transition={{
//               pathLength: {
//                 duration: 4 + path.id * 0.08,
//                 delay: path.id * 0.08,
//                 ease: [0.22, 1, 0.36, 1],
//               },
//               opacity: {
//                 duration: 1.2,
//                 delay: path.id * 0.08,
//                 ease: "easeOut",
//               },
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }

// // =========================================================
// // QUICK LINKS
// // =========================================================

// const quickLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Projects", href: "#projects" },
//   { label: "Timeline", href: "#timeline" },
// ];

// // =========================================================
// // SOCIAL LINKS
// // =========================================================

// const socialLinks = [
//   {
//     name: "Facebook",
//     icon: FaFacebookF,
//     href: "https://www.facebook.com/alshoroukconstruction?mibextid=ZbWKw",
//   },
//   {
//     name: "Instagram",
//     icon: FaInstagram,
//     href: "https://www.instagram.com/alshoroukconstruction",
//   },
//   {
//     name: "LinkedIn",
//     icon: FaLinkedinIn,
//     href: "https://www.linkedin.com/company/al-shorouk-construction-company/home/",
//   },
//   {
//     name: "TikTok",
//     icon: FaTiktok,
//     href: "https://www.tiktok.com/@alshoroukconstruction",
//   },
// ];

// // =========================================================
// // FOOTER
// // =========================================================

// export default function Footer() {
//   return (
//     <footer
//       className="relative overflow-hidden bg-[#3C3C3B] px-4 pb-8 pt-20"
//       id="contact"
//     >
//       {/* Animated background */}
//       <div className="absolute inset-0">
//         <FloatingPaths position={1} />
//         <FloatingPaths position={-1} />
//       </div>

//       <div className="relative z-10 mx-auto max-w-6xl">
//         {/* =====================================================
//             CTA BANNER
//         ===================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-12 md:flex-row"
//         >
//           <h3 className="text-center text-2xl font-bold text-white md:text-left md:text-4xl">
//             Have a project in mind?
//             <br className="hidden md:block" />

//             <span className="text-[#FFFFFF]">
//               Let's build it together.
//             </span>
//           </h3>

//           <a
//             href="/contact"
//             className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2A317A] px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
//           >
//             Contact Us

//             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </a>
//         </motion.div>

//         {/* =====================================================
//             FOOTER COLUMNS
//         ===================================================== */}

//         <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           {/* ===================================================
//               COMPANY
//           =================================================== */}

//           <div>
//             <h4 className="mb-3 text-xl font-bold text-white">
//               AL SHOROUK
//             </h4>

//             <p className="mb-5 text-sm leading-relaxed text-white/60">
//               Building Egypt's future with precision,
//               integrity, and over a decade of construction
//               excellence.
//             </p>

//             {/* Social Links */}
//             <div className="flex gap-3">
//               {socialLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={link.name}
//                   className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-[#2A317A] hover:text-white"
//                 >
//                   <link.icon className="h-4 w-4" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* ===================================================
//               QUICK LINKS
//           =================================================== */}

//           <div>
//             <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
//               Quick Links
//             </h4>

//             <ul className="space-y-2.5">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-sm text-white/60 transition-colors duration-300 hover:text-[#2A317A]"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ===================================================
//               GET IN TOUCH
//           =================================================== */}

//           <div>
//             <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
//               Get In Touch
//             </h4>

//             <ul className="space-y-3.5">
//               {/* Location */}
//               <li className="flex items-start gap-3">
//                 <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2A317A]" />

//                 <span className="text-sm text-white/60">
//                   Cairo, Egypt
//                 </span>
//               </li>

//               {/* Phone */}
//               <li className="flex items-center gap-3">
//                 <Phone className="h-4 w-4 shrink-0 text-[#2A317A]" />

//                 <a
//                   href="tel:+201000000000"
//                   className="text-sm text-white/60 transition-colors hover:text-white"
//                 >
//                   +20 100 000 0000
//                 </a>
//               </li>

//               {/* Email */}
//               <li className="flex items-center gap-3">
//                 <Mail className="h-4 w-4 shrink-0 text-[#2A317A]" />

//                 <a
//                   href="mailto:info@shorouq-construction.com"
//                   className="text-sm text-white/60 transition-colors hover:text-white"
//                 >
//                   info@shorouq-construction.com
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* ===================================================
//               WORKING HOURS
//           =================================================== */}

//           <div>
//             <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
//               Working Hours
//             </h4>

//             <ul className="space-y-2.5 text-sm text-white/60">
//               <li className="flex justify-between gap-4">
//                 <span>Sat – Thu</span>

//                 <span>
//                   9:00 AM – 5:00 PM
//                 </span>
//               </li>

//               <li className="flex justify-between gap-4">
//                 <span>Friday</span>

//                 <span>Closed</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* =====================================================
//             COPYRIGHT
//         ===================================================== */}

//         <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
//           <p>
//             © {new Date().getFullYear()} Shorouq
//             Construction & Supply. All rights reserved.
//           </p>

//           <div className="flex gap-5">
//             <a
//               href="/privacy-policy"
//               className="transition-colors hover:text-white"
//             >
//               Privacy Policy
//             </a>

//             <a
//               href="/terms"
//               className="transition-colors hover:text-white"
//             >
//               Terms & Conditions
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";
import KineticGrid from "../KineticGrid/KineticGrid";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/alshoroukconstruction?mibextid=ZbWKw",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/alshoroukconstruction",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/al-shorouk-construction-company/home/",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@alshoroukconstruction",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#3C3C3B]" id="contact">
      <KineticGrid className="!h-auto w-full">
        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-20">
          {/* CTA BANNER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-12 md:flex-row"
          >
            <h3 className="text-center text-2xl font-bold text-white md:text-left md:text-4xl">
              Have a project in mind?
              <br className="hidden md:block" />
              <span className="text-white">Let's build it together.</span>
            </h3>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2A317A] px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* COLUMNS */}
          <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company */}
            <div>
              <h4 className="mb-3 text-xl font-bold text-white">AL SHOROUK</h4>
              <p className="mb-5 text-sm leading-relaxed text-white/60">
                Building Egypt's future with precision, integrity, and over a
                decade of construction excellence.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-[#2A317A] hover:text-white"
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
                Get In Touch
              </h4>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFFFFF]" />
                  <span className="text-sm text-white/60">Cairo, Egypt</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#FFFFFF]" />
                  <a
                    href="tel:+201000000000"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    +20 100 000 0000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#FFFFFF]" />
                  <a
                    href="mailto:info@shorouq-construction.com"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    info@shorouq-construction.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
                Working Hours
              </h4>
              <ul className="space-y-2.5 text-sm text-white/60">
                <li className="flex justify-between gap-4">
                  <span>Sun – Thu</span>
                  <span>8:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Friday-Saturday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
            <p>
              © {new Date().getFullYear()} Shorouq Construction & Supply. All
              rights reserved.
            </p>
            <div className="flex gap-5">
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <a href="/terms" className="transition-colors hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </KineticGrid>
    </footer>
  );
}
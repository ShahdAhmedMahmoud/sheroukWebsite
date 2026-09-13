import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
//   Facebook,
//   Instagram,
//   Linkedin,
  ArrowRight,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn , FaTiktok } from "react-icons/fa6";

// خطوط الخلفية المتحركة - قللت العدد لـ 24 بدل 36 (الأصلي) عشان دي فوتر
// آخر الصفحة مش هيرو، ومفيش داعي نستهلك بروسيسور زيادة عليه
function FloatingPaths({ position }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,

    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.id % 4 === 0 ? "#283A85" : "#FFFFFF"}
            strokeWidth={path.width}
            strokeOpacity={0.12}
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 0.12,
            }}
            transition={{
              pathLength: {
                duration: 4 + path.id * 0.08,
                delay: path.id * 0.08,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 1.2,
                delay: path.id * 0.08,
                ease: "easeOut",
              },
            }}
          />
        ))}
      </svg>
    </div>
  );
}

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
    <footer className="relative bg-[#1E2432] overflow-hidden pt-20 pb-8 px-4" id="contact">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* بانر الـ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-12 mb-12"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center md:text-left">
            Have a project in mind? <br className="hidden md:block" />
            <span className="text-[#D98A2B]">Let's build it together.</span>
          </h3>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D98A2B] text-[#1E2432] font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shrink-0 group"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* الأعمدة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <h4 className="text-xl font-bold text-white mb-3">AL SHOROUQ</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Building Egypt's future with precision, integrity, and over a
              decade of construction excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D98A2B] hover:text-[#1E2432] transition-colors duration-300"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#D98A2B] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D98A2B] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D98A2B] shrink-0" />
                <a
                  href="tel:+201000000000"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  +20 100 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D98A2B] shrink-0" />
                <a
                  href="mailto:info@shorouq-construction.com"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  info@shorouq-construction.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Working Hours
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li className="flex justify-between gap-4">
                <span>Sat – Thu</span>
                <span>9:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Friday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Shorouq Construction & Supply. All
            rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
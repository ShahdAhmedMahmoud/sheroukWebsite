
// // import { useLayoutEffect, useRef } from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { HardHat, ArrowRight, PhoneCall } from "lucide-react";

// // gsap.registerPlugin(ScrollTrigger);



// // const LINE_TOPS = ["top-[12%]", "top-[32%]", "top-[52%]", "top-[72%]", "top-[90%]"];

// // const COLORS = { yellow: "#FFBF00", yellowHi: "#ffd76a", navy: "#1F3888", ink: "#1E2432" };

// // const SAW = { anchorX: 110, anchorY: 500, bladeR: 90, boxH: 600 };

// // const TIMING = {
// //   approach: 1.0,
// //   align: 0.2,
// //   plungePerPx: 0.0035,
// //   plungeMin: 1.5,
// //   plungeMax: 3.0,
// //   hold: 0.18,
// //   lift: 0.7,
// //   exitDelay: 0.45,
// //   exit: 0.75,
// //   separate: 1.1,
// // };

// // const FX_MAX_PARTICLES = 200;

// // const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
// // const lerp = (a, b, t) => a + (b - a) * t;
// // const rand = (a, b) => a + Math.random() * (b - a);
// // const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
// // const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
// // const easeInCubic = (t) => t * t * t;
// // const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
// // const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;
// // const easeOutBack = (t, k = 1) => 1 + (k + 1) * Math.pow(t - 1, 3) + k * Math.pow(t - 1, 2);

// // const mulberry32 = (seed) => () => {
// //   seed |= 0;
// //   seed = (seed + 0x6d2b79f5) | 0;
// //   let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
// //   t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
// //   return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
// // };

// // const ctaStyles = `
// //   @keyframes cta-gridMove { 0% { background-position: 0 0; } 100% { background-position: 50px 50px; } }
// //   @keyframes cta-lineMove { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
// //   @keyframes cta-cornerDraw { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 400; } }

// //   @keyframes bnBladeSpin { to { transform: rotate(360deg); } }
// //   @keyframes bnDustDrift {
// //     0%   { transform: translate(-50%,-50%) scale(.25); opacity: 0; }
// //     12%  { opacity: var(--o,.55); }
// //     100% { transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(var(--s,2)); opacity: 0; }
// //   }
// //   @keyframes bnSparkFly {
// //     0%   { transform: translate(0,0) rotate(var(--rot)) scaleY(1); opacity: 1; }
// //     55%  { transform: translate(var(--x1),var(--y1)) rotate(var(--rot)) scaleY(.8); opacity: 1; }
// //     100% { transform: translate(var(--x2),var(--y2)) rotate(var(--rot)) scaleY(.2); opacity: 0; }
// //   }
// //   @keyframes bnChipFly {
// //     0%   { transform: translate(0,0) rotate(0); opacity: 1; }
// //     45%  { transform: translate(var(--x1),var(--y1)) rotate(calc(var(--r) * .5)); opacity: 1; }
// //     100% { transform: translate(var(--x2),var(--y2)) rotate(var(--r)); opacity: 0; }
// //   }
// //   .bn-dust {
// //     position: absolute; border-radius: 50%; opacity: 0;
// //     background: radial-gradient(circle at 42% 40%, rgba(236,231,220,.9), rgba(196,190,178,.55) 42%, rgba(160,156,148,0) 72%);
// //     animation: bnDustDrift 1400ms cubic-bezier(.2,.65,.3,1) forwards;
// //   }
// //   .bn-spark {
// //     position: absolute; width: 2px; border-radius: 2px; opacity: 0; transform-origin: 50% 0;
// //     background: linear-gradient(to bottom, #fff 0%, ${COLORS.yellowHi} 28%, ${COLORS.yellow} 68%, rgba(255,120,0,0) 100%);
// //     box-shadow: 0 0 6px 1px rgba(255,191,0,.6);
// //     animation: bnSparkFly 600ms cubic-bezier(.15,.7,.35,1) forwards;
// //   }
// //   .bn-chip {
// //     position: absolute; opacity: 0; background: linear-gradient(135deg,#b9bcbf,#6a6e72);
// //     clip-path: polygon(10% 0,100% 30%,80% 100%,0 70%);
// //     animation: bnChipFly 900ms cubic-bezier(.2,.6,.4,1) forwards;
// //   }
// //   .bn-blade-svg { animation: bnBladeSpin .9s linear infinite; animation-play-state: paused; }
// //   .bn-saw-cutting .bn-blade-svg { animation-play-state: running; }

// //   @media (prefers-reduced-motion: reduce) {
// //     .cta-anim-grid, .cta-anim-line, .cta-anim-corner, .cta-anim-glow, .bn-fx { display: none !important; }
// //   }
// // `;

// // function CtaContent() {
// //   return (
// //     <div className="mx-auto max-w-3xl text-center">
// //       <div className="cta-anim-glow mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em]">
// //         <HardHat className="h-3.5 w-3.5" />
// //         Let's Build Together
// //       </div>

// //       <h2 className="mb-6 text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-tight sm:mb-8">
// //         Ready to break ground
// //         <br />
// //         <span
// //           className="inline-block"
// //           style={{
// //             backgroundImage: "linear-gradient(45deg, #FFBF00, #ffd76a, #1F3888)",
// //             WebkitBackgroundClip: "text",
// //             WebkitTextFillColor: "transparent",
// //             backgroundClip: "text",
// //           }}
// //         >
// //           on your next landmark?
// //         </span>
// //       </h2>

// //       <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
// //         From infrastructure to commercial developments across Egypt, our team turns ambitious plans into finished,
// //         standing structures. Tell us what you're building — we'll take it from there.
// //       </p>

// //       <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
// //         <a
// //           href="#contact"
// //           className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFBF00] px-7 py-3 text-sm font-semibold text-[#1E2432] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,191,0,0.25)] active:translate-y-0 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
// //         >
// //           Start Your Project
// //           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// //         </a>

// //         <a
// //           href="#contact"
// //           className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:border-[#1F3888] hover:bg-[#1F3888]/10 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
// //         >
// //           <PhoneCall className="h-4 w-4" />
// //           Talk to Our Team
// //         </a>
// //       </div>
// //     </div>
// //   );
// // }

// // /* =========================================================
// //    Detailed saw artwork (recolored to the project palette)
// // ========================================================= */

// // function SawSvg({ id }) {
// //   const grad = `cta-bnGrad-${id}`;
// //   const hoodGrad = `cta-bnHood-${id}`;
// //   const steelGrad = `cta-bnSteel-${id}`;
// //   const flangeGrad = `cta-bnFlange-${id}`;
// //   const clip = `cta-bnClip-${id}`;

// //   return (
// //     <svg viewBox="0 0 300 600" className="absolute inset-0 h-full w-full" aria-hidden="true">
// //       <defs>
// //         <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
// //           <stop offset="0" stopColor={COLORS.yellowHi} />
// //           <stop offset=".5" stopColor={COLORS.yellow} />
// //           <stop offset="1" stopColor="#9a6c00" />
// //         </linearGradient>
// //         <linearGradient id={hoodGrad} x1="0" y1="0" x2="0" y2="1">
// //           <stop offset="0" stopColor={COLORS.yellowHi} />
// //           <stop offset=".55" stopColor={COLORS.yellow} />
// //           <stop offset="1" stopColor="#8a6100" />
// //         </linearGradient>
// //         <radialGradient id={steelGrad} cx="50%" cy="50%" r="50%">
// //           <stop offset="0" stopColor="#e5e8eb" />
// //           <stop offset=".6" stopColor="#a3aab2" />
// //           <stop offset=".9" stopColor="#7f868d" />
// //           <stop offset="1" stopColor="#5a6067" />
// //         </radialGradient>
// //         <radialGradient id={flangeGrad} cx="40%" cy="35%" r="75%">
// //           <stop offset="0" stopColor={COLORS.navy} />
// //           <stop offset="1" stopColor="#101830" />
// //         </radialGradient>
// //         <clipPath id={clip}>
// //           <circle cx="110" cy="500" r="90" />
// //         </clipPath>
// //       </defs>

// //       <g>
// //         <path d="M150 376 L201 156" stroke="#0c0e10" strokeWidth="11" strokeLinecap="round" fill="none" />
// //         <path d="M150 376 L201 156" stroke="#6b737b" strokeWidth="7" strokeLinecap="round" fill="none" />
// //         <rect x="194" y="64" width="14" height="292" rx="7" fill="#6b737b" />
// //         <rect x="124" y="58" width="170" height="14" rx="7" fill="#6b737b" />
// //         <rect x="122" y="50" width="52" height="30" rx="14" fill="#0d0f11" />
// //         <rect x="246" y="50" width="52" height="30" rx="14" fill="#0d0f11" />
// //         <rect x="184" y="46" width="34" height="38" rx="8" fill={`url(#${grad})`} />
// //         <circle cx="201" cy="65" r="5" fill="#15171a" />
// //         <rect x="128" y="438" width="136" height="98" rx="24" fill={`url(#${grad})`} />
// //         <rect x="120" y="340" width="152" height="122" rx="24" fill={`url(#${grad})`} />
// //         <path d="M128 358 Q196 336 264 358" stroke="#fff" strokeOpacity=".45" strokeWidth="3" fill="none" />
// //         <g fill="#16110b" opacity=".85">
// //           <rect x="140" y="368" width="112" height="6" rx="3" />
// //           <rect x="140" y="380" width="112" height="6" rx="3" />
// //           <rect x="140" y="392" width="112" height="6" rx="3" />
// //           <rect x="140" y="404" width="112" height="6" rx="3" />
// //         </g>
// //         <rect x="188" y="418" width="78" height="17" rx="3" fill="#0f1114" />
// //         <text
// //           x="227"
// //           y="430"
// //           textAnchor="middle"
// //           fontFamily="Inter, Arial, sans-serif"
// //           fontWeight="800"
// //           fontSize="8"
// //           letterSpacing="1.4"
// //           fill={COLORS.yellow}
// //         >
// //           BUILDNEXT
// //         </text>
// //         <path d="M128 458h136a20 20 0 0 1-20 12h-96a20 20 0 0 1-20-12z" fill="#15171a" />
// //       </g>

// //       <g>
// //         <path d="M13.4 474A100 100 0 0 1 206.6 474Z" fill={`url(#${hoodGrad})`} />
// //         <path d="M13.4 474A100 100 0 0 1 206.6 474" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="2.5" />
// //         <g clipPath={`url(#${clip})`}>
// //           <rect x="10" y="474" width="200" height="18" fill="rgba(0,0,0,.45)" />
// //         </g>
// //         <rect x="13" y="471" width="194" height="6" rx="3" fill="#15171a" />
// //         <circle cx="110" cy="500" r="17" fill={`url(#${flangeGrad})`} stroke="#0a0b0d" strokeWidth="1.5" />
// //         <circle cx="110" cy="500" r="9" fill={COLORS.yellow} />
// //         <circle cx="110" cy="500" r="2.6" fill="#22190a" />
// //       </g>

// //       <g transform="translate(20 410)">
// //         <g className="bn-blade-svg" style={{ transformOrigin: "90px 90px" }}>
// //           <circle cx="90" cy="90" r="83" fill="none" stroke="#2b3035" strokeWidth="14" strokeDasharray="21 5.07" />
// //           <circle cx="90" cy="90" r="88.5" fill="none" stroke={COLORS.yellow} strokeWidth="3" strokeDasharray="21 5.07" />
// //           <circle cx="90" cy="90" r="76" fill={`url(#${steelGrad})`} />
// //           <circle cx="90" cy="90" r="64" fill="none" stroke="#1d2125" strokeWidth="14" strokeDasharray="4.5 29.02" />
// //           <circle cx="90" cy="90" r="53" fill="none" stroke={COLORS.yellow} strokeOpacity=".85" strokeWidth="2.4" strokeDasharray="38 295" />
// //           <circle cx="90" cy="90" r="31" fill={`url(#${flangeGrad})`} />
// //           <circle cx="90" cy="90" r="30" fill="none" stroke={COLORS.yellow} strokeWidth="2" />
// //           <circle cx="90" cy="90" r="9" fill="#0d0f11" />
// //         </g>
// //       </g>
// //     </svg>
// //   );
// // }

// // /* =========================================================
// //    MAIN SECTION
// // ========================================================= */

// // export default function ProjectsCTASection() {
// //   const sectionRef = useRef(null);
// //   const sourceRef = useRef(null);

// //   const fxRef = useRef(null);
// //   const sawRef = useRef(null);
// //   const sawShadowRef = useRef(null);
// //   const glowRef = useRef(null);

// //   const cutLineRef = useRef(null);
// //   const cutGapRef = useRef(null);

// //   const pieceLeftRef = useRef(null);
// //   const pieceRightRef = useRef(null);
// //   const clipLeftRef = useRef(null);
// //   const clipRightRef = useRef(null);

// //   const dustLayerRef = useRef(null);
// //   const sparkLayerRef = useRef(null);

// //   useLayoutEffect(() => {
// //     const section = sectionRef.current;
// //     if (!section) return undefined;

// //     const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// //     /* ---- initial, pre-animation state (plain styles — nothing depends on
// //        conditional Tailwind classes for correctness) ---- */
// //     if (sawRef.current) sawRef.current.style.opacity = "0";
// //     if (pieceLeftRef.current) pieceLeftRef.current.style.opacity = "0";
// //     if (pieceRightRef.current) pieceRightRef.current.style.opacity = "0";
// //     if (glowRef.current) glowRef.current.style.opacity = "0";
// //     if (sourceRef.current) sourceRef.current.style.opacity = "1";

// //     if (reduceMotion) {
// //       // static fallback: keep the intact content, no cut
// //       return undefined;
// //     }

// //     const geo = { W: 0, H: 0, cutX: 0, scale: 1, R: SAW.bladeR, kerf: 6, HR: 640, sepX: 40 };
// //     const Edges = { L: [], R: [] };
// //     const pt = (p) => `${p[0].toFixed(1)}px ${p[1].toFixed(1)}px`;

// //     function measure() {
// //       geo.W = section.clientWidth;
// //       geo.H = section.clientHeight;
// //       geo.cutX = Math.round(geo.W * 0.62);
// //       geo.scale = clamp(geo.W / 1450, 0.42, 0.85);
// //       geo.R = SAW.bladeR * geo.scale;
// //       geo.kerf = Math.max(4, Math.round(6 * geo.scale));
// //       geo.HR = Math.ceil(SAW.boxH * geo.scale + 30);
// //       geo.sepX = clamp(geo.W * 0.035, 10, 60);
// //       if (fxRef.current) {
// //         fxRef.current.style.top = `${-geo.HR}px`;
// //         fxRef.current.style.bottom = "-90px";
// //       }
// //     }

// //     function buildEdges() {
// //       const { H, cutX, kerf, scale } = geo;
// //       const step = clamp(Math.round(H / 40), 10, 22);
// //       const rnd = mulberry32(20260921);
// //       const amp = Math.min(kerf / 2 - 0.5, 1 + 1.1 * scale);
// //       Edges.L = [];
// //       Edges.R = [];
// //       for (let y = 0; ; y += step) {
// //         const yy = Math.min(y, H);
// //         Edges.L.push([cutX - kerf / 2 + (rnd() * 2 - 1) * amp, yy]);
// //         Edges.R.push([cutX + kerf / 2 + (rnd() * 2 - 1) * amp, yy]);
// //         if (yy >= H) break;
// //       }
// //     }

// //     function shapePieces() {
// //       const { W, H } = geo;
// //       if (clipLeftRef.current) {
// //         clipLeftRef.current.style.clipPath = `polygon(0px 0px, ${Edges.L.map(pt).join(", ")}, 0px ${H}px)`;
// //       }
// //       if (clipRightRef.current) {
// //         clipRightRef.current.style.clipPath = `polygon(${Edges.R.map(pt).join(", ")}, ${W}px ${H}px, ${W}px 0px)`;
// //       }
// //       if (cutGapRef.current) {
// //         cutGapRef.current.style.clipPath = `polygon(${Edges.L.map(pt).join(", ")}, ${Edges.R.slice().reverse().map(pt).join(", ")})`;
// //       }
// //     }

// //     function drawCut(px) {
// //       if (!cutLineRef.current) return;
// //       cutLineRef.current.style.clipPath = `inset(0 0 ${Math.max(0, geo.H - clamp(px, 0, geo.H)).toFixed(1)}px 0)`;
// //     }

// //     function separatePieces(p) {
// //       const dx = geo.sepX * easeOutBack(p, 0.9);
// //       const e = easeOutCubic(p);
// //       const lean = 0.3 * e;
// //       if (pieceLeftRef.current) {
// //         pieceLeftRef.current.style.opacity = "1";
// //         pieceLeftRef.current.style.transform = `translate3d(${(-dx).toFixed(2)}px, ${(5 * geo.scale * e).toFixed(2)}px, 0) rotate(${(-lean).toFixed(3)}deg)`;
// //       }
// //       if (pieceRightRef.current) {
// //         pieceRightRef.current.style.opacity = "1";
// //         pieceRightRef.current.style.transform = `translate3d(${dx.toFixed(2)}px, ${(-3 * geo.scale * e).toFixed(2)}px, 0) rotate(${lean.toFixed(3)}deg)`;
// //       }
// //       if (glowRef.current) glowRef.current.style.opacity = clamp(p * 1.4).toFixed(3);
// //       if (sourceRef.current) sourceRef.current.style.opacity = `${1 - Math.min(1, p * 4)}`;
// //     }

// //     function placeSaw(f) {
// //       if (!sawRef.current) return;
// //       const cy = f.tip - geo.R + geo.HR;
// //       const tx = f.x + f.jx - SAW.anchorX;
// //       const ty = cy + f.jy - SAW.anchorY;
// //       sawRef.current.style.opacity = "1";
// //       sawRef.current.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotate(${(f.rot + f.jr).toFixed(3)}deg) scale(${geo.scale.toFixed(3)})`;
// //       sawRef.current.classList.toggle("bn-saw-cutting", f.contact);
// //       if (sawShadowRef.current) {
// //         const off = lerp(7, 36, f.depth);
// //         sawShadowRef.current.style.transform = `translate3d(${(off * 0.7).toFixed(1)}px, ${off.toFixed(1)}px, 0)`;
// //         sawShadowRef.current.style.opacity = lerp(0.5, 0.28, f.depth).toFixed(2);
// //       }
// //     }

// //     function hideSaw() {
// //       if (!sawRef.current) return;
// //       sawRef.current.style.opacity = "0";
// //       sawRef.current.classList.remove("bn-saw-cutting");
// //     }

// //     const particleCount = () =>
// //       (dustLayerRef.current?.childElementCount || 0) + (sparkLayerRef.current?.childElementCount || 0);
// //     const spawnInto = (layer, el, life) => {
// //       if (!layer) return;
// //       layer.appendChild(el);
// //       setTimeout(() => el.remove(), life + 120);
// //     };
// //     function spawnDust(x, y, boost = 1, rise = false) {
// //       const s = geo.scale;
// //       const size = rand(24, 66) * s * boost;
// //       const life = rand(900, 1700);
// //       const dy = (rise ? rand(-100, -24) : rand(-50, 120)) * s;
// //       const el = document.createElement("i");
// //       el.className = "bn-dust";
// //       el.style.cssText = `left:${x.toFixed(1)}px;top:${y.toFixed(1)}px;width:${size.toFixed(0)}px;height:${size.toFixed(0)}px;--dx:${(rand(-120, 60) * s).toFixed(0)}px;--dy:${dy.toFixed(0)}px;--s:${rand(1.5, 2.6).toFixed(2)};--o:${rand(0.26, 0.56).toFixed(2)};animation-duration:${life.toFixed(0)}ms`;
// //       spawnInto(dustLayerRef.current, el, life);
// //     }
// //     function spawnChip(x, y) {
// //       const s = geo.scale;
// //       const life = rand(650, 1000);
// //       const ang = (rand(-30, 210) * Math.PI) / 180;
// //       const d = rand(24, 96) * s;
// //       const el = document.createElement("i");
// //       el.className = "bn-chip";
// //       el.style.cssText = `left:${x.toFixed(1)}px;top:${y.toFixed(1)}px;width:${(rand(3, 6) * s).toFixed(1)}px;height:${(rand(3, 5) * s).toFixed(1)}px;--x1:${(Math.cos(ang) * d * 0.6).toFixed(0)}px;--y1:${(Math.sin(ang) * d * 0.6 - 8 * s).toFixed(0)}px;--x2:${(Math.cos(ang) * d).toFixed(0)}px;--y2:${(Math.sin(ang) * d + rand(60, 170) * s).toFixed(0)}px;--r:${rand(-500, 500).toFixed(0)}deg;animation-duration:${life.toFixed(0)}ms`;
// //       spawnInto(dustLayerRef.current, el, life);
// //     }
// //     function spawnSpark(x, y) {
// //       const s = geo.scale;
// //       const life = rand(340, 740);
// //       const a = ((Math.random() < 0.78 ? rand(160, 275) : rand(-40, 30)) * Math.PI) / 180;
// //       const dist = rand(56, 190) * s;
// //       const g = rand(48, 150) * s;
// //       const x1 = Math.cos(a) * dist * 0.55;
// //       const y1 = Math.sin(a) * dist * 0.55 + g * 0.08;
// //       const x2 = Math.cos(a) * dist;
// //       const y2 = Math.sin(a) * dist + g;
// //       const rot = (Math.atan2(x1, -y1) * 180) / Math.PI;
// //       const el = document.createElement("i");
// //       el.className = "bn-spark";
// //       el.style.cssText = `left:${x.toFixed(1)}px;top:${y.toFixed(1)}px;height:${(rand(8, 18) * s).toFixed(1)}px;--x1:${x1.toFixed(0)}px;--y1:${y1.toFixed(0)}px;--x2:${x2.toFixed(0)}px;--y2:${y2.toFixed(0)}px;--rot:${rot.toFixed(1)}deg;animation-duration:${life.toFixed(0)}ms`;
// //       spawnInto(sparkLayerRef.current, el, life);
// //     }
// //     function clearParticles() {
// //       if (dustLayerRef.current) dustLayerRef.current.textContent = "";
// //       if (sparkLayerRef.current) sparkLayerRef.current.textContent = "";
// //     }

// //     let T = null;
// //     function timings() {
// //       const plunge = clamp(geo.H * TIMING.plungePerPx + 0.15, TIMING.plungeMin, TIMING.plungeMax);
// //       const approachEnd = TIMING.approach;
// //       const plungeStart = approachEnd + TIMING.align;
// //       const plungeEnd = plungeStart + plunge;
// //       const splitStart = plungeEnd + TIMING.hold;
// //       const exitStart = splitStart + TIMING.exitDelay;
// //       return {
// //         approachEnd,
// //         plungeStart,
// //         plungeEnd,
// //         splitStart,
// //         exitStart,
// //         end: Math.max(exitStart + TIMING.exit, splitStart + TIMING.separate),
// //       };
// //     }

// //     function sample(t) {
// //       const { W, H, cutX, scale } = geo;
// //       const hover = 26 * scale;
// //       const over = 8 * scale;
// //       const xIn = W + 200 * scale;
// //       const xOut = -260 * scale;
// //       const bob = Math.sin(t * 6.5) * 1.8 * scale;

// //       let x = cutX;
// //       let tip = -hover;
// //       let lean = 0;
// //       let contact = false;
// //       let idle = 0.14;

// //       if (t < T.approachEnd) {
// //         const p = t / T.approachEnd;
// //         x = lerp(xIn, cutX, easeOutQuart(p));
// //         lean = -3.2 * Math.pow(1 - p, 3) + Math.sin(p * 20) * 0.5 * Math.pow(1 - p, 2);
// //         tip = -hover + bob;
// //       } else if (t < T.plungeStart) {
// //         tip = -hover + bob;
// //       } else if (t < T.splitStart) {
// //         const p = clamp((t - T.plungeStart) / (T.plungeEnd - T.plungeStart));
// //         tip = lerp(-hover, H + over, easeInOutSine(p));
// //         contact = tip > -2 * scale;
// //         idle = 0;
// //       } else {
// //         const lp = clamp((t - T.splitStart) / TIMING.lift);
// //         tip = lerp(H + over, -hover, easeInOutCubic(lp));
// //         if (lp >= 1) tip += bob;
// //         const ep = clamp((t - T.exitStart) / TIMING.exit);
// //         x = lerp(cutX, xOut, easeInCubic(ep));
// //         lean = -3.4 * ep;
// //       }

// //       const bite = contact ? clamp((tip + 2 * scale) / (22 * scale)) : 0;
// //       const vib = contact ? 0.3 + 0.7 * bite : idle;
// //       const jx = (Math.sin(t * 93) + 0.6 * Math.sin(t * 217 + 1.3) + 0.4 * Math.sin(t * 510)) * 1.1 * vib * scale;
// //       const jy = (Math.sin(t * 117 + 0.6) + 0.5 * Math.sin(t * 290)) * 0.8 * vib * scale;
// //       const jr = (Math.sin(t * 131 + 2.1) + 0.5 * Math.sin(t * 370)) * 0.26 * vib;

// //       return { x, tip, rot: lean, jx, jy, jr, contact, depth: clamp(1 - (tip + 4 * scale) / (40 * scale)) };
// //     }

// //     let maxTip = -1e9;
// //     let split = false;
// //     let wasContact = false;
// //     let bottomBurst = false;
// //     let dustAcc = 0;
// //     let sparkAcc = 0;
// //     let chipAcc = 0;
// //     let mouthAcc = 0;
// //     let splitAcc = 0;
// //     let lastEmitT = 0;

// //     function emit(f, dt, sepP) {
// //       const { H, HR, cutX, scale } = geo;
// //       const busy = particleCount() > FX_MAX_PARTICLES;
// //       const step = (acc, perSec) => acc + (dt * perSec) / 1000;

// //       if (f.contact && !busy) {
// //         const tipY = clamp(f.tip, 0, H + 6 * scale) + HR;
// //         const px = () => cutX + rand(-4, 4) * scale;

// //         if (!wasContact) {
// //           for (let i = 0; i < 12; i++) spawnDust(cutX + rand(-8, 8) * scale, tipY, 1.1);
// //           for (let i = 0; i < 10; i++) spawnSpark(cutX, tipY);
// //         }
// //         if (!bottomBurst && f.tip >= H) {
// //           bottomBurst = true;
// //           for (let i = 0; i < 14; i++) spawnDust(cutX + rand(-12, 12) * scale, tipY, 1.25);
// //           for (let i = 0; i < 12; i++) spawnSpark(cutX, tipY);
// //         }

// //         dustAcc = step(dustAcc, 66);
// //         while (dustAcc >= 1) {
// //           spawnDust(px(), tipY, 1);
// //           dustAcc--;
// //         }
// //         sparkAcc = step(sparkAcc, 52);
// //         while (sparkAcc >= 1) {
// //           spawnSpark(cutX + rand(-3, 3) * scale, tipY);
// //           sparkAcc--;
// //         }
// //         chipAcc = step(chipAcc, 13);
// //         while (chipAcc >= 1) {
// //           spawnChip(px(), tipY);
// //           chipAcc--;
// //         }
// //         if (f.tip > 50 * scale) {
// //           mouthAcc = step(mouthAcc, 8);
// //           while (mouthAcc >= 1) {
// //             spawnDust(px(), HR + rand(-2, 5), 0.6, true);
// //             mouthAcc--;
// //           }
// //         }
// //       }
// //       wasContact = f.contact;

// //       if (split && sepP < 0.4 && !busy) {
// //         splitAcc = step(splitAcc, 38);
// //         while (splitAcc >= 1) {
// //           spawnDust(cutX + rand(-8, 8) * scale, HR + rand(0.05, 0.95) * H, 0.7);
// //           splitAcc--;
// //         }
// //       }
// //     }

// //     function render(t) {
// //       const f = sample(t);
// //       const dt = Math.max(0, (t - lastEmitT) * 1000);
// //       lastEmitT = t;

// //       placeSaw(f);

// //       maxTip = Math.max(maxTip, f.tip);
// //       if (t >= T.splitStart) maxTip = Math.max(maxTip, geo.H);
// //       drawCut(maxTip);

// //       if (!split && t >= T.splitStart) {
// //         split = true;
// //         for (let i = 0; i < 16; i++) spawnDust(geo.cutX + rand(-6, 6) * geo.scale, geo.HR + rand(0.04, 0.96) * geo.H, 0.85);
// //       }
// //       const sepP = split ? clamp((t - T.splitStart) / TIMING.separate) : 0;
// //       if (split) separatePieces(sepP);

// //       emit(f, dt, sepP);

// //       if (t >= T.end) hideSaw();
// //     }

// //     function layout() {
// //       measure();
// //       buildEdges();
// //       shapePieces();
// //     }

// //     const ctx = gsap.context(() => {
// //       layout();
// //       drawCut(0);

// //       ScrollTrigger.create({
// //         trigger: section,
// //         start: "top 82%",
// //         once: true,
// //         onEnter: () => {
// //           // re-measure right before playing — the card's height can change
// //           // (fonts, images) between mount and the moment it scrolls into view
// //           layout();
// //           drawCut(0);
// //           T = timings();
// //           const proxy = { t: 0 };
// //           gsap.to(proxy, {
// //             t: T.end,
// //             duration: T.end,
// //             ease: "none",
// //             onUpdate: () => render(proxy.t),
// //           });
// //         },
// //       });

// //       const onResize = () => {
// //         layout();
// //         if (split) {
// //           separatePieces(1);
// //           drawCut(geo.H);
// //         } else {
// //           drawCut(Math.max(0, maxTip));
// //         }
// //       };
// //       window.addEventListener("resize", onResize);
// //       return () => {
// //         window.removeEventListener("resize", onResize);
// //         clearParticles();
// //       };
// //     }, section);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <div className="relative w-full bg-[#F8F9FD] px-3 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-14">
// //       {/* unclipped "scene": the rounded card below clips its own contents,
// //           but this wrapper does NOT, so the saw can travel above/below the
// //           card's edges instead of being cut off by its rounded corners */}
// //       <div className="relative mx-auto w-full max-w-7xl">
// //         <style>{ctaStyles}</style>

// //         <section
// //           ref={sectionRef}
// //           className="relative w-full overflow-hidden rounded-[1.75rem] bg-[#1E2432] py-20 text-white shadow-[0_25px_60px_-20px_rgba(30,36,50,0.45)] sm:rounded-[2.5rem] sm:px-8 sm:py-28"
// //         >

// //         {/* background decoration — stays put, not part of the cut */}
// //         <div
// //           className="cta-anim-grid absolute inset-0 z-[1] h-full w-full opacity-60"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(rgba(255,191,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,191,0,0.07) 1px, transparent 1px)",
// //             backgroundSize: "50px 50px",
// //             animation: "cta-gridMove 20s linear infinite",
// //           }}
// //         />
// //         <div className="absolute inset-0 z-[1] h-full w-full overflow-hidden">
// //           {LINE_TOPS.map((topClass, index) => {
// //             const isBlue = index % 2 === 0;
// //             return (
// //               <div key={topClass} className={`absolute h-[100px] w-full ${topClass}`}>
// //                 <div className="relative h-0.5 w-full overflow-hidden">
// //                   <div
// //                     className={`cta-anim-line absolute left-0 top-0 h-full w-full ${
// //                       index % 2 !== 0 ? "[animation-direction:reverse] [animation-delay:2s]" : ""
// //                     }`}
// //                     style={{
// //                       animation: "cta-lineMove 4s linear infinite",
// //                       background: isBlue
// //                         ? "linear-gradient(90deg, transparent 0%, #1F3888 20%, #6d8cf0 50%, #1F3888 80%, transparent 100%)"
// //                         : "linear-gradient(90deg, transparent 0%, #FFBF00 20%, #ffe08a 50%, #FFBF00 80%, transparent 100%)",
// //                     }}
// //                   />
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //         <div className="absolute left-1/2 top-1/2 z-[5] hidden h-[100px] w-[300px] -translate-x-1/2 -translate-y-1/2 md:block">
// //           <svg
// //             className="cta-anim-corner absolute left-[-150px] top-1/2 h-[60px] w-[120px] -translate-y-1/2"
// //             viewBox="0 0 120 60"
// //             stroke="#FFBF00"
// //             strokeWidth="2"
// //             fill="none"
// //             strokeDasharray="50"
// //             style={{ animation: "cta-cornerDraw 6s linear infinite" }}
// //           >
// //             <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
// //           </svg>
// //           <svg
// //             className="cta-anim-corner absolute right-[-150px] top-1/2 h-[60px] w-[120px] -translate-y-1/2 scale-x-[-1]"
// //             viewBox="0 0 120 60"
// //             stroke="#1F3888"
// //             strokeWidth="2"
// //             fill="none"
// //             strokeDasharray="50"
// //             style={{ animation: "cta-cornerDraw 6s linear infinite 3s" }}
// //           >
// //             <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
// //           </svg>
// //         </div>

// //         {/* glow through the gap */}
// //         <div
// //           ref={glowRef}
// //           className="pointer-events-none absolute inset-y-0 left-[62%] z-[8] w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFBF00]/30 to-transparent blur-xl"
// //           aria-hidden="true"
// //         />

// //         {/* (1) intact source content */}
// //         <div ref={sourceRef} className="relative z-10">
// //           <CtaContent />
// //         </div>

// //         {/* (2)/(3) left + right pieces, clipped along the jagged kerf */}
// //         <div
// //           ref={pieceLeftRef}
// //           className="pointer-events-none absolute inset-0 z-[9]"
// //           style={{ transformOrigin: "0 100%", filter: "drop-shadow(0 0 14px rgba(0,0,0,.6))" }}
// //           aria-hidden="true"
// //         >
// //           <div ref={clipLeftRef} className="absolute inset-0 overflow-hidden">
// //             <div className="flex h-full items-center px-4 py-20 sm:px-8 sm:py-28">
// //               <CtaContent />
// //             </div>
// //           </div>
// //         </div>
// //         <div
// //           ref={pieceRightRef}
// //           className="pointer-events-none absolute inset-0 z-[9]"
// //           style={{ transformOrigin: "100% 100%", filter: "drop-shadow(0 0 14px rgba(0,0,0,.6))" }}
// //           aria-hidden="true"
// //         >
// //           <div ref={clipRightRef} className="absolute inset-0 overflow-hidden">
// //             <div className="flex h-full items-center px-4 py-20 sm:px-8 sm:py-28">
// //               <CtaContent />
// //             </div>
// //           </div>
// //         </div>

// //         {/* (8) cut line / kerf */}
// //         <div ref={cutLineRef} className="pointer-events-none absolute inset-0 z-[10]" aria-hidden="true">
// //           <div ref={cutGapRef} className="absolute inset-0" style={{ backgroundColor: "#0c0f14" }} />
// //         </div>
// //         </section>

// //         {/* fx: saw + particles — sibling of the card, NOT clipped by its
// //             rounded corners/overflow-hidden, so the whole saw stays visible
// //             as it travels in from above and plunges down to the bottom */}
// //         <div ref={fxRef} className="bn-fx pointer-events-none absolute left-0 right-0 z-[50] overflow-visible" aria-hidden="true">
// //           <div
// //             ref={sawRef}
// //             className="absolute left-0 top-0 h-[600px] w-[300px] will-change-transform"
// //             style={{ transformOrigin: `${SAW.anchorX}px ${SAW.anchorY}px` }}
// //           >
// //             <div ref={sawShadowRef} className="absolute inset-0 opacity-40 blur-[6px]" style={{ filter: "brightness(0)" }}>
// //               <SawSvg id="cta-shadow" />
// //             </div>
// //             <SawSvg id="cta-main" />
// //           </div>
// //           <div ref={dustLayerRef} className="absolute inset-0" />
// //           <div ref={sparkLayerRef} className="absolute inset-0" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import { useLayoutEffect, useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { HardHat, ArrowRight, PhoneCall } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// function CtaContent() {
//   return (
//     <div className="mx-auto max-w-3xl text-center">
//       <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#283A85]/25 bg-[#283A85]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#283A85]">
//         <HardHat className="h-3.5 w-3.5" />
//         Let's Build Together
//       </div>

//       <h2 className="mb-6 text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-tight text-black sm:mb-8">
//         Ready to break ground
//         <br />
//         <span className="text-[#283A85]">on your next landmark?</span>
//       </h2>

//       <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-[#3A3A3C]/80 sm:text-base">
//         From infrastructure to commercial developments across Egypt, our team turns ambitious plans into finished,
//         standing structures. Tell us what you're building — we'll take it from there.
//       </p>

//       <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
//         <a
//           href="#contact"
//           className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#283A85] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(40,58,133,0.3)] active:translate-y-0 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
//         >
//           Start Your Project
//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </a>

//         <a
//           href="#contact"
//           className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#3A3A3C]/30 bg-transparent px-7 py-3 text-sm font-semibold text-black transition-all duration-300 ease-in-out hover:border-[#283A85] hover:bg-[#283A85]/5 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
//         >
//           <PhoneCall className="h-4 w-4" />
//           Talk to Our Team
//         </a>
//       </div>
//     </div>
//   );
// }



// function AnimatedHandshakeBackground({ className = "", containerRef }) {
//   const pathRefs = useRef([]);
//   const [lengths, setLengths] = useState([]);




// const segments = [
//   {
//     id: "left-arm",
//     d: "M10,150 C55,142 95,140 130,148 C155,154 172,164 190,178",
//   },

//   {
//     id: "left-hand",
//     d: `
//       M190,178
//       C198,168 208,163 218,166
//       C226,168 231,176 230,185

//       M230,185
//       C239,174 250,170 260,174
//       C268,177 272,185 270,194

//       M270,194
//       C278,185 288,182 297,187
//       C304,191 306,199 302,207
//     `,
//   },

//   {
//     id: "right-arm",
//     d: "M390,150 C345,142 305,140 270,148 C245,154 228,164 210,178",
//   },

//   {
//     id: "right-hand",
//     d: `
//       M210,178
//       C202,168 192,163 182,166
//       C174,168 169,176 170,185

//       M170,185
//       C161,174 150,170 140,174
//       C132,177 128,185 130,194

//       M130,194
//       C122,185 112,182 103,187
//       C96,191 94,199 98,207
//     `,
//   },

//   {
//     id: "grip-line",
//     d: `
//       M302,207
//       C290,214 270,214 255,206
//       C238,197 218,197 200,206

//       C182,214 162,214 150,207
//       C138,200 118,200 98,207
//     `,
//   },
// ];



//   useEffect(() => {
//     const measured = pathRefs.current.map((el) => (el ? el.getTotalLength() : 0));
//     setLengths(measured);
//   }, []);

//   useLayoutEffect(() => {
//     const section = containerRef.current;
//     const paths = pathRefs.current.filter(Boolean);
//     if (!section || paths.length === 0 || lengths.length === 0) return undefined;

//     const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     paths.forEach((p, i) => {
//       const len = lengths[i] || p.getTotalLength();
//       p.style.strokeDasharray = `${len}`;
//       p.style.strokeDashoffset = `${len}`;
//     });

//     if (reduceMotion) {
//       paths.forEach((p) => (p.style.strokeDashoffset = "0"));
//       return undefined;
//     }

//     const totalLen = lengths.reduce((a, b) => a + b, 0) || 1;
//     // بطيئة وواضحة
//     const totalDuration = 9000;

//     const ctx = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 78%",
//         once: true,
//         onEnter: () => {
//           let elapsed = 0;
//           paths.forEach((p, i) => {
//             const len = lengths[i] || 0;
//             const duration = (len / totalLen) * totalDuration;
//             p.style.transition = `stroke-dashoffset ${duration}ms ease-in-out ${elapsed}ms`;
//             p.style.strokeDashoffset = "0";
//             elapsed += duration;
//           });
//         },
//       });
//     }, section);

//     return () => ctx.revert();
//   }, [containerRef, lengths]);

//   return (
//     <svg
//       className={`pointer-events-none ${className}`}
//       viewBox="-10 100 420 130"
//       preserveAspectRatio="xMidYMid meet"
//       fill="none"
//       aria-hidden="true"
//     >
// {segments.map((seg, i) => (
//   <path
//     key={seg.id}
//     ref={(el) => (pathRefs.current[i] = el)}
//     d={seg.d}
//     stroke="#000000"
//     strokeWidth={5}
//     fill="none"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   />
// ))}
//     </svg>
//   );
// }

// /* =========================================================
//    MAIN SECTION
// ========================================================= */

// export default function ProjectsCTASection() {
//   const sectionRef = useRef(null);

//   return (
//     <div className="relative w-full bg-white px-3 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-14">
//       <div className="relative mx-auto w-full max-w-7xl">
//         <section
//           ref={sectionRef}
//           className="relative w-full overflow-hidden rounded-[1.75rem] bg-white py-20 text-black shadow-[0_25px_60px_-20px_rgba(58,58,60,0.15)] sm:rounded-[2.5rem] sm:px-8 sm:py-28"
//         >
//           {/* ===== الخلفية: إيدين بتتصافح، مرسومة بخط أسود واضح وبطيء ===== */}
//           <AnimatedHandshakeBackground
//             containerRef={sectionRef}
//             className="absolute inset-0 z-0 h-full w-full flex items-center justify-center opacity-[0.14] scale-100 sm:opacity-[0.16] sm:scale-125 md:scale-150 lg:scale-[1.7]"
//           />

//           {/* المحتوى فوق الخلفية */}
//           <div className="relative z-10">
//             <CtaContent />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }



import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HardHat, ArrowRight, PhoneCall } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function CtaContent() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#283A85]/25 bg-[#283A85]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#283A85]">
        <HardHat className="h-3.5 w-3.5" />
        Let's Build Together
      </div>

      <h2 className="mb-6 text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-tight text-black sm:mb-8">
        Ready to break ground
        <br />
        <span className="text-[#283A85]">on your next landmark?</span>
      </h2>

      <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-[#3A3A3C]/80 sm:text-base">
        From infrastructure to commercial developments across Egypt, our team turns ambitious plans into finished,
        standing structures. Tell us what you're building — we'll take it from there.
      </p>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <a
          href="#contact"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#283A85] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(40,58,133,0.3)] active:translate-y-0 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
        >
          Start Your Project
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
<a
        
          href="#contact"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#3A3A3C]/30 bg-transparent px-7 py-3 text-sm font-semibold text-black transition-all duration-300 ease-in-out hover:border-[#283A85] hover:bg-[#283A85]/5 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
        >
          <PhoneCall className="h-4 w-4" />
          Talk to Our Team
        </a>
      </div>
    </div>
  );
}

/* =========================================================
   Animated hand-drawn handshake — background decoration.
   Styled to echo a detailed illustration: cuffed sleeves with
   buttons, forearms, interlocking fingers, visible thumb.
   Draws once, slowly and clearly, when the section scrolls
   into view (stroke-dasharray/offset + GSAP ScrollTrigger).
========================================================= */

function AnimatedHandshakeBackground({ className = "", containerRef }) {
  const pathRefs = useRef([]);
  const dotRefs = useRef([]);
  const [lengths, setLengths] = useState([]);

  // ترتيب الرسم: كم شمال -> ساعد شمال -> كم يمين -> ساعد يمين ->
  // الإبهام -> خط تلاقي الأصابع من فوق -> الأصابع المتشابكة من تحت
  const segments = [
    {
      id: "left-cuff",
      d: "M60,55 L185,15 L300,90 L288,148 L232,260 L188,270 L108,192 L60,55 Z",
    },
    {
      id: "left-cuff-fold",
      d: "M112,95 L215,50 L282,118",
    },
    {
      id: "left-arm",
      d: "M232,260 C248,268 262,278 278,290 C300,306 322,318 348,326",
    },
    {
      id: "right-cuff",
      d: "M890,55 L765,15 L650,90 L662,148 L718,260 L762,270 L842,192 L890,55 Z",
    },
    {
      id: "right-cuff-fold",
      d: "M838,95 L735,50 L668,118",
    },
    {
      id: "right-arm",
      d: "M718,260 C702,268 688,278 672,290 C650,306 628,318 602,326",
    },
    {
      id: "thumb",
      d: "M355,255 C345,225 352,192 378,172 C398,157 424,153 448,160 C468,166 480,182 478,200",
    },
    {
      id: "top-ridge",
      d: "M348,326 C368,300 390,282 415,275 C432,270 448,276 458,290 C468,304 484,308 500,300 C518,291 534,296 545,310 C556,324 574,328 590,318 L602,326",
    },

{
  id: "fingers",
  d: `
    M355,330
    C345,355 344,380 356,400
    C362,410 374,414 384,408
    C394,402 396,388 390,376

    C398,396 414,410 432,408
    C448,406 456,392 450,378

    C460,396 478,406 496,400
    C512,394 516,378 506,366

    C518,380 536,384 550,376
    C562,369 564,354 555,344
  `,
},


  ];

  useEffect(() => {
    const measured = pathRefs.current.map((el) => (el ? el.getTotalLength() : 0));
    setLengths(measured);
  }, []);

  useLayoutEffect(() => {
    const section = containerRef.current;
    const paths = pathRefs.current.filter(Boolean);
    const dots = dotRefs.current.filter(Boolean);
    if (!section || paths.length === 0 || lengths.length === 0) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    paths.forEach((p, i) => {
      const len = lengths[i] || p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });
    dots.forEach((d) => {
      d.style.opacity = "0";
    });

    if (reduceMotion) {
      paths.forEach((p) => (p.style.strokeDashoffset = "0"));
      dots.forEach((d) => (d.style.opacity = "1"));
      return undefined;
    }

    const totalLen = lengths.reduce((a, b) => a + b, 0) || 1;
    // بطيئة وواضحة
    const totalDuration = 10000;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 78%",
        once: true,
        onEnter: () => {
          let elapsed = 0;
          paths.forEach((p, i) => {
            const len = lengths[i] || 0;
            const duration = (len / totalLen) * totalDuration;
            p.style.transition = `stroke-dashoffset ${duration}ms ease-in-out ${elapsed}ms`;
            p.style.strokeDashoffset = "0";
            elapsed += duration;
          });
          // أزرار الكم بتظهر تدريجيًا بعد ما الكم يترسم
          dots.forEach((d, i) => {
            d.style.transition = `opacity 400ms ease-out ${800 + i * 150}ms`;
            d.style.opacity = "1";
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [containerRef, lengths]);

  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="30 0 890 430"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      aria-hidden="true"
    >
      {segments.map((seg, i) => (
        <path
          key={seg.id}
          ref={(el) => (pathRefs.current[i] = el)}
          d={seg.d}
          stroke="#000000"
          strokeWidth={8}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {/* أزرار الكم */}
      <circle ref={(el) => (dotRefs.current[0] = el)} cx="145" cy="195" r="6" fill="#000000" />
      <circle ref={(el) => (dotRefs.current[1] = el)} cx="170" cy="205" r="6" fill="#000000" />
      <circle ref={(el) => (dotRefs.current[2] = el)} cx="805" cy="195" r="6" fill="#000000" />
      <circle ref={(el) => (dotRefs.current[3] = el)} cx="780" cy="205" r="6" fill="#000000" />
    </svg>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function ProjectsCTASection() {
  const sectionRef = useRef(null);

  return (
    <div className="relative w-full bg-white px-3 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-14">
      <div className="relative mx-auto w-full max-w-7xl">
        <section
          ref={sectionRef}
          className="relative w-full overflow-hidden rounded-[1.75rem] bg-white py-20 text-black shadow-[0_25px_60px_-20px_rgba(58,58,60,0.15)] sm:rounded-[2.5rem] sm:px-8 sm:py-28"
        >
          {/* ===== الخلفية: مصافحة تفصيلية (كم + إبهام + أصابع متشابكة) ===== */}
          <AnimatedHandshakeBackground
            containerRef={sectionRef}
            className="absolute inset-0 z-0 h-full w-full flex items-center justify-center opacity-[0.14] scale-100 sm:opacity-[0.16] sm:scale-110 md:scale-125 lg:scale-[1.4]"
          />

          {/* المحتوى فوق الخلفية */}
          <div className="relative z-10">
            <CtaContent />
          </div>
        </section>
      </div>
    </div>
  );
}
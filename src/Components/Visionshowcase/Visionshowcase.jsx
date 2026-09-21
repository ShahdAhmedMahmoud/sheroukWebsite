// // import { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import {
// //   Building2,
// //   Layers,
// //   Network,
// //   MapPin,
// //   Sparkles,
// // } from 'lucide-react';

// // // =========================================
// // // 1. CONFIGURATION & DATA
// // // =========================================

// // const PALETTE = {
// //   bg: '#1C1E27',      // derived: a darkened shade of the charcoal, for a cinematic base
// //   charcoal: '#373A49',
// //   navy: '#293A82',
// //   white: '#FFFFFF',
// // };

// // const VISION_DATA = {
// //   start: {
// //     id: 'start',
// //     label: 'Starting Point',
// //     eyebrow: 'Where we stand today',
// //     title: 'A Site That Works, Not One That Wins',
// //     description:
// //       'The current site functions, but it stops there. Spaces sit disconnected, potential goes unused, and visitors pass through without a reason to stay.',
// //     icon: Building2,
// //     colors: {
// //       gradientFrom: PALETTE.charcoal,
// //       gradientTo: '#101218',
// //       ringSide: 'borderLeftColor',
// //       accent: PALETTE.charcoal,
// //     },
// //     status: 'Needs Direction',
// //     features: [
// //       { label: 'Functionality', value: 25, icon: Layers },
// //       { label: 'Connectivity', value: 30, icon: Network },
// //       { label: 'Site Purpose', value: 20, icon: MapPin },
// //     ],
// //   },
// //   vision: {
// //     id: 'vision',
// //     label: 'The Vision',
// //     eyebrow: 'Where we\u2019re headed',
// //     title: 'A Destination, By Design',
// //     description:
// //       'Every space connects, every corner has a purpose, and the site becomes somewhere people choose to be \u2014 a landmark, not a passageway.',
// //     icon: Sparkles,
// //     colors: {
// //       gradientFrom: PALETTE.navy,
// //       gradientTo: '#0E1740',
// //       ringSide: 'borderRightColor',
// //       accent: PALETTE.navy,
// //     },
// //     status: 'Fully Realized',
// //     features: [
// //       { label: 'Functionality', value: 95, icon: Layers },
// //       { label: 'Connectivity', value: 92, icon: Network },
// //       { label: 'Site Purpose', value: 96, icon: MapPin },
// //     ],
// //   },
// // };

// // // =========================================
// // // 2. ANIMATION VARIANTS
// // // =========================================

// // const ANIMATIONS = {
// //   container: {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.1, delayChildren: 0.1 },
// //     },
// //     exit: { opacity: 0, transition: { duration: 0.2 } },
// //   },
// //   item: {
// //     hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       filter: 'blur(0px)',
// //       transition: { type: 'spring', stiffness: 100, damping: 20 },
// //     },
// //     exit: { opacity: 0, y: -10, filter: 'blur(5px)' },
// //   },
// //   visual: (isLeft) => ({
// //     initial: {
// //       opacity: 0,
// //       scale: 1.5,
// //       filter: 'blur(15px)',
// //       rotate: isLeft ? -30 : 30,
// //       x: isLeft ? -80 : 80,
// //     },
// //     animate: {
// //       opacity: 1,
// //       scale: 1,
// //       filter: 'blur(0px)',
// //       rotate: 0,
// //       x: 0,
// //       transition: { type: 'spring', stiffness: 260, damping: 20 },
// //     },
// //     exit: {
// //       opacity: 0,
// //       scale: 0.6,
// //       filter: 'blur(20px)',
// //       transition: { duration: 0.25 },
// //     },
// //   }),
// // };

// // // =========================================
// // // 3. SUB-COMPONENTS
// // // =========================================

// // function BackgroundGlow({ isLeft, accent }) {
// //   return (
// //     <div className="pointer-events-none absolute inset-0">
// //       <motion.div
// //         animate={{
// //           background: isLeft
// //             ? `radial-gradient(circle at 0% 50%, ${accent}33, transparent 55%)`
// //             : `radial-gradient(circle at 100% 50%, ${accent}33, transparent 55%)`,
// //         }}
// //         transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
// //         className="absolute inset-0"
// //       />
// //     </div>
// //   );
// // }

// // function StateVisual({ data, isLeft }) {
// //   const Icon = data.icon;
// //   return (
// //     <motion.div layout="position" className="relative shrink-0">
// //       {/* Rotating dashed ring — one side tinted with the state's accent color */}
// //       <motion.div
// //         animate={{ rotate: 360 }}
// //         transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
// //         className="absolute inset-[-14%] rounded-full border border-dashed border-white/10"
// //         style={{ [data.colors.ringSide]: `${data.colors.accent}99` }}
// //       />
// //       {/* Pulsing glow */}
// //       <motion.div
// //         animate={{ scale: [1, 1.06, 1] }}
// //         transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
// //         className="absolute inset-0 rounded-full opacity-50 blur-2xl"
// //         style={{ backgroundImage: `linear-gradient(135deg, ${data.colors.gradientFrom}, ${data.colors.gradientTo})` }}
// //       />

// //       {/* Circle */}
// //       <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-sm sm:h-80 sm:w-80 md:h-96 md:w-96">
// //         <motion.div
// //           animate={{ y: [-10, 10, -10] }}
// //           transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
// //           className="relative z-10 flex h-full w-full items-center justify-center"
// //         >
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={data.id}
// //               variants={ANIMATIONS.visual(isLeft)}
// //               initial="initial"
// //               animate="animate"
// //               exit="exit"
// //               className="flex flex-col items-center gap-4"
// //             >
// //               <Icon size={72} strokeWidth={1.25} color={PALETTE.white} className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] sm:h-24 sm:w-24" />
// //             </motion.div>
// //           </AnimatePresence>
// //         </motion.div>
// //       </div>

// //       {/* Status pill */}
// //       <motion.div layout="position" className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
// //         <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-widest text-white/60 backdrop-blur">
// //           <span
// //             className="h-1.5 w-1.5 rounded-full animate-pulse"
// //             style={{ backgroundColor: data.colors.accent }}
// //           />
// //           {data.status}
// //         </div>
// //       </motion.div>
// //     </motion.div>
// //   );
// // }

// // function StateDetails({ data, isLeft }) {
// //   const alignClass = isLeft ? 'items-start text-left' : 'items-end text-right';
// //   const flexDirClass = isLeft ? 'flex-row' : 'flex-row-reverse';

// //   return (
// //     <motion.div
// //       variants={ANIMATIONS.container}
// //       initial="hidden"
// //       animate="visible"
// //       exit="exit"
// //       className={`flex flex-col ${alignClass}`}
// //     >
// //       <motion.h3 variants={ANIMATIONS.item} className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-white/40">
// //         {data.eyebrow}
// //       </motion.h3>
// //       <motion.h2 variants={ANIMATIONS.item} className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
// //         {data.title}
// //       </motion.h2>
// //       <motion.p
// //         variants={ANIMATIONS.item}
// //         className={`mb-8 max-w-sm leading-relaxed text-white/60 ${isLeft ? 'mr-auto' : 'ml-auto'}`}
// //       >
// //         {data.description}
// //       </motion.p>

// //       <motion.div variants={ANIMATIONS.item} className="w-full space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
// //         {data.features.map((feature, idx) => (
// //           <div key={feature.label}>
// //             <div className={`mb-3 flex items-center justify-between text-sm ${flexDirClass}`}>
// //               <div className="flex items-center gap-2 text-white/70">
// //                 <feature.icon size={16} />
// //                 <span>{feature.label}</span>
// //               </div>
// //               <span className="font-mono text-xs text-white/40">{feature.value}%</span>
// //             </div>
// //             <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
// //               <motion.div
// //                 initial={{ width: 0 }}
// //                 animate={{ width: `${feature.value}%` }}
// //                 transition={{ duration: 1, delay: 0.4 + idx * 0.15 }}
// //                 className="absolute inset-y-0 left-0 rounded-full opacity-90"
// //                 style={{ backgroundColor: data.colors.accent }}
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </motion.div>
// //     </motion.div>
// //   );
// // }

// // function Switcher({ activeId, onToggle }) {
// //   const options = Object.values(VISION_DATA).map((s) => ({ id: s.id, label: s.label }));

// //   return (
// //     <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center sm:bottom-10">
// //       <motion.div
// //         layout
// //         className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-black/50 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
// //       >
// //         {options.map((opt) => (
// //           <motion.button
// //             key={opt.id}
// //             type="button"
// //             onClick={() => onToggle(opt.id)}
// //             whileTap={{ scale: 0.96 }}
// //             className="relative flex h-11 w-32 items-center justify-center rounded-full text-sm font-medium focus:outline-none sm:h-12 sm:w-36"
// //           >
// //             {activeId === opt.id && (
// //               <motion.div
// //                 layoutId="vision-switch-surface"
// //                 className="absolute inset-0 rounded-full bg-white/10 shadow-inner"
// //                 transition={{ type: 'spring', stiffness: 220, damping: 22 }}
// //               />
// //             )}
// //             <span className={`relative z-10 transition-colors duration-300 ${activeId === opt.id ? 'text-white' : 'text-white/40 hover:text-white/70'}`}>
// //               {opt.label}
// //             </span>
// //           </motion.button>
// //         ))}
// //       </motion.div>
// //     </div>
// //   );
// // }

// // // =========================================
// // // 4. MAIN COMPONENT
// // // =========================================

// // export default function VisionShowcase() {
// //   const [activeId, setActiveId] = useState('start');
// //   const data = VISION_DATA[activeId];
// //   const isLeft = activeId === 'start';

// //   return (
// //     <section
// //       className="relative w-full overflow-hidden px-6 py-24 sm:py-28"
// //       style={{ backgroundColor: PALETTE.bg }}
// //     >
// //       <BackgroundGlow isLeft={isLeft} accent={data.colors.accent} />

// //       <div className="relative z-10 mx-auto w-full max-w-6xl pb-20">
// //         <motion.div
// //           layout
// //           transition={{ type: 'spring', bounce: 0, duration: 0.9 }}
// //           className={`flex flex-col items-center justify-center gap-12 md:gap-20 lg:gap-28 ${
// //             isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
// //           }`}
// //         >
// //           <StateVisual data={data} isLeft={isLeft} />

// //           <motion.div layout="position" className="w-full max-w-md">
// //             <AnimatePresence mode="wait">
// //               <StateDetails key={activeId} data={data} isLeft={isLeft} />
// //             </AnimatePresence>
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       <Switcher activeId={activeId} onToggle={setActiveId} />
// //     </section>
// //   );
// // }





// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // =========================================
// // 1. CONFIGURATION & DATA
// // =========================================

// const PALETTE = {
//   bg: '#D3D6E2',
//   text: '#373A49',
//   circle: '#373A49',
//   white: '#FFFFFF',
// };

// const VISION_DATA = {
//   start: {
//     id: 'start',
//     label: 'Starting Point',
//     eyebrow: 'WHERE WE START',
//     title: 'A Site With Potential',
//     description:
//       'The existing space has the foundation, but its elements remain disconnected. The opportunity is there — it simply needs direction.',
//     accent: '#373A49',

//     comparison: [
//       {
//         small: 'TODAY',
//         big: 'Disconnected',
//         text: 'Spaces exist, but they do not yet work together as one experience.',
//       },
//       {
//         small: 'OPPORTUNITY',
//         big: 'Untapped',
//         text: 'Every space holds potential for a stronger purpose and identity.',
//       },
//       {
//         small: 'THE GAP',
//         big: 'Direction',
//         text: 'What is missing is not space — it is a clear vision connecting it all.',
//       },
//     ],
//   },

//   vision: {
//     id: 'vision',
//     label: 'The Vision',
//     eyebrow: 'WHERE WE ARE HEADED',
//     title: 'A Destination By Design',
//     description:
//       'The vision transforms separate spaces into one connected experience — purposeful, recognizable, and designed to become a destination.',
//     accent: '#293A82',

//     comparison: [
//       {
//         small: 'CONNECTED',
//         big: 'One Experience',
//         text: 'Every space contributes to a single, coherent destination.',
//       },
//       {
//         small: 'PURPOSEFUL',
//         big: 'Every Corner Matters',
//         text: 'Movement, function and identity work together by design.',
//       },
//       {
//         small: 'THE RESULT',
//         big: 'A Landmark',
//         text: 'A place people remember, experience and choose to return to.',
//       },
//     ],
//   },
// };

// // =========================================
// // 2. ANIMATION VARIANTS
// // =========================================

// const ANIMATIONS = {
//   container: {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1,
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: { duration: 0.2 },
//     },
//   },

//   // Starting Point enters from LEFT
//   // Vision enters from RIGHT
//   item: (isLeft) => ({
//     hidden: {
//       opacity: 0,
//       x: isLeft ? -45 : 45,
//       filter: 'blur(8px)',
//     },

//     visible: {
//       opacity: 1,
//       x: 0,
//       filter: 'blur(0px)',
//       transition: {
//         type: 'spring',
//         stiffness: 110,
//         damping: 20,
//       },
//     },

//     exit: {
//       opacity: 0,
//       x: isLeft ? 35 : -35,
//       filter: 'blur(6px)',
//       transition: {
//         duration: 0.25,
//       },
//     },
//   }),

//   visual: (isLeft) => ({
//     initial: {
//       opacity: 0,
//       scale: 1.35,
//       filter: 'blur(12px)',
//       rotate: isLeft ? -12 : 12,
//       x: isLeft ? -60 : 60,
//     },

//     animate: {
//       opacity: 1,
//       scale: 1,
//       filter: 'blur(0px)',
//       rotate: 0,
//       x: 0,

//       transition: {
//         type: 'spring',
//         stiffness: 220,
//         damping: 20,
//       },
//     },

//     exit: {
//       opacity: 0,
//       scale: 0.75,
//       filter: 'blur(15px)',
//       x: isLeft ? 50 : -50,

//       transition: {
//         duration: 0.3,
//       },
//     },
//   }),

//   comparison: (isLeft) => ({
//     hidden: {
//       opacity: 0,
//       x: isLeft ? -30 : 30,
//       filter: 'blur(6px)',
//     },

//     visible: {
//       opacity: 1,
//       x: 0,
//       filter: 'blur(0px)',

//       transition: {
//         type: 'spring',
//         stiffness: 120,
//         damping: 22,
//       },
//     },

//     exit: {
//       opacity: 0,
//       x: isLeft ? 30 : -30,
//       filter: 'blur(5px)',
//       transition: {
//         duration: 0.2,
//       },
//     },
//   }),
// };

// // =========================================
// // 3. BACKGROUND
// // =========================================

// function BackgroundGlow({ isLeft }) {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">

//       <motion.div
//         animate={{
//           background: isLeft
//             ? `radial-gradient(circle at 0% 50%, rgba(55,58,73,0.13), transparent 55%)`
//             : `radial-gradient(circle at 100% 50%, rgba(41,58,130,0.12), transparent 55%)`,
//         }}
//         transition={{
//           duration: 1.2,
//           ease: [0.16, 1, 0.3, 1],
//         }}
//         className="absolute inset-0"
//       />

//       {/* subtle grid */}
//       <div
//         className="absolute inset-0 opacity-[0.035]"
//         style={{
//           backgroundImage: `
//             linear-gradient(${PALETTE.text} 1px, transparent 1px),
//             linear-gradient(90deg, ${PALETTE.text} 1px, transparent 1px)
//           `,
//           backgroundSize: '60px 60px',
//         }}
//       />
//     </div>
//   );
// }

// // =========================================
// // 4. MAIN CIRCLE VISUAL
// // =========================================

// function StateVisual({ data, isLeft }) {
//   return (
//     <motion.div layout="position" className="relative shrink-0">

//       {/* Rotating ring */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: 'linear',
//         }}
//         className="absolute inset-[-12%] rounded-full border border-dashed"
//         style={{
//           borderColor: `${PALETTE.text}20`,
//           borderLeftColor: isLeft
//             ? PALETTE.text
//             : '#293A82',
//           borderRightColor: isLeft
//             ? '#293A82'
//             : PALETTE.text,
//         }}
//       />

//       {/* Outer orbit */}
//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: 'linear',
//         }}
//         className="absolute inset-[-5%] rounded-full border"
//         style={{
//           borderColor: `${PALETTE.text}12`,
//         }}
//       />

//       {/* Glow */}
//       <motion.div
//         animate={{
//           scale: [1, 1.05, 1],
//           opacity: [0.18, 0.28, 0.18],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//         className="absolute inset-0 rounded-full blur-3xl"
//         style={{
//           backgroundColor: isLeft
//             ? PALETTE.text
//             : '#293A82',
//         }}
//       />

//       {/* Circle */}
//       <div
//         className="
//           relative
//           flex
//           h-64
//           w-64
//           items-center
//           justify-center
//           overflow-hidden
//           rounded-full
//           border
//           border-white/10
//           shadow-2xl
//           sm:h-80
//           sm:w-80
//           md:h-96
//           md:w-96
//         "
//         style={{
//           backgroundColor: PALETTE.circle,
//         }}
//       >

//         {/* Inner subtle circle */}
//         <div
//           className="absolute inset-6 rounded-full border"
//           style={{
//             borderColor: 'rgba(255,255,255,0.08)',
//           }}
//         />

//         <motion.div
//           animate={{
//             y: [-8, 8, -8],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 6,
//             ease: 'easeInOut',
//           }}
//           className="relative z-10 flex h-full w-full items-center justify-center px-10"
//         >

//           <AnimatePresence mode="wait">

//             <motion.div
//               key={data.id}
//               variants={ANIMATIONS.visual(isLeft)}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               className="text-center"
//             >

//               {/* Small number */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.25 }}
//                 className="mb-4 font-mono text-xs tracking-[0.35em] text-white/40"
//               >
//                 {isLeft ? '01' : '02'}
//               </motion.div>

//               {/* Main title */}
//               <motion.h3
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.35,
//                   duration: 0.6,
//                 }}
//                 className="
//                   text-3xl
//                   font-semibold
//                   leading-tight
//                   tracking-tight
//                   text-white
//                   sm:text-4xl
//                   md:text-5xl
//                 "
//               >
//                 {isLeft ? (
//                   <>
//                     Starting
//                     <br />
//                     Point
//                   </>
//                 ) : (
//                   <>
//                     The
//                     <br />
//                     Vision
//                   </>
//                 )}
//               </motion.h3>

//               {/* Animated line */}
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: '55%' }}
//                 transition={{
//                   delay: 0.65,
//                   duration: 0.8,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 className="mx-auto mt-5 h-px bg-white/30"
//               />

//             </motion.div>

//           </AnimatePresence>

//         </motion.div>
//       </div>

//       {/* Status */}
//       <motion.div
//         layout="position"
//         className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
//       >
//         <div
//           className="
//             flex
//             items-center
//             gap-2
//             rounded-full
//             border
//             px-4
//             py-2
//             text-[10px]
//             uppercase
//             tracking-[0.2em]
//             backdrop-blur
//           "
//           style={{
//             borderColor: `${PALETTE.text}20`,
//             backgroundColor: 'rgba(211,214,226,0.75)',
//             color: PALETTE.text,
//           }}
//         >
//           <span
//             className="h-1.5 w-1.5 animate-pulse rounded-full"
//             style={{
//               backgroundColor: isLeft
//                 ? PALETTE.text
//                 : '#293A82',
//             }}
//           />

//           {isLeft ? 'CURRENT STATE' : 'FUTURE STATE'}
//         </div>
//       </motion.div>

//     </motion.div>
//   );
// }

// // =========================================
// // 5. COMPARISON STORY
// // =========================================

// function ComparisonStory({ data, isLeft }) {
//   return (
//     <motion.div
//       variants={ANIMATIONS.container}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       className="w-full"
//     >

//       <div className="mb-6 flex items-center gap-3">

//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: 42 }}
//           transition={{
//             duration: 0.7,
//             delay: 0.15,
//           }}
//           className="h-px"
//           style={{
//             backgroundColor: PALETTE.text,
//           }}
//         />

//         <motion.span
//           variants={ANIMATIONS.item(isLeft)}
//           className="
//             text-xs
//             font-bold
//             uppercase
//             tracking-[0.22em]
//             opacity-50
//           "
//           style={{
//             color: PALETTE.text,
//           }}
//         >
//           {isLeft ? 'THE STARTING POINT' : 'THE TRANSFORMATION'}
//         </motion.span>

//       </div>

//       <div className="space-y-3">

//         {data.comparison.map((item, index) => (

//           <motion.div
//             key={item.big}
//             variants={ANIMATIONS.comparison(isLeft)}
//             custom={index}
//             className="
//               group
//               relative
//               overflow-hidden
//               rounded-2xl
//               border
//               p-5
//               transition-all
//               duration-500
//               hover:-translate-y-1
//             "
//             style={{
//               borderColor: `${PALETTE.text}18`,
//               backgroundColor: 'rgba(255,255,255,0.22)',
//             }}
//           >

//             {/* Hover line */}
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileHover={{ scaleX: 1 }}
//               transition={{ duration: 0.4 }}
//               className="absolute inset-x-0 bottom-0 h-0.5 origin-left"
//               style={{
//                 backgroundColor: isLeft
//                   ? PALETTE.text
//                   : '#293A82',
//               }}
//             />

//             <div className="flex items-start gap-4">

//               {/* Number */}
//               <motion.div
//                 animate={{
//                   y: [0, -3, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   delay: index * 0.3,
//                 }}
//                 className="
//                   pt-1
//                   font-mono
//                   text-xs
//                   opacity-35
//                 "
//                 style={{
//                   color: PALETTE.text,
//                 }}
//               >
//                 0{index + 1}
//               </motion.div>

//               <div className="min-w-0 flex-1">

//                 <div
//                   className="
//                     mb-1
//                     text-[10px]
//                     font-bold
//                     uppercase
//                     tracking-[0.2em]
//                     opacity-45
//                   "
//                   style={{
//                     color: PALETTE.text,
//                   }}
//                 >
//                   {item.small}
//                 </div>

//                 <motion.h4
//                   variants={ANIMATIONS.item(isLeft)}
//                   className="
//                     mb-2
//                     text-xl
//                     font-semibold
//                     tracking-tight
//                   "
//                   style={{
//                     color: PALETTE.text,
//                   }}
//                 >
//                   {item.big}
//                 </motion.h4>

//                 <motion.p
//                   variants={ANIMATIONS.item(isLeft)}
//                   className="
//                     max-w-md
//                     text-sm
//                     leading-relaxed
//                     opacity-60
//                   "
//                   style={{
//                     color: PALETTE.text,
//                   }}
//                 >
//                   {item.text}
//                 </motion.p>

//               </div>

//             </div>

//           </motion.div>

//         ))}

//       </div>

//     </motion.div>
//   );
// }

// // =========================================
// // 6. SWITCHER
// // =========================================

// function Switcher({ activeId, onToggle }) {
//   const options = Object.values(VISION_DATA).map((state) => ({
//     id: state.id,
//     label: state.label,
//   }));

//   return (
//     <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center sm:bottom-10">

//       <motion.div
//         layout
//         className="
//           pointer-events-auto
//           flex
//           items-center
//           gap-1
//           rounded-full
//           border
//           p-1.5
//           shadow-[0_20px_60px_rgba(55,58,73,0.18)]
//           backdrop-blur-2xl
//         "
//         style={{
//           borderColor: `${PALETTE.text}18`,
//           backgroundColor: 'rgba(211,214,226,0.72)',
//         }}
//       >

//         {options.map((opt) => (

//           <motion.button
//             key={opt.id}
//             type="button"
//             onClick={() => onToggle(opt.id)}
//             whileTap={{ scale: 0.96 }}
//             className="
//               relative
//               flex
//               h-11
//               w-32
//               items-center
//               justify-center
//               rounded-full
//               text-sm
//               font-medium
//               focus:outline-none
//               sm:h-12
//               sm:w-36
//             "
//           >

//             {activeId === opt.id && (
//               <motion.div
//                 layoutId="vision-switch-surface"
//                 className="absolute inset-0 rounded-full shadow-inner"
//                 style={{
//                   backgroundColor: PALETTE.text,
//                 }}
//                 transition={{
//                   type: 'spring',
//                   stiffness: 220,
//                   damping: 22,
//                 }}
//               />
//             )}

//             <span
//               className={`
//                 relative
//                 z-10
//                 transition-colors
//                 duration-300
//                 ${
//                   activeId === opt.id
//                     ? 'text-white'
//                     : 'text-[#373A49]/50 hover:text-[#373A49]'
//                 }
//               `}
//             >
//               {opt.label}
//             </span>

//           </motion.button>

//         ))}

//       </motion.div>
//     </div>
//   );
// }

// // =========================================
// // 7. MAIN COMPONENT
// // =========================================

// export default function VisionShowcase() {

//   const [activeId, setActiveId] = useState('start');

//   const data = VISION_DATA[activeId];

//   const isLeft = activeId === 'start';

//   return (
//     <section
//       className="
//         relative
//         w-full
//         overflow-hidden
//         px-6
//         py-24
//         sm:py-28
//       "
//       style={{
//         backgroundColor: PALETTE.bg,
//       }}
//     >

//       <BackgroundGlow isLeft={isLeft} />

//       <div className="relative z-10 mx-auto w-full max-w-6xl pb-20">

//         <motion.div
//           layout
//           transition={{
//             type: 'spring',
//             bounce: 0,
//             duration: 0.9,
//           }}
//           className={`
//             flex
//             flex-col
//             items-center
//             justify-center
//             gap-12
//             md:gap-20
//             lg:gap-28
//             ${
//               isLeft
//                 ? 'md:flex-row'
//                 : 'md:flex-row-reverse'
//             }
//           `}
//         >

//           <StateVisual
//             data={data}
//             isLeft={isLeft}
//           />

//           <motion.div
//             layout="position"
//             className="w-full max-w-md"
//           >

//             <AnimatePresence
//               mode="wait"
//               custom={isLeft}
//             >

//               <motion.div
//                 key={activeId}
//                 variants={ANIMATIONS.container}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >

//                 <motion.h3
//                   variants={ANIMATIONS.item(isLeft)}
//                   className="
//                     mb-3
//                     text-sm
//                     font-bold
//                     uppercase
//                     tracking-[0.2em]
//                     opacity-45
//                   "
//                   style={{
//                     color: PALETTE.text,
//                   }}
//                 >
//                   {data.eyebrow}
//                 </motion.h3>

//                 <motion.h2
//                   variants={ANIMATIONS.item(isLeft)}
//                   className="
//                     mb-5
//                     text-3xl
//                     font-bold
//                     tracking-tight
//                     sm:text-4xl
//                     md:text-5xl
//                   "
//                   style={{
//                     color: PALETTE.text,
//                   }}
//                 >
//                   {data.title}
//                 </motion.h2>

//                 <motion.p
//                   variants={ANIMATIONS.item(isLeft)}
//                   className="
//                     mb-8
//                     max-w-sm
//                     leading-relaxed
//                     opacity-60
//                   "
//                   style={{
//                     color: PALETTE.text,
//                   }}
//                 >
//                   {data.description}
//                 </motion.p>

//                 <ComparisonStory
//                   data={data}
//                   isLeft={isLeft}
//                 />

//               </motion.div>

//             </AnimatePresence>

//           </motion.div>

//         </motion.div>

//       </div>

//       <Switcher
//         activeId={activeId}
//         onToggle={setActiveId}
//       />

//     </section>
//   );
// }


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// =========================================
// 1. CONFIGURATION & DATA
// =========================================

const PALETTE = {
  bg: '#D3D6E2',
  text: '#373A49',
  circle: '#373A49',
  white: '#FFFFFF',
};

const VISION_DATA = {
  start: {
    id: 'start',
    label: 'Starting Point',
    eyebrow: 'WHERE WE START',
    title: 'A Site With Potential',
    description:
      'The existing space has the foundation, but its elements remain disconnected. The opportunity is there — it simply needs direction.',
    accent: '#373A49',

    comparison: [
      {
        small: 'TODAY',
        big: 'Disconnected',
        text: 'Spaces exist, but they do not yet work together as one experience.',
      },
      {
        small: 'OPPORTUNITY',
        big: 'Untapped',
        text: 'Every space holds potential for a stronger purpose and identity.',
      },
      {
        small: 'THE GAP',
        big: 'Direction',
        text: 'What is missing is not space — it is a clear vision connecting it all.',
      },
    ],
  },

  vision: {
    id: 'vision',
    label: 'The Vision',
    eyebrow: 'WHERE WE ARE HEADED',
    title: 'A Destination By Design',
    description:
      'The vision transforms separate spaces into one connected experience — purposeful, recognizable, and designed to become a destination.',
    accent: '#293A82',

    comparison: [
      {
        small: 'CONNECTED',
        big: 'One Experience',
        text: 'Every space contributes to a single, coherent destination.',
      },
      {
        small: 'PURPOSEFUL',
        big: 'Every Corner Matters',
        text: 'Movement, function and identity work together by design.',
      },
      {
        small: 'THE RESULT',
        big: 'A Landmark',
        text: 'A place people remember, experience and choose to return to.',
      },
    ],
  },
};

// =========================================
// 2. ANIMATION VARIANTS
// =========================================

const ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  },

  // Starting Point enters from LEFT
  // Vision enters from RIGHT
  item: (isLeft) => ({
    hidden: {
      opacity: 0,
      x: isLeft ? -45 : 45,
      filter: 'blur(8px)',
    },

    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',

      transition: {
        type: 'spring',
        stiffness: 110,
        damping: 20,
      },
    },

    exit: {
      opacity: 0,
      x: isLeft ? 35 : -35,
      filter: 'blur(6px)',

      transition: {
        duration: 0.25,
      },
    },
  }),

  visual: (isLeft) => ({
    initial: {
      opacity: 0,
      scale: 1.35,
      filter: 'blur(12px)',
      rotate: isLeft ? -12 : 12,
      x: isLeft ? -60 : 60,
    },

    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      rotate: 0,
      x: 0,

      transition: {
        type: 'spring',
        stiffness: 220,
        damping: 20,
      },
    },

    exit: {
      opacity: 0,
      scale: 0.75,
      filter: 'blur(15px)',
      x: isLeft ? 50 : -50,

      transition: {
        duration: 0.3,
      },
    },
  }),

  comparison: (isLeft) => ({
    hidden: {
      opacity: 0,
      x: isLeft ? -30 : 30,
      filter: 'blur(6px)',
    },

    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',

      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 22,
      },
    },

    exit: {
      opacity: 0,
      x: isLeft ? 30 : -30,
      filter: 'blur(5px)',

      transition: {
        duration: 0.2,
      },
    },
  }),
};

// =========================================
// 3. BACKGROUND
// =========================================

function BackgroundGlow({ isLeft }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <motion.div
        animate={{
          background: isLeft
            ? `radial-gradient(circle at 0% 50%, rgba(55,58,73,0.13), transparent 55%)`
            : `radial-gradient(circle at 100% 50%, rgba(41,58,130,0.12), transparent 55%)`,
        }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0"
      />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(${PALETTE.text} 1px, transparent 1px),
            linear-gradient(90deg, ${PALETTE.text} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

// =========================================
// 4. MAIN CIRCLE VISUAL
// =========================================

function StateVisual({ data, isLeft }) {
  return (
    <motion.div
      layout="position"
      className="relative shrink-0"
    >

      {/* Rotating ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-[-12%] rounded-full border border-dashed"
        style={{
          borderColor: `${PALETTE.text}20`,
          borderLeftColor: isLeft
            ? PALETTE.text
            : '#293A82',
          borderRightColor: isLeft
            ? '#293A82'
            : PALETTE.text,
        }}
      />

      {/* Outer orbit */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-[-5%] rounded-full border"
        style={{
          borderColor: `${PALETTE.text}12`,
        }}
      />

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          backgroundColor: isLeft
            ? PALETTE.text
            : '#293A82',
        }}
      />

      {/* Circle */}
      <div
        className="
          relative
          flex
          h-64
          w-64
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-white/10
          shadow-2xl
          sm:h-80
          sm:w-80
          md:h-96
          md:w-96
        "
        style={{
          backgroundColor: PALETTE.circle,
        }}
      >

        {/* Inner subtle circle */}
        <div
          className="absolute inset-6 rounded-full border"
          style={{
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        />

        <motion.div
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
          }}
          className="
            relative
            z-10
            flex
            h-full
            w-full
            items-center
            justify-center
            px-10
          "
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={data.id}
              variants={ANIMATIONS.visual(isLeft)}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center"
            >

              {/* Small number */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                }}
                className="
                  mb-4
                  font-mono
                  text-xs
                  tracking-[0.35em]
                  text-white/40
                "
              >
                {isLeft ? '01' : '02'}
              </motion.div>

              {/* Main title */}
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.6,
                }}
                className="
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-4xl
                  md:text-5xl
                "
              >
                {isLeft ? (
                  <>
                    Starting
                    <br />
                    Point
                  </>
                ) : (
                  <>
                    The
                    <br />
                    Vision
                  </>
                )}
              </motion.h3>

              {/* Animated line */}
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: '55%',
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mx-auto mt-5 h-px bg-white/30"
              />

            </motion.div>

          </AnimatePresence>

        </motion.div>
      </div>

      {/* Status */}
      <motion.div
        layout="position"
        className="
          absolute
          -bottom-6
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            px-4
            py-2
            text-[10px]
            uppercase
            tracking-[0.2em]
            backdrop-blur
          "
          style={{
            borderColor: `${PALETTE.text}20`,
            backgroundColor: 'rgba(211,214,226,0.75)',
            color: PALETTE.text,
          }}
        >
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{
              backgroundColor: isLeft
                ? PALETTE.text
                : '#293A82',
            }}
          />

          {isLeft ? 'CURRENT STATE' : 'FUTURE STATE'}
        </div>
      </motion.div>

    </motion.div>
  );
}

// =========================================
// 5. COMPARISON STORY
// =========================================

function ComparisonStory({ data, isLeft }) {
  return (
    <motion.div
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full"
    >

      <div className="mb-6 flex items-center gap-3">

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: 42,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="h-px"
          style={{
            backgroundColor: PALETTE.text,
          }}
        />

        <motion.span
          variants={ANIMATIONS.item(isLeft)}
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.22em]
            opacity-50
          "
          style={{
            color: PALETTE.text,
          }}
        >
          {isLeft
            ? 'THE STARTING POINT'
            : 'THE TRANSFORMATION'}
        </motion.span>

      </div>

      <div className="space-y-3">

        {data.comparison.map((item, index) => (

          <motion.div
            key={item.big}
            variants={ANIMATIONS.comparison(isLeft)}
            custom={index}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              p-5
              transition-all
              duration-500
              hover:-translate-y-1
            "
            style={{
              borderColor: `${PALETTE.text}18`,
              backgroundColor: 'rgba(255,255,255,0.22)',
            }}
          >

            {/* Hover line */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileHover={{
                scaleX: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                absolute
                inset-x-0
                bottom-0
                h-0.5
                origin-left
              "
              style={{
                backgroundColor: isLeft
                  ? PALETTE.text
                  : '#293A82',
              }}
            />

            <div className="flex items-start gap-4">

              {/* Number */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="
                  pt-1
                  font-mono
                  text-xs
                  opacity-35
                "
                style={{
                  color: PALETTE.text,
                }}
              >
                0{index + 1}
              </motion.div>

              <div className="min-w-0 flex-1">

                <div
                  className="
                    mb-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    opacity-45
                  "
                  style={{
                    color: PALETTE.text,
                  }}
                >
                  {item.small}
                </div>

                <motion.h4
                  variants={ANIMATIONS.item(isLeft)}
                  className="
                    mb-2
                    text-xl
                    font-semibold
                    tracking-tight
                  "
                  style={{
                    color: PALETTE.text,
                  }}
                >
                  {item.big}
                </motion.h4>

                <motion.p
                  variants={ANIMATIONS.item(isLeft)}
                  className="
                    max-w-md
                    text-sm
                    leading-relaxed
                    opacity-60
                  "
                  style={{
                    color: PALETTE.text,
                  }}
                >
                  {item.text}
                </motion.p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
}

// =========================================
// 6. SWITCHER
// =========================================

function Switcher({ activeId, onToggle }) {
  const options = Object.values(VISION_DATA).map((state) => ({
    id: state.id,
    label: state.label,
  }));

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-6
        z-20
        flex
        justify-center
        sm:bottom-10
      "
    >

      <motion.div
        layout
        className="
          pointer-events-auto
          flex
          items-center
          gap-1
          rounded-full
          border
          p-1.5
          shadow-[0_20px_60px_rgba(55,58,73,0.18)]
          backdrop-blur-2xl
        "
        style={{
          borderColor: `${PALETTE.text}18`,
          backgroundColor: 'rgba(211,214,226,0.72)',
        }}
      >

        {options.map((opt) => (

          <motion.button
            key={opt.id}
            type="button"
            onClick={() => onToggle(opt.id)}
            whileTap={{
              scale: 0.96,
            }}
            className="
              relative
              flex
              h-11
              w-32
              items-center
              justify-center
              rounded-full
              text-sm
              font-medium
              focus:outline-none
              sm:h-12
              sm:w-36
            "
          >

            {activeId === opt.id && (
              <motion.div
                layoutId="vision-switch-surface"
                className="
                  absolute
                  inset-0
                  rounded-full
                  shadow-inner
                "
                style={{
                  backgroundColor: PALETTE.text,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 22,
                }}
              />
            )}

            <span
              className={`
                relative
                z-10
                transition-colors
                duration-300
                ${
                  activeId === opt.id
                    ? 'text-white'
                    : 'text-[#373A49]/50 hover:text-[#373A49]'
                }
              `}
            >
              {opt.label}
            </span>

          </motion.button>

        ))}

      </motion.div>

    </div>
  );
}

// =========================================
// 7. MAIN COMPONENT
// =========================================

export default function VisionShowcase() {

  const [activeId, setActiveId] = useState('start');

  const data = VISION_DATA[activeId];

  const isLeft = activeId === 'start';

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-24
        sm:py-28
      "
      style={{
        backgroundColor: PALETTE.bg,
      }}
    >

{/* =========================================
    STORYTELLING SECTION TITLE
    ========================================= */}

<div className="relative z-10 mx-auto mb-16 flex w-full max-w-6xl flex-col items-center text-center">

  {/* Chapter Label */}
  <div className="flex items-center justify-center gap-3">

    <span
      className="
        font-mono
        text-xs
        font-medium
        tracking-[0.2em]
        opacity-50
      "
      style={{
        color: PALETTE.text,
      }}
    >
      01
    </span>

    <span
      className="h-px w-10 opacity-30"
      style={{
        backgroundColor: PALETTE.text,
      }}
    />

    <span
      className="
        text-md
        font-semibold
        uppercase
        tracking-[0.25em]
        opacity-50
      "
      style={{
        color: PALETTE.text,
      }}
    >
      THE BEGINNING
    </span>

  </div>

  {/* Main Story Title */}
  <h2
    className="
      mt-4
      text-xl
      
      leading-tight
      tracking-tight
      sm:text-4xl
      md:text-5xl
    "
    style={{
      color: PALETTE.text,
    }}
  >
    Where The Journey Began
  </h2>

</div>

      <BackgroundGlow isLeft={isLeft} />

      <div className="relative z-10 mx-auto w-full max-w-6xl pb-20">

        <motion.div
          layout
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.9,
          }}
          className={`
            flex
            flex-col
            items-center
            justify-center
            gap-12
            md:gap-20
            lg:gap-28
            ${
              isLeft
                ? 'md:flex-row'
                : 'md:flex-row-reverse'
            }
          `}
        >

          <StateVisual
            data={data}
            isLeft={isLeft}
          />

          <motion.div
            layout="position"
            className="w-full max-w-md"
          >

            <AnimatePresence
              mode="wait"
              custom={isLeft}
            >

              <motion.div
                key={activeId}
                variants={ANIMATIONS.container}
                initial="hidden"
                animate="visible"
                exit="exit"
              >

                <motion.h3
                  variants={ANIMATIONS.item(isLeft)}
                  className="
                    mb-3
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    opacity-45
                  "
                  style={{
                    color: PALETTE.text,
                  }}
                >
                  {data.eyebrow}
                </motion.h3>

                <motion.h2
                  variants={ANIMATIONS.item(isLeft)}
                  className="
                    mb-5
                    text-3xl
                    font-bold
                    tracking-tight
                    sm:text-4xl
                    md:text-5xl
                  "
                  style={{
                    color: PALETTE.text,
                  }}
                >
                  {data.title}
                </motion.h2>

                <motion.p
                  variants={ANIMATIONS.item(isLeft)}
                  className="
                    mb-8
                    max-w-sm
                    leading-relaxed
                    opacity-60
                  "
                  style={{
                    color: PALETTE.text,
                  }}
                >
                  {data.description}
                </motion.p>

                <ComparisonStory
                  data={data}
                  isLeft={isLeft}
                />

              </motion.div>

            </AnimatePresence>

          </motion.div>

        </motion.div>

      </div>

      <Switcher
        activeId={activeId}
        onToggle={setActiveId}
      />

    </section>
  );
}
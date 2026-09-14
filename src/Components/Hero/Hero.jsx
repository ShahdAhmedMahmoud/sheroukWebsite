// // export default function Hero() {
// //   return (
// //     <section className="relative h-screen w-full overflow-hidden">

// import DimensionalSwitchSlider from "../dimensional-switch-slider/dimensional-switch-slider";

      
// //       {/* Background Video */}
// //       <video
// //         className="absolute inset-0 h-full w-full object-cover"
// //         autoPlay
// //         muted
// //         loop
// //         playsInline
// //       >
// //         <source src="/videos/hero.mp4" type="video/mp4" />
// //       </video>

// //       {/* Dark Overlay */}
// //       <div className="absolute inset-0 bg-black/40" />

// //       {/* Content */}
// //       <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
// //         <div>
// //           <h1 className="text-6xl font-bold tracking-wider md:text-8xl">
// //             AL SHOROUK
// //           </h1>

// //           <p className="mt-4 text-lg tracking-[0.3em] md:text-2xl">
// //             CONSTRUCTION COMPANY
// //           </p>
// //         </div>
// //       </div>

// //     </section>
// //   );
// // }




// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute inset-0 h-full w-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/videos/hero.mp4" type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}
//       <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-4 text-center text-white">
//         <div>
//           <h1 className="text-6xl font-bold tracking-wider md:text-8xl">
//             AL SHOROUK
//           </h1>
//           <p className="mt-4 text-lg tracking-[0.3em] md:text-2xl">
//             CONSTRUCTION COMPANY
//           </p>
//         </div>

//         {/* Projects showcase slider */}
//         <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md md:p-6">
//           <DimensionalSwitchSlider
//             infinite
//             direction="horizontal"
//             autoplay
//             autoplayDelay={2600}
//             textColor="#ffffff"
//             textSize={40}
//             cardWidth={520}
//             cardHeight={320}
//             cardBorderRadius={14}
//             cardClassName="max-md:w-[80vw]! max-md:h-[55vw]!"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



import DimensionalSwitchSlider from "../dimensional-switch-slider/dimensional-switch-slider";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <DimensionalSwitchSlider
        infinite
        direction="horizontal"
        autoplay
        autoplayDelay={3500}
        textColor="#ffffff"
        textSize={64}
        cardWidth="100vw"
        cardHeight="100vh"
        cardBorderRadius={0}
        cardClassName="w-screen! h-screen!"
      />
    </section>
  );
}
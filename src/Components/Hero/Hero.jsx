export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div>
          <h1 className="text-6xl font-bold tracking-wider md:text-8xl">
            AL SHOROUK
          </h1>

          <p className="mt-4 text-lg tracking-[0.3em] md:text-2xl">
            CONSTRUCTION COMPANY
          </p>
        </div>
      </div>

    </section>
  );
}


// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroSection() {
//   const containerRef = useRef(null); // العنصر اللي هيتثبت (pin) وله ارتفاع كبير عشان يدّي "مساحة سكرول"
//   const videoRef = useRef(null);

//   useGSAP(
//     () => {
//       const video = videoRef.current;

//       // لازم ننتظر الفيديو "يعرف" مدته الكاملة قبل ما نربطه بالسكرول
//       const setupScrub = () => {
//         ScrollTrigger.create({
//           trigger: containerRef.current,
//           start: "top top", // يبدأ التثبيت لما أول الـ container يوصل لأول الشاشة
//           end: "bottom bottom", // يخلص لما آخر الـ container يوصل لآخر الشاشة
//           pin: true, // ده اللي بيخلي الفيديو "يتلزّق" مكانه وانتي بتسكرولي حواليه
//           scrub: 1, // بيربط تقدّم الأنيميشن بتقدّم السكرول (الرقم 1 بيدّي نعومة بسيطة في التتبع)
//           onUpdate: (self) => {
//             // self.progress رقم من 0 إلى 1 بيمثل "قد إيه احنا واصلين في السكرول"
//             if (video.duration) {
//               video.currentTime = self.progress * video.duration;
//             }
//           },
//         });
//       };

//       if (video.readyState >= 1) {
//         // الفيديو بالفعل عارف مدته (لو كان اتحمّل بسرعة)
//         setupScrub();
//       } else {
//         // لسه بيحمّل - ننتظر الحدث ده قبل ما نبدأ
//         video.addEventListener("loadedmetadata", setupScrub);
//       }

//       return () => {
//         video.removeEventListener("loadedmetadata", setupScrub);
//       };
//     },
//     { scope: containerRef }
//   );

//   return (
//     // h-[400vh] معناها الـ container ده طوله 4 أضعاف الشاشة - ده اللي بيدّي "مساحة" كافية للسكرول
//     // يتحرك فيها الفيديو فريم فريم من الأول للآخر، بدل ما يخلص من أول سكرولة
//     <div ref={containerRef} className="relative h-[400vh]">
//       <div className="sticky top-0 h-screen w-full overflow-hidden">
//         <video
//           ref={videoRef}
//           src="public\videos\hero.mp4"
//           muted
//           playsInline
//           preload="auto"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* طبقة نص فوق الفيديو */}
//         <div className="absolute inset-0 bg-[#1E2432]/30 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-white text-5xl font-bold mb-4">
//            AL SHOROUK C
//           </h1>
//           {/* <p className="text-white text-lg max-w-xl">
//             شركة الشروق للمقاولات - من الرؤية إلى الواقع
//           </p> */}
//         </div>
//       </div>
//     </div>
//   );
// }
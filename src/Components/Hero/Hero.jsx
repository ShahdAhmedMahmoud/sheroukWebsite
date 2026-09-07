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
            SHOROUQ
          </h1>

          <p className="mt-4 text-lg tracking-[0.3em] md:text-2xl">
            GENERAL CONTRACTING & SUPPLIES
          </p>
        </div>
      </div>

    </section>
  );
}
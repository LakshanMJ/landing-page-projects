import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────
   LAYER: Background Mountains
───────────────────────────────────────────── */
function LayerBackground({ scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <motion.div className="absolute inset-0 w-full h-full" style={{ y, scale }}>
      <img
        src="/assets/mountains-bg.webp"
        alt="Mountain background"
        className="w-full h-full object-cover object-center"
        draggable={false}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   LAYER: Foreground — Man + Rock
───────────────────────────────────────────── */
function LayerForeground({ scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    // <motion.div
    //   className="absolute bottom-0 left-0 w-full flex  items-end pointer-events-none"
    //   style={{ y }}
    // >
    //   <img
    //     src="/assets/man.png"
    //     alt="Man standing on rock"
    //     className="w-auto max-h-[85vh] object-contain object-bottom select-none"
    //     draggable={false}
    //     style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.7))" }}
    //   />
    // </motion.div>

    <motion.div
  className="absolute bottom-0 left-20 w-full flex items-end pointer-events-none"
  style={{ 
    y,
    // Adding a slight scale here makes him feel much larger without breaking the layout
    scale: 1.1, 
    transformOrigin: "bottom center" 
  }}
>
  <img
    src="/assets/man.png"
    alt="Man standing on rock"
    /* Increased max-h from 85vh to 100vh */
    className="w-auto max-h-[100vh] md:max-h-[110vh] object-contain object-bottom select-none"
    draggable={false}
    style={{ 
      filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.8))",
      // Adding a slight negative margin-bottom can help seat him 
      // deeper into the "fog" if he's floating
      marginBottom: "-20px" 
    }}
  />
</motion.div>
  );
}

/* ─────────────────────────────────────────────
   LAYER: Bottom Fog Blur
───────────────────────────────────────────── */
function LayerBottomFog({ scrollYProgress }) {
  const blurPx = useTransform(scrollYProgress, [0, 1], [10, 20]);
  const backdropBlur = useTransform(blurPx, (v) => `blur(${v.toFixed(1)}px)`);

  // Use the exact hex #0c0c0e to ensure the blend is invisible
  const darkOpacity = useTransform(scrollYProgress, [0.4, 1], [0.7, 1]);
  const darkGradient = useTransform(
    darkOpacity,
    (v) =>
      `linear-gradient(to top, rgba(12,12,14,${v}) 0%, rgba(12,12,14,0.4) 50%, transparent 100%)`
  );

  return (
    <motion.div
      aria-hidden
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      style={{
        height: "35vh", // Increased height for a deeper cinematic blend
        zIndex: 30,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
        maskImage: "linear-gradient(to top, black 20%, rgba(0,0,0,0.5) 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 20%, rgba(0,0,0,0.5) 60%, transparent 100%)",
      }}
    >
      <motion.div className="absolute inset-0" style={{ background: darkGradient }} />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   LAYER: Text / UI
───────────────────────────────────────────── */
function LayerText({ scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      style={{ y, opacity, zIndex: 40 }}
    >
      <p className="uppercase tracking-[0.35em] text-xs text-white/60 mb-5 font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Explore the World
      </p>
      <h1 className="text-white leading-none mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(3rem, 9vw, 8rem)" }}>
        Beyond <br /> <span style={{ fontStyle: "italic", fontWeight: 400 }}>the Horizon</span>
      </h1>
      <button className="group relative overflow-hidden border border-white/40 text-white px-10 py-4 text-sm uppercase tracking-widest transition-all duration-500 hover:border-white">
        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Begin Your Journey</span>
        <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </button>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   HERO — Root Component
───────────────────────────────────────────── */
export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#0c0c0e]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Cormorant+Garamond:wght@300;400;500&display=swap');
      `}</style>

      {/* STICKY VIEWPORT FRAME */}
      <motion.section
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ 
          opacity: heroOpacity,
          // FEATHER THE BOTTOM OF THE ENTIRE HERO FRAME
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
        }}
      >
        {/* Background Layer */}
        <LayerBackground scrollYProgress={scrollYProgress} />

        {/* Global Dark Vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0c0c0e 0%, transparent 40%, rgba(0,0,0,0.4) 100%)",
          }}
        />

        {/* Foreground Layer */}
        <LayerForeground scrollYProgress={scrollYProgress} />

        {/* Fog/Blur Transition Layer */}
        <LayerBottomFog scrollYProgress={scrollYProgress} />

        {/* UI Layer */}
        <LayerText scrollYProgress={scrollYProgress} />
      </motion.section>

      {/* THE NEXT SECTION (THE ONE YOU WANT BLENDED) */}
      <section className="relative z-20 h-screen flex items-center justify-center bg-[#0c0c0e]">
        <div className="text-center px-6">
          <p className="text-white/30 uppercase tracking-[0.4em] text-xs mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Adventure Awaits
          </p>
          <h2 className="text-white/90 text-5xl md:text-7xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Choose Your <br /> <em style={{ fontWeight: 400 }}>Expedition</em>
          </h2>
        </div>
      </section>
    </div>
  );
}
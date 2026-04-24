import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // TEXT animation
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textX = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // BACKGROUND (mountains far)
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // FOREGROUND (man + rock)
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Blur fade
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  return (
    <section ref={ref} className="h-[200vh] relative">
      
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background Mountains */}
        <motion.img
          src="/mountains-bg.jpg"
          style={{ y: bgY }}
          className="absolute w-full h-full object-cover"
        />

        {/* Foreground (man + rock) */}
        <motion.img
          src="/foreground.png"
          style={{ y: fgY }}
          className="absolute w-full h-full object-cover"
        />

        {/* Text */}
        <motion.div
          style={{
            y: textY,
            x: textX,
            opacity: textOpacity
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <h1 className="text-6xl font-light tracking-wide">
            EXPLORE THE WORLD
          </h1>
          <p className="mt-4 text-lg opacity-80">
            Discover hidden destinations
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 rounded">
            Learn More
          </button>
        </motion.div>

        {/* Blur overlay */}
        <motion.div
          style={{ backdropFilter: `blur(${blur}px)`, opacity }}
          className="absolute inset-0"
        />
      </div>
    </section>
  );
}
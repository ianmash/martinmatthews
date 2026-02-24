import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-stone-display text-gold-light text-sm md:text-base tracking-[0.2em] mb-6"
        >
          Ireland's Ancient East · Kilkenny
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
        >
          Stories in Stone
        </motion.h1>

        <div className="celtic-divider !my-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-xl md:text-2xl text-mist leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Connect with Kilkenny stone through story, craft and local heritage
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#experiences"
            className="inline-block px-8 py-4 bg-gold text-earth font-display text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300 rounded-sm"
          >
            Book an Experience
          </a>
          <a
            href="#about"
            className="inline-block px-8 py-4 border border-stone-light text-mist font-display text-sm tracking-[0.15em] uppercase hover:bg-primary-foreground/10 transition-colors duration-300 rounded-sm"
          >
            Discover More
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-stone-light animate-bounce block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

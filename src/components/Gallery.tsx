import { motion } from "framer-motion";
import stoneWork5 from "@/assets/stone-work-5.jpg";
import stoneWork6 from "@/assets/stone-work-6.jpg";
import stoneWork3 from "@/assets/stone-work-3.jpg";

const images = [stoneWork5, stoneWork6, stoneWork3];

const Gallery = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-stone-display text-gold text-xs tracking-[0.2em] mb-4">
          The Workshop
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Gallery
        </h2>
        <div className="celtic-divider" />

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="overflow-hidden rounded-sm"
            >
              <img
                src={src}
                alt={`Stone crafting workshop ${i + 1}`}
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

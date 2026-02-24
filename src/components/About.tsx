import { motion } from "framer-motion";
import stoneWork1 from "@/assets/stone-work-1.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={stoneWork1}
              alt="Martin Matthews working with Kilkenny stone"
              className="w-full h-[500px] object-cover rounded-sm"
              style={{ boxShadow: "var(--shadow-elevated)" }}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-stone-display text-gold text-xs tracking-[0.2em] mb-4">
              The Craft
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-snug">
              A Kilkenny Stone Experience
            </h2>
            <div className="celtic-divider !mx-0" />
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Martin Matthews offers a Kilkenny-based stone experience that connects visitors with
              local heritage through story, craft, and the living presence of the land. Working
              slowly and respectfully with locally sourced stone, Martin shares the traditions of
              Kilkenny's stone culture—quarries, craftspeople, sayings, and lore—bringing place and
              history to life in a grounded, personal way.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Guests take part in a hands-on, low-impact session using simple carving techniques and
              traditional tools, learning through touch and attention. The experience is warm and
              gently mystical, blending Irish craftsmanship with reflection, nature, and a meaningful
              keepsake to bring home.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Authentic Craft",
    description: "Traditional stone cutting with local flagstone sourced within 300 metres",
    icon: "◆",
  },
  {
    title: "Storytelling & Connection",
    description: "Heritage of stone, voice of the land, and shared stories of Kilkenny",
    icon: "◇",
  },
  {
    title: "Hands-On Experience",
    description: "Simple carving techniques, learning through touch and attention",
    icon: "◆",
  },
  {
    title: "Sustainability",
    description: "Low-impact practice honouring the land with locally sourced materials",
    icon: "◇",
  },
  {
    title: "Mystical Welcome",
    description: "A gentle, personal experience infused with the spirit of Kilkenny",
    icon: "◆",
  },
  {
    title: "Keepsake",
    description: "Take home a meaningful memento crafted by your own hands",
    icon: "◇",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Highlights = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-stone-display text-gold text-xs tracking-[0.2em] mb-4">
          What Awaits
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Highlights
        </h2>
        <div className="celtic-divider" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={item}
              className="card-stone p-8 rounded-sm text-center"
            >
              <span className="text-gold text-2xl">{h.icon}</span>
              <h3 className="font-display text-lg text-foreground mt-4 mb-3">{h.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;

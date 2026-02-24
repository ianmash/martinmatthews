import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-stone-display text-gold text-xs tracking-[0.2em] mb-4">
          Find Us
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Get in Touch
        </h2>
        <div className="celtic-divider" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          <div className="card-stone p-8 rounded-sm text-center">
            <Phone className="w-5 h-5 text-gold mx-auto mb-4" />
            <h3 className="font-display text-sm tracking-[0.1em] uppercase text-foreground mb-2">Phone</h3>
            <a href="tel:+3530878551000" className="font-body text-muted-foreground hover:text-gold transition-colors">
              +353 (0) 87 855 1000
            </a>
          </div>

          <div className="card-stone p-8 rounded-sm text-center">
            <Mail className="w-5 h-5 text-gold mx-auto mb-4" />
            <h3 className="font-display text-sm tracking-[0.1em] uppercase text-foreground mb-2">Email</h3>
            <a href="mailto:mrtnmatthews@gmail.com" className="font-body text-muted-foreground hover:text-gold transition-colors">
              mrtnmatthews@gmail.com
            </a>
          </div>

          <div className="card-stone p-8 rounded-sm text-center sm:col-span-2 lg:col-span-1">
            <MapPin className="w-5 h-5 text-gold mx-auto mb-4" />
            <h3 className="font-display text-sm tracking-[0.1em] uppercase text-foreground mb-2">Location</h3>
            <p className="font-body text-muted-foreground">Kilkenny, Ireland</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Eircode: R95WV34</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mt-12 font-body text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" />
            <span>Season: May – September</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-gold" />
            <span>Free parking available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

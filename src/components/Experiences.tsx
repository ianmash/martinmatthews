import { useState } from "react";
import { motion } from "framer-motion";

const scheduledDates = [
  { date: "June 14, 2026", day: "Saturday", spotsLeft: 4 },
  { date: "June 28, 2026", day: "Saturday", spotsLeft: 6 },
  { date: "July 12, 2026", day: "Saturday", spotsLeft: 8 },
  { date: "July 26, 2026", day: "Saturday", spotsLeft: 5 },
  { date: "August 9, 2026", day: "Saturday", spotsLeft: 7 },
  { date: "August 23, 2026", day: "Saturday", spotsLeft: 8 },
];

const inclusions = [
  "Storytelling, folklore and mythology",
  "Stone demonstration",
  "Introduction to traditional tools",
  "Insights into heritage and stone in Kilkenny",
  "Slate, limestone and flagstone insights",
  "Beautiful scenery",
  "Memento keepsake to take home",
];

const Experiences = () => {
  const [activeTab, setActiveTab] = useState<"scheduled" | "private">("scheduled");
  const [privateForm, setPrivateForm] = useState({ name: "", email: "", date: "", guests: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handlePrivateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    const subject = encodeURIComponent(`Private Stone Experience Enquiry from ${privateForm.name}`);
    const body = encodeURIComponent(
      `Name: ${privateForm.name}\nEmail: ${privateForm.email}\nPreferred Date: ${privateForm.date}\nNumber of Guests: ${privateForm.guests}\n\nMessage:\n${privateForm.message}`
    );
    
    window.location.href = `mailto:mrtnmatthews@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }, 1000);
  };

  return (
    <section id="experiences" className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-stone-display text-gold text-xs tracking-[0.2em] mb-4">
            Book Your Journey
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Stories in Stone
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            A Kilkenny Craft Experience · 2 Hours · €80 per person
          </p>
          <div className="celtic-divider" />
        </div>

        {/* Inclusions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-stone rounded-sm p-8 mb-12"
        >
          <h3 className="font-display text-xl text-foreground mb-6 text-center">What's Included</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {inclusions.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-gold mt-1 text-sm">✦</span>
                <span className="font-body text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-10">
          <button
            onClick={() => setActiveTab("scheduled")}
            className={`px-6 py-3 font-display text-sm tracking-[0.1em] uppercase transition-colors duration-300 rounded-sm ${
              activeTab === "scheduled"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            Scheduled Dates
          </button>
          <button
            onClick={() => setActiveTab("private")}
            className={`px-6 py-3 font-display text-sm tracking-[0.1em] uppercase transition-colors duration-300 rounded-sm ${
              activeTab === "private"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            Private Experience
          </button>
        </div>

        {/* Scheduled Dates */}
        {activeTab === "scheduled" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            {scheduledDates.map((d) => (
              <div
                key={d.date}
                className="card-stone rounded-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <p className="font-display text-foreground text-lg">{d.date}</p>
                  <p className="font-body text-muted-foreground">{d.day} · 10:00 AM · 2 Hours</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-body text-moss text-sm">{d.spotsLeft} spots left</span>
                  <a
                    href={`mailto:mrtnmatthews@gmail.com?subject=${encodeURIComponent(`Booking: ${d.date} - Stories in Stone`)}&body=${encodeURIComponent(`Hi Martin,\n\nI'd like to book a spot for the Stories in Stone experience on ${d.date}.\n\nPlease let me know availability and next steps.\n\nThank you!`)}`}
                    className="px-6 py-2 bg-gold text-earth font-display text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300 rounded-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
            <p className="text-center font-body text-sm text-muted-foreground mt-6">
              Season: May to September · 4–8 guests per session
            </p>
          </motion.div>
        )}

        {/* Private Experience Form */}
        {activeTab === "private" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-stone rounded-sm p-8 max-w-2xl mx-auto"
          >
            <p className="font-body text-muted-foreground text-center mb-8">
              Book a private experience for yourself or a small group.
            </p>

            <form onSubmit={handlePrivateSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-display text-xs tracking-[0.1em] uppercase text-foreground block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={privateForm.name}
                    onChange={(e) => setPrivateForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="font-display text-xs tracking-[0.1em] uppercase text-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={privateForm.email}
                    onChange={(e) => setPrivateForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-display text-xs tracking-[0.1em] uppercase text-foreground block mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={privateForm.date}
                    onChange={(e) => setPrivateForm((p) => ({ ...p, date: e.target.value }))}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="font-display text-xs tracking-[0.1em] uppercase text-foreground block mb-2">
                    Number of Guests
                  </label>
                  <select
                    required
                    value={privateForm.guests}
                    onChange={(e) => setPrivateForm((p) => ({ ...p, guests: e.target.value }))}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="">Select</option>
                    {[4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} guests</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="font-display text-xs tracking-[0.1em] uppercase text-foreground block mb-2">
                  Message (optional)
                </label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  value={privateForm.message}
                  onChange={(e) => setPrivateForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full px-8 py-4 bg-gold text-earth font-display text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300 rounded-sm disabled:opacity-50"
              >
                {sending ? "Opening Email..." : sent ? "Email Client Opened ✓" : "Enquire Now"}
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experiences;

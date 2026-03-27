import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "kalburgi81@gmail.com", href: "mailto:kalburgi81@gmail.com" },
  { icon: Phone, label: "Phone", value: "+358 408147060", href: "tel:+358408147060" },
  { icon: Linkedin, label: "LinkedIn", value: "LinkedIn", href: "https://www.linkedin.com/in/prithviraj-kalburgi/", external: true },
  { icon: Github, label: "GitHub", value: "GitHub", href: "https://github.com/PrithvirajKalburgi", external: true },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // mailto fallback
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:kalburgi81@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 relative section-alt" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 group min-w-0"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                  <c.icon className="text-primary" size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">{c.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors truncate">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Message form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 space-y-5"
          >
            <h3 className="text-foreground font-bold text-lg mb-2">Leave a Message</h3>
            <div>
              <label className="text-muted-foreground text-sm block mb-2">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-muted-foreground text-sm block mb-2">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-muted-foreground text-sm block mb-2">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/50"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-3 font-medium hover:opacity-90 transition-all glow-teal disabled:opacity-50"
            >
              <Send size={16} />
              {sent ? "Message Sent!" : sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Prithviraj Kalburgi. Built with passion.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

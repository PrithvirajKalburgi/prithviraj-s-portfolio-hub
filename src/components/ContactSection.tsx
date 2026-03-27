import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "kalburgi81@gmail.com", href: "mailto:kalburgi81@gmail.com" },
  { icon: Phone, label: "Phone", value: "+358 408147060", href: "tel:+358408147060" },
  { icon: Linkedin, label: "LinkedIn", value: "LinkedIn", href: "https://www.linkedin.com/in/prithviraj-kalburgi/", external: true },
  { icon: Github, label: "GitHub", value: "GitHub", href: "https://github.com/PrithvirajKalburgi", external: true },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative grid-bg" ref={ref}>
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-primary text-sm tracking-[0.3em] uppercase mb-4 text-center"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <c.icon className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">{c.label}</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">{c.value}</p>
              </div>
            </motion.a>
          ))}
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

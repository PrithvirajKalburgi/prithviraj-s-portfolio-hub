import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          The <span className="text-gradient">Engineer</span>{" "}
          <span className="text-gradient-warm">Behind the Code</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 card-glow"
        >
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Hi there! I'm an enthusiastic and passionate Software Engineer with
            a strong interest in developing innovative solutions that make a
            real impact. As a recent graduate from{" "}
            <span className="text-foreground font-medium">
              Tampere University of Applied Sciences
            </span>{" "}
            with a bachelor's in Software Engineering, I've built a solid
            foundation in programming across multiple languages and gained
            in-depth technical knowledge in various tech domains.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            My core interests lie in{" "}
            <span className="text-primary font-medium">
              Artificial Intelligence
            </span>
            , <span className="text-primary font-medium">Machine Learning</span>
            , and <span className="text-primary font-medium">Data Science</span>
            . Through academic projects, research, and practical applications,
            I've developed a deeper understanding of these fields and love
            working on problems that challenge me to think critically and
            creatively.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Beyond my technical skills, I'm an outgoing person who loves
            collaborative work—sharing perspectives and ideas while gaining new
            ones. I'm open-minded, hardworking, and someone who likes to go
            above and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

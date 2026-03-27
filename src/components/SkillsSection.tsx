import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Full Stack",
    skills: ["React", "REST API", "Node.js", "Express"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "Bash"],
  },
  {
    title: "Automation & Testing",
    skills: ["Git CI/CD", "Docker", "JUnit"],
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Azure"],
  },
  {
    title: "Data Engineering & Analytics",
    skills: ["Luigi (ETL)", "AirByte", "Dagster", "Apache Kafka", "Tableau", "Pandas", "NumPy"],
  },
  {
    title: "AI / ML",
    skills: ["Sentence Transformers", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    title: "Version Control",
    skills: ["Git"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient-warm">My</span> <span className="text-gradient">Tech Stack</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group card-glow"
            >
              <h3 className="text-foreground font-semibold text-lg mb-4 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-muted-foreground text-sm rounded-lg border border-border/50 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

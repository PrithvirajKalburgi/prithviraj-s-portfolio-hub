import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2024",
    role: "Software Engineer Intern",
    company: "Company Name",
    description: [
      "Developed and maintained full-stack applications using React and Node.js.",
      "Collaborated with cross-functional teams to deliver production-ready features.",
      "Implemented CI/CD pipelines using Docker and AWS services.",
    ],
  },
  {
    period: "2023 – 2024",
    role: "Data Engineering Intern",
    company: "Company Name",
    description: [
      "Built ETL pipelines using Dagster and Apache Kafka for real-time data processing.",
      "Designed data models and analytics dashboards with Tableau and Pandas.",
      "Automated data workflows reducing manual processing time by 60%.",
    ],
  },
  {
    period: "2020 – 2024",
    role: "Bachelor's in Software Engineering",
    company: "Tampere University of Applied Sciences (TAMK)",
    description: [
      "Focused on AI/ML, data science, and full-stack development coursework.",
      "Completed thesis project on machine learning applications.",
      "Participated in hackathons and collaborative software projects.",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40, y: 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative pl-16 md:pl-20"
    >
      {/* Timeline dot */}
      <div className="absolute left-3.5 md:left-5.5 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
        <Briefcase size={10} className="text-primary" />
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group card-glow">
        <span className="text-primary text-xs font-medium tracking-wider uppercase">
          {exp.period}
        </span>
        <h3 className="text-foreground text-xl font-bold mt-2 group-hover:text-primary transition-colors">
          {exp.role}
        </h3>
        <p className="text-muted-foreground text-sm mt-1 mb-4">{exp.company}</p>
        <ul className="space-y-2">
          {exp.description.map((desc, j) => (
            <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient-warm">Work</span> <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

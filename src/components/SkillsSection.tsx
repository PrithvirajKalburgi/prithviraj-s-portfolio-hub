import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiReact, SiNodedotjs, SiExpress,
  SiPython, SiJavascript, SiTypescript, SiCplusplus,
  SiHtml5, SiGnubash,
  SiDocker, SiJunit5, SiGithubactions,
  SiApachekafka, SiPandas, SiNumpy,
  SiTensorflow, SiPytorch, SiScikitlearn,
  SiGit,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { TbApi, TbTransform, TbBrain } from "react-icons/tb";
import {
  Code2, Layers, TestTube, Cloud, Database, Brain, GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    id: "fullstack",
    title: "Full Stack",
    icon: Layers,
    skills: [
      { name: "React", icon: SiReact },
      { name: "REST API", icon: TbApi },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML/CSS", icon: SiHtml5 },
      { name: "SQL", icon: FaDatabase },
      { name: "Bash", icon: SiGnubash },
    ],
  },
  {
    id: "automation",
    title: "Automation & Testing",
    icon: TestTube,
    skills: [
      { name: "Git CI/CD", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "JUnit", icon: SiJunit5 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud },
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    icon: Database,
    skills: [
      { name: "Luigi (ETL)", icon: TbTransform },
      { name: "AirByte", icon: TbTransform },
      { name: "Dagster", icon: SiDagster },
      { name: "Apache Kafka", icon: SiApachekafka },
      { name: "Tableau", icon: SiTableau },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    icon: Brain,
    skills: [
      { name: "Sentence Transformers", icon: TbBrain },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ],
  },
  {
    id: "vcs",
    title: "Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git", icon: SiGit },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const activeCat = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient-warm">My</span>{" "}
          <span className="text-gradient">Tech Stack</span>
        </motion.h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.06 }}
                onClick={() =>
                  setActiveCategory(isActive ? null : cat.id)
                }
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary/20 border-primary text-primary shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <Icon size={16} />
                {cat.title}
              </motion.button>
            );
          })}
        </div>

        {/* Expanded skill display */}
        <AnimatePresence mode="wait">
          {activeCat && (
            <motion.div
              key={activeCat.id}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto py-4">
                {activeCat.skills.map((skill, i) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col items-center gap-2 p-4 w-24 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300 group"
                    >
                      <SkillIcon
                        size={28}
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                      />
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;

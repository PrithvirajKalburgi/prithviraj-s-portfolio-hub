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
import { FaJava, FaDatabase, FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { TbApi, TbTransform, TbBrain } from "react-icons/tb";

const skillCategories = [
  {
    id: "fullstack",
    title: "Full Stack",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "REST API", icon: TbApi, color: "#00B982" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
      { name: "SQL", icon: FaDatabase, color: "#00B982" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    ],
  },
  {
    id: "automation",
    title: "Automation & Testing",
    skills: [
      { name: "Git CI/CD", icon: SiGithubactions, color: "#2088FF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "JUnit", icon: SiJunit5, color: "#25A162" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Azure", icon: VscAzure, color: "#0078D4" },
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    skills: [
      { name: "Luigi (ETL)", icon: TbTransform, color: "#00B982" },
      { name: "AirByte", icon: TbTransform, color: "#615EFF" },
      { name: "Dagster", icon: TbTransform, color: "#4F43DD" },
      { name: "Apache Kafka", icon: SiApachekafka, color: "#231F20" },
      { name: "Tableau", icon: FaDatabase, color: "#E97627" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    skills: [
      { name: "Sentence Transformers", icon: TbBrain, color: "#FF6F00" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    ],
  },
  {
    id: "vcs",
    title: "Version Control",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("fullstack");

  const activeCat = skillCategories.find((c) => c.id === activeCategory)!;

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

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-5xl mx-auto mb-12"
        >
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 md:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-primary shadow-[0_0_20px_-3px_hsl(var(--primary)/0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {activeCat.skills.map((skill, i) => {
                const SkillIcon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 card-glow cursor-default"
                  >
                    <SkillIcon
                      size={36}
                      style={{ color: skill.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scrolling marquee of all skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 overflow-hidden relative max-w-5xl mx-auto"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap gap-6">
            {[...skillCategories.flatMap((c) => c.skills), ...skillCategories.flatMap((c) => c.skills)].map(
              (skill, i) => {
                const SkillIcon = skill.icon;
                return (
                  <div
                    key={`${skill.name}-${i}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-muted-foreground text-xs font-medium flex-shrink-0"
                  >
                    <SkillIcon size={14} style={{ color: skill.color }} />
                    {skill.name}
                  </div>
                );
              }
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

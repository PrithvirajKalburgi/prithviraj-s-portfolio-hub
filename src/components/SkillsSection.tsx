import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
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
    id: "fullstack",
    title: "Full Stack",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "REST API", icon: TbApi, color: "#05e7a3" },
      { name: "Node.js", icon: SiNodedotjs, color: "#44c344" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
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
      { name: "Apache Kafka", icon: SiApachekafka, color: "#dc0f42" },
      { name: "Tableau", icon: FaDatabase, color: "#E97627" },
      { name: "Pandas", icon: SiPandas, color: "#2d08c1" },
      { name: "NumPy", icon: SiNumpy, color: "#1092bd" },
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

const codeSnippets = [
  'const app = express();',
  'import torch',
  'git commit -m "deploy"',
  'SELECT * FROM users;',
  'docker build -t app .',
  'npm run build',
  'python train.py --epochs 50',
  'kubectl apply -f deploy.yaml',
  'aws s3 sync . s3://bucket',
  'const model = tf.sequential();',
  'pip install scikit-learn',
  'javac Main.java && java Main',
  'CREATE TABLE skills (...);',
  'from kafka import Consumer',
  'def predict(X): return model(X)',
  'git push origin main',
  'curl -X POST /api/v1/data',
  'export default function App()',
  'console.log("Hello World")',
  'chmod +x deploy.sh && ./deploy.sh',
];

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const fontSize = 13;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -50);
    const snippetChars: string[] = [];

    for (const s of codeSnippets) {
      for (const c of s) snippetChars.push(c);
    }

    let animId: number;
    const render = () => {
      ctx.fillStyle = "rgba(10, 15, 28, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = snippetChars[Math.floor(Math.random() * snippetChars.length)];
        const y = drops[i] * fontSize;
        const opacity = Math.max(0, 1 - y / canvas.height);

        ctx.fillStyle = `rgba(0, 185, 130, ${opacity * 0.7})`;
        ctx.font = `${fontSize}px "SF Mono", "Fira Code", monospace`;
        ctx.fillText(char, i * fontSize, y);

        // Brighter leading character
        if (Math.random() > 0.95) {
          ctx.fillStyle = `rgba(0, 255, 180, ${opacity})`;
          ctx.fillText(char, i * fontSize, y);
        }

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.4 + Math.random() * 0.3;
      }
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const cleanup = draw();
    const handleResize = () => draw();
    window.addEventListener("resize", handleResize);
    return () => {
      cleanup?.();
      window.removeEventListener("resize", handleResize);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.5) 60%, transparent 100%)" }}
    />
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("fullstack");

  const activeCat = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Bottom fade to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20">
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

        {/* Skills grid - centered with flex */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {activeCat.skills.map((skill, i) => {
                const SkillIcon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex flex-col items-center gap-3 p-5 w-28 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 card-glow cursor-default"
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
      </div>
    </section>
  );
};

export default SkillsSection;

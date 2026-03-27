import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Download } from "lucide-react";
import ConstellationBackground from "./ConstellationBackground";

const roles = [
  "Software Engineer",
  "Student",
  "Passionate about Data",
  "AI Enthusiast",
  "ML Explorer",
];

const TypingAnimation = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="text-primary text-lg md:text-2xl font-medium">
      {text}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

const InteractiveCodeBlock = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
  const rotateY = useTransform(mouseX, [-150, 150], [-8, 8]);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
      }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex-1 max-w-lg w-full cursor-pointer"
    >
      <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-auto text-xs text-muted-foreground">portfolio.ts</span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed">
          <Line n={1}><Kw>const</Kw> <Var>developer</Var> = {"{"}</Line>
          <Line n={2}>  name: <Str>'Prithviraj Kalburgi'</Str>,</Line>
          <Line n={3}>  degree: <Str>'B.Eng Software Engineering'</Str>,</Line>
          <Line n={4}>  university: <Str>'TAMK'</Str>,</Line>
          <Line n={5}>  skills: [<Str>'React'</Str>, <Str>'Python'</Str>, <Str>'AI/ML'</Str>],</Line>
          <Line n={6}>  passionate: <Kw>true</Kw>,</Line>
          <Line n={7}>  motto: <Str>"Build with Impact"</Str></Line>
          <Line n={8}>{"}"};</Line>
          <Line n={9}> </Line>
          <Line n={10}><Var>developer</Var>.<Fn>create</Fn>();</Line>
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ConstellationBackground />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 pt-24">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            <span className="text-gradient-subtle">Hi, I'm</span>{" "}
            <span className="text-gradient">Prithviraj</span>
            <br />
            <span className="text-gradient-subtle">Kalburgi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="h-10 mb-8"
          >
            <TypingAnimation />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all glow-teal"
            >
              <Download size={18} />
              My CV
            </a>
          </motion.div>
        </div>

        <InteractiveCodeBlock />
      </div>
    </section>
  );
};

const Line = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <div className="flex">
    <span className="text-muted-foreground/40 w-8 select-none">{String(n).padStart(2, "0")}</span>
    <span>{children}</span>
  </div>
);
const Kw = ({ children }: { children: React.ReactNode }) => <span className="text-primary">{children}</span>;
const Str = ({ children }: { children: React.ReactNode }) => <span className="text-green-400">{children}</span>;
const Var = ({ children }: { children: React.ReactNode }) => <span className="text-foreground">{children}</span>;
const Fn = ({ children }: { children: React.ReactNode }) => <span className="text-yellow-400">{children}</span>;

export default HeroSection;

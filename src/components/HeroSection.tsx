import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative grid-bg overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 pt-24">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Prithviraj</span>
            <br />
            Kalburgi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg max-w-xl mb-8 mx-auto lg:mx-0"
          >
            Building innovative solutions with a passion for AI, Machine Learning, and Full-Stack Development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all glow-teal"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-all"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Right - Code block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex-1 max-w-lg w-full"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
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

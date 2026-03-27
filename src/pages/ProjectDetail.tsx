import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/components/ProjectsSection";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid-bg py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{project.title}</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1.5 bg-secondary text-sm text-muted-foreground rounded-lg border border-border/50">
                {t}
              </span>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all glow-teal"
          >
            View on GitHub <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

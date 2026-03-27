import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  github: string;
}

export const projects: Project[] = [
  {
    id: "ai-sentiment-analysis",
    title: "AI Sentiment Analysis",
    summary: "NLP-based sentiment analysis tool using transformer models.",
    description: "A comprehensive sentiment analysis application built with Python, leveraging Sentence Transformers and Scikit-learn to classify text sentiment in real-time. The project features a REST API backend with Flask and a React frontend for interactive analysis. It supports multi-language input and provides confidence scores along with visualizations of sentiment distributions.",
    tech: ["Python", "Sentence Transformers", "Scikit-learn", "React", "Flask"],
    github: "https://github.com/PrithvirajKalburgi",
  },
  {
    id: "data-pipeline-orchestrator",
    title: "Data Pipeline Orchestrator",
    summary: "ETL pipeline built with Dagster and Apache Kafka.",
    description: "An end-to-end data pipeline orchestration system using Dagster for workflow management and Apache Kafka for real-time data streaming. The system ingests data from multiple sources, transforms it using Pandas and NumPy, and loads it into a PostgreSQL data warehouse. Includes monitoring dashboards built with Tableau for real-time pipeline health visualization.",
    tech: ["Dagster", "Apache Kafka", "Python", "Pandas", "PostgreSQL"],
    github: "https://github.com/PrithvirajKalburgi",
  },
  {
    id: "cloud-deployment-platform",
    title: "Cloud Deployment Platform",
    summary: "Automated cloud deployment using AWS and Docker.",
    description: "A full-stack cloud deployment platform that automates the CI/CD process using Docker containers deployed to AWS. Features include automated testing with JUnit, containerized microservices architecture, and infrastructure as code. The platform supports one-click deployments and provides real-time logs and metrics through a custom-built dashboard.",
    tech: ["AWS", "Docker", "Node.js", "TypeScript", "CI/CD"],
    github: "https://github.com/PrithvirajKalburgi",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/40 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded-md border border-border/50">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded-md border border-border/50">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
              <Link
                to={`/project/${project.id}`}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

// src/pages/Projects.jsx
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with React & Tailwind CSS.",
      image: "/portfolio.jpg",
    },
    {
      title: "E-Commerce Store",
      description: "Fully functional store with cart & checkout.",
      image: "/ecommerce.jpg",
    },
    {
      title: "Blog Platform",
      description: "A sleek blog platform with markdown support.",
      image: "/blog.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-background px-4">
      <SectionTitle title="Projects" />

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
            className="border rounded-xl shadow-md dark:shadow-none hover:shadow-lg transition-shadow duration-300"
          />
        ))}
      </div>
    </section>
  );
}

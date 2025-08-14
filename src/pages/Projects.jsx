// src/pages/Projects.jsx
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A sleek, modern portfolio website built with React and Tailwind CSS, offering a smooth, responsive user experience. Designed to showcase projects and skills with clean, intuitive navigation. Fully optimized for performance, accessibility, and mobile devices.",
      image: "/portfolio.png",
    },
    {
      title: "EzLearn - A Learning Management System",
      description:
        "EzLearn is a full-featured Learning Management System built on the MERN Stack. It enables seamless course creation, student enrollment, and progress tracking through an intuitive, responsive interface. Designed for modern education, it offers real-time interaction, secure authentication, and a user-friendly learning experience.",
      image: "/ecommerce.jpg",
    },
    {
      title: "Tomato - A Food Ordering Platform",
      description:
        "Tomato is a straightforward food ordering app built with the MERN stack. Users can explore menus, add items to their cart, and place orders quickly. Its clean, responsive design ensures a smooth and intuitive experience.",
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

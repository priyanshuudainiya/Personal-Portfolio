// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-white dark:bg-background rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}

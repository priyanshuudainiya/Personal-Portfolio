// src/components/SectionTitle.jsx
export default function SectionTitle({ title }) {
  return (
    <div className="text-center mb-14 relative">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary relative inline-block">
        {title}
        {/* Underline with subtle gradient */}
        <span className="block w-16 h-1 bg-gradient-to-r from-primary/50 to-primary/20 mx-auto mt-3 rounded-full"></span>
      </h2>
    </div>
  );
}

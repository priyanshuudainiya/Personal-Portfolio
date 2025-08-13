// src/components/Button.jsx
export default function Button({ text, variant = "primary", onClick }) {
  const baseStyles =
    "px-5 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none shadow-md hover:shadow-lg";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline:
      "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </button>
  );
}

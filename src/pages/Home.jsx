// src/pages/Home.jsx
import { useEffect, useState } from "react";
import Button from "../components/Button";

export default function Home() {
  const titles = [
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "ReactJS Developer",
    "MERN Stack Developer",
  ];

  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1500;

    const type = () => {
      const fullTitle = titles[titleIndex];
      if (!isDeleting) {
        setCurrentTitle(fullTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === fullTitle.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setCurrentTitle(fullTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left bg-gray-50 dark:bg-background px-4">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src="/profile02.jpg" // image from public folder
          alt="Profile"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/30 shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-3">
          Hi, I’m{" "}
          <span className="text-amber-700 dark:text-amber-400">
            Priyanshu Udainiya
          </span>
        </h1>
        <h2 className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4 h-6">
          {currentTitle}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-6">
          I’m a MERN Stack developer passionate about building sleek, modern,
          and responsive websites that deliver outstanding user experiences. I
          love turning ideas into functional digital experiences.
        </p>
        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          <Button text="View Projects" />
          <Button text="Contact Me" variant="secondary" />
        </div>
      </div>
    </section>
  );
}

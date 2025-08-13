// src/pages/About.jsx
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section className="py-16 bg-white dark:bg-background px-4">
      <SectionTitle title="About Me" />
      <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
        <p>
          I’m a MERN Stack developer who enjoys turning ideas into smooth,
          interactive experiences. I believe the best web apps feel effortless
          to use and look effortless to admire.
        </p>
        <p className="mt-4">
          When I’m not coding, you might find me exploring design trends,
          capturing life through a lens, or tinkering with the latest
          tech—always chasing inspiration from the world around me.
        </p>
      </div>
    </section>
  );
}

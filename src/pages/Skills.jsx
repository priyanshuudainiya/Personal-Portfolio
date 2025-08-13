// src/pages/Skills.jsx
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaCss3Alt,
  FaJs,
  FaHtml5,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiBootstrap,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";

import SectionTitle from "../components/SectionTitle";
import SkillBadge from "../components/SkillBadge";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: FaCss3Alt },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "ExpressJS", icon: SiExpress },
    { name: "NodeJS", icon: FaNodeJs },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "PostMan", icon: SiPostman },
    { name: "Figma", icon: FaFigma },
    { name: "Python", icon: FaPython },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <SectionTitle title="Skills" />

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {skills.map((skill, idx) => (
            <SkillBadge key={idx} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { IconContext } from "react-icons";

export default function SkillBadge({ name, icon: Icon }) {
  return (
    <span
      className="flex items-center gap-2 px-4 py-2
                 bg-primary/10 dark:bg-primary/20
                 text-primary font-medium rounded-full text-sm shadow-sm
                 hover:bg-primary hover:text-white
                 transition-all duration-300 cursor-pointer hover:scale-105"
    >
      {Icon && (
        <IconContext.Provider value={{ size: "1.1em" }}>
          <Icon />
        </IconContext.Provider>
      )}
      {name}
    </span>
  );
}

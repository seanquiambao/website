import Title from "@/components/Title";
import Skill from "@/components/home/skills/Skill";
import { SKILLS } from "@/data/Skills";
const Skills = () => {
  return (
    <>
      <Title title="Skills" />
      <div className="flex lg:flex-row flex-col items-center gap-y-5 justify-evenly py-10">
        {SKILLS.map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            icons={skill.icons}
            description={skill.description}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;

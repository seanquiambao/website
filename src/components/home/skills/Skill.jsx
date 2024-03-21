import Title from "@/components/Title";
import {
  SiCplusplus,
  SiCsharp,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";

const ICONS = {
  cplusplus: <SiCplusplus />,
  csharp: <SiCsharp />,
  javascript: <IoLogoJavascript />,
  nextjs: <TbBrandNextjs />,
  tailwind: <SiTailwindcss />,
  react: <FaReact />,
  firebase: <SiFirebase />,
  git: <FaGitAlt />,
  github: <FaGithub />,
  sql: <TbSql />,
};

const Skill = ({ title, icons, description }) => {
  return (
    <div className="flex flex-col w-80 lg:items-start lg:text-left items-center text-center">
      <div className="font-bold text-2xl">{title}</div>
      <div className="flex my-2">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="text-5xl mr-2 hover:scale-110 duration-100"
          >
            {ICONS[icon]}
          </div>
        ))}
      </div>
      <div>{description}</div>
    </div>
  );
};

export default Skill;

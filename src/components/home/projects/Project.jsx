import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiItchdotio } from "react-icons/si";
import { IoIosGlobe } from "react-icons/io";

const CSS = "xl:text-4xl text-3xl hover:scale-110 duration-300";
const ICONS = {
  github: <SiGithub className={CSS} />,
  web: <IoIosGlobe className={CSS} />,
  itchio: <SiItchdotio className={CSS} />,
};

const Project = ({ title, date, links, points, image, index }) => {
  return (
    <div
      className={`flex ${index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"} flex-col items-center justify-evenly w-full p-3 gap-y-5`}
    >
      <Image
        src={image}
        alt="ISA Project"
        width={700}
        height={700}
        className="border border-black p-1"
      />
      <div
        className={`${index % 2 === 0 ? "xl:ml-5" : "xl:mr-5"} self-center xl:w-2/5 w-11/12`}
      >
        <div className="xl:text-5xl text-3xl font-bold">{title}</div>
        <div className="flex xl:text-3xl text-xl my-2 gap-x-3 text-nowrap">
          <div>{date}</div>
          {Object.entries(links).map(([title, link], index) => {
            return (
              <Link key={index} href={link}>
                {ICONS[title]}
              </Link>
            );
          })}
        </div>
        <ul className="list-disc ml-10">
          {points.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;

import Title from "@/components/Title";
import Project from "@/components/home/projects/Project";
import { PROJECTS } from "@/data/Projects";
const Projects = () => {
  return (
    <>
      <Title title="Projects" />
      <div className="flex flex-col items-center my-[5%] gap-y-10">
        {PROJECTS.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              date={project.date}
              links={project.links}
              points={project.body}
              image={project.image}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;

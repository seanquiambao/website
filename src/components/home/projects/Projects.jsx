import Title from "@/components/Title";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="flex flex-col gap-2">
      <Title title="Experience" />
      <iframe
        className="self-center md:block hidden"
        src="https://drive.google.com/file/d/1xgNpBdV0jOA8eauFCJucjzfqrgZAQCKM/preview"
        width="1200"
        height="800"
        allow="autoplay"
      ></iframe>
      <Link
        href="https://drive.google.com/file/d/1xgNpBdV0jOA8eauFCJucjzfqrgZAQCKM/view"
        className="border rounded-lg px-5 py-2 text-2xl border-black hover:scale-110 duration-300 w-fit self-center"
      >
        Download PDF
      </Link>
    </div>
  );
};

export default Projects;

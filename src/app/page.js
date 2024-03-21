import Landing from "@/components/Landing";
import Skills from "@/components/home/skills/Skills";
import Projects from "@/components/home/projects/Projects";
import Gallery from "@/components/home/gallery/Gallery";
import Contact from "@/components/home/contact/Contact";
export default function Home() {
  return (
    <>
      <Landing />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <div className="flex justify-center">Copyright © Sean Quiambao</div>
    </>
  );
}

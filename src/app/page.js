"use client";
import Landing from "@/components/Landing";
import Skills from "@/components/home/skills/Skills";
import Projects from "@/components/home/projects/Projects";
import Gallery from "@/components/home/gallery/Gallery";
import Contact from "@/components/home/contact/Contact";
import LittleGuy from "@/components/home/LittleGuy";
import { useState } from "react";
export default function Home() {
  const [visible, setVisibility] = useState(false);
  return (
    <>
      <Landing visible={visible} setVisibility={setVisibility} />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <LittleGuy visible={visible} />
      <div className="flex justify-center">Copyright © Sean Quiambao</div>
    </>
  );
}

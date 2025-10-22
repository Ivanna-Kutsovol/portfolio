import About from "./about/about";
import Contact from "./contact/contact";
import Experience from "./experience/experience";
import Project from "./project/project";
import Skills from "./skills/skills";
import stl from "./styles/_page.module.scss";

export default function Home() {
  return (
    <div className={stl.container} >
      <About/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}
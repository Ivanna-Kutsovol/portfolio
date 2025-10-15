import About from "./about/about";
import Experience from "./experience/experience";
import stl from "./styles/_page.module.scss";

export default function Home() {
  return (
    <div className={stl.container} >
      <About/>
      <Experience/>
    </div>
  );
}
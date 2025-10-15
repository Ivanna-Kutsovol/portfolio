import About from "./about/about";
import stl from "./styles/_page.module.scss";

export default function Home() {
  return (
    <div className={stl.container} >
      <About/>
    </div>
  );
}
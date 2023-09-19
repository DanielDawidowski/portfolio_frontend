import { useState } from "react";
import Header from "./components/navs/header/Header";
import Navigation from "./components/navs/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Stack from "./components/stack/Stack";
import ScrollSlider from "./components/ScrollSlider/ScrollSlider";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <section>
        <Hero />
      </section>
      <section>
        <Stack />
      </section>
      <section>
        <ScrollSlider />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}

export default App;

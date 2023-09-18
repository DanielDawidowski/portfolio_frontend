import { useState } from "react";
import Header from "./components/navs/header/Header";
import Navigation from "./components/navs/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Stack from "./components/stack/Stack";
import ScrollSlider from "./components/ScrollSlider/ScrollSlider";

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
        <Hero />
      </section>
    </>
  );
}

export default App;

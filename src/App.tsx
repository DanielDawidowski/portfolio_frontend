import { useState } from "react";
import Header from "./components/navs/header/Header";
import Navigation from "./components/navs/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Stack from "./components/stack/Stack";

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
    </>
  );
}

export default App;

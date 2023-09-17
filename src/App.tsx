import { useState } from "react";
import Header from "./components/navs/header/Header";
import Navigation from "./components/navs/navigation/Navigation";

function App() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </>
  );
}

export default App;

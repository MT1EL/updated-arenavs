import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Roadmap from "./components/roadmap/Roadmap";
import Tokenomics from "./components/tokenomics/Tokenomics";
import Team from "./components/team/Team";
import Advisors from "./components/advisors/Advisors";
import Sponsors from "./components/sponsors/Sponsors";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState("HOME");
  console.log(selected);
  return (
    <div className="App" isVisible={isVisible}>
      <Navbar
        isVisible={isVisible}
        selected={selected}
        setSelected={setSelected}
      />
      <Home setIsVisible={setIsVisible} setSelected={setSelected} />
      <About setSelected={setSelected} />
      <Roadmap setSelected={setSelected} />
      <Tokenomics setSelected={setSelected} />
      <Team setSelected={setSelected} />
      <Advisors setSelected={setSelected} />
      <Sponsors setSelected={setSelected} />
      <Footer setSelected={setSelected} />
    </div>
  );
}

export default App;

import { NavComponent } from "./Nav";
import "../assets/styles/header.css";
import { Hero } from "../assets/comps/Hero";
import { ParticlesBackground } from "./ParticlesBackground";

export const Header = (props) => {
  return (
    <>
      <header className="header" id="header">
        <ParticlesBackground />
        <div className="nav">
          <NavComponent />
        </div>
        <Hero {...props} />
      </header>
    </>
  );
};















 

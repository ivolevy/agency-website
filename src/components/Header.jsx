import { NavComponent } from "./Nav";
import "../assets/styles/header.css";
import { Hero } from "../assets/comps/Hero";

export const Header = (props) => {
  return (
    <>
      <header className="header" id="header">
        <div className="mesh-container">
          <div className="aurora-blob blob-1"></div>
          <div className="aurora-blob blob-2"></div>
          <div className="aurora-blob blob-3"></div>
          <div className="glass-overlay"></div>
        </div>
        <div className="nav">
          <NavComponent />
        </div>
        <Hero {...props} />
      </header>
    </>
  );
};

















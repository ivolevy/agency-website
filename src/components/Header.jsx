import { NavComponent } from "./Nav";
import '../assets/styles/header.css';
import { Hero } from '../assets/comps/Hero';

export const Header = () => {
  return (
    <>
      <header className="header" id="header">
      <div className="nav">
        <NavComponent />
      </div>
        <Hero />
      </header>
    </>
  );
};















 

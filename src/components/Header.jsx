import { NavComponent } from "./Nav";
import '../assets/styles/header.css';
import { Hero } from '../assets/comps/Hero';

export const Header = (props) => {
  return (
    <>
      <header className="header" id="header">
        <div className="nav">
          <NavComponent />
        </div>
        <Hero {...props} />
      </header>
    </>
  );
};















 

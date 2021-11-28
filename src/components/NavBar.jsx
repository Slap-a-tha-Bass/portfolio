import { Link } from "react-router-dom";
import {
  LogoButton,
  LogoFrame,
  NavBarAcross,
  NavBarTopLeft,
  NavBarTopRight,
  NavButton,
} from "../styled-components";
import "../App.css";

const NavBar = () => {
  return (
    <>
      <NavBarAcross>
        <NavBarTopLeft>
          <LogoFrame />
          <Link to="/">
            <LogoButton />
          </Link>
        </NavBarTopLeft>
        <NavBarTopRight>
          <Link to="/projects" className="text-decoration-none">
            <NavButton>projects</NavButton>
          </Link>
          <Link to="/contact" className="text-decoration-none">
            <NavButton>contact</NavButton>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <NavButton>about</NavButton>
          </Link>
        </NavBarTopRight>
      </NavBarAcross>
    </>
  );
};

export default NavBar;

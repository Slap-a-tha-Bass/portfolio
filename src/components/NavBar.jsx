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
      <NavBarAcross className="bg-dark">
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
        </NavBarTopRight>
      </NavBarAcross>
    </>
  );
};

export default NavBar;

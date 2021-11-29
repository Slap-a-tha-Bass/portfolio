import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  LogoFrame,
  LogoButton,
  NavButton,
  NavDiv,
  ToggleButton,

} from "../styled-components";

const NavBar = () => {
  return (
    <Navbar className="bg-color" variant="bg-dark" expand="lg" sticky="top">
      <Navbar.Brand href="/" className="bg-color">
        <LogoFrame />
        <LogoButton />
      </Navbar.Brand>
      <Navbar.Toggle
        className="border-dark mx-5"
        aria-controls="basic-navbar-nav"
      >
        <ToggleButton className="d-flex align-items-center justify-content-center text-center">
          <i className="bi bi-list h1 mt-2"></i>
        </ToggleButton>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <NavDiv>
        <Nav>
          <NavButton to="/projects">projects</NavButton>
          <NavButton to="/contact">contact</NavButton>
          <NavButton to="/about">about</NavButton>
        </Nav>
        </NavDiv> 
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar; 

// import {
//   LogoButton,
//   LogoFrame,
//   NavBarAcross,
//   NavBarTopLeft,
//   NavBarTopRight,
//   NavButton,
// } from "../styled-components";
// import "../App.css";

// const NavBar = () => {
//   return (
//     <>
//       <NavBarAcross>
//         <NavBarTopLeft>
//           <LogoFrame />
//           <Link to="/">
//             <LogoButton />
//           </Link>
//         </NavBarTopLeft>
//         <NavBarTopRight>
//           <Link to="/projects" className="text-decoration-none">
//             <NavButton>projects</NavButton>
//           </Link>
//           <Link to="/contact" className="text-decoration-none">
//             <NavButton>contact</NavButton>
//           </Link>
//           <Link to="/about" className="text-decoration-none">
//             <NavButton>about</NavButton>
//           </Link>
//         </NavBarTopRight>
//       </NavBarAcross>
//     </>
//   );
// };

// export default NavBar;

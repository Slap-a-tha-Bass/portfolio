import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  LogoFrame,
  LogoButton,
  NavLinkCustom,
  NavDiv,
  ToggleButton,
  SocialLink,
  Icon,
  SocialLinkWrapper,
} from "../styled-components";

const NavBar = () => {
  return (
    <Navbar
      className="bg-color px-2"
      bg="bg-dark"
      sticky="top"
      collapseOnSelect
      expand="lg"
    >
      <Navbar.Brand className="transition">
        <Link to="/">
          {/* Custom CSS button */}
          <LogoFrame />
          <LogoButton />
        </Link>
      </Navbar.Brand>
      <SocialLinkWrapper className="transition">
        <SocialLink>
          <a
            href="http://www.github.com/Slap-a-tha-Bass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <i className="bi bi-github"></i>
            </Icon>
          </a>
        </SocialLink>
        <SocialLink>
          <a
            href="http://www.linkedin.com/in/corey-deloach-061180124"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <i className="bi bi-linkedin"></i>
            </Icon>
          </a>
        </SocialLink>
        <SocialLink>
          <a
            href="http://www.twitter.com/Slap_a_tha_Bass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <i className="bi bi-twitter"></i>
            </Icon>
          </a>
        </SocialLink>
      </SocialLinkWrapper>
      {/* Use a toggle below the breakpoint */}
      <Navbar.Toggle>
        {/* Custom Bootstrap Icon image for coloring Toggle Button */}
        <ToggleButton className="d-flex align-items-center justify-content-center text-center">
          <i className="bi bi-list h1 mt-2"></i>
        </ToggleButton>
      </Navbar.Toggle>
      {/* Collapse wrapper, observes the breakpoint */}
      <Navbar.Collapse id="basic-navbar-nav">
        <NavDiv className="transition">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link eventKey={1} as={Link} to="/projects">
                <NavLinkCustom>projects</NavLinkCustom>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={2} as={Link} to="/about">
                <NavLinkCustom>about</NavLinkCustom>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </NavDiv>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
// <Navbar className="bg-color" variant="bg-dark" collapseOnSelect expand="lg" sticky="top">
//   <Navbar.Brand href="/" className="bg-color">
//     <LogoFrame />
//     <LogoButton />
//   </Navbar.Brand>
//   <Navbar.Toggle
//     className="border-dark mx-5"
//     aria-controls="basic-navbar-nav"
//   >
//     <ToggleButton className="d-flex align-items-center justify-content-center text-center">
//       <i className="bi bi-list h1 mt-2"></i>
//     </ToggleButton>
//   </Navbar.Toggle>
//   <Navbar.Collapse id="basic-navbar-nav">
//     <NavDiv>
//       <Nav>
//         <Nav.Item>
//           <NavLinkCustom to="/projects">projects</NavLinkCustom>
//         </Nav.Item>
//         <NavLinkCustom to="/contact">contact</NavLinkCustom>
//         <NavLinkCustom to="/about">about</NavLinkCustom>
//       </Nav>
//     </NavDiv>
//   </Navbar.Collapse>
// </Navbar>

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

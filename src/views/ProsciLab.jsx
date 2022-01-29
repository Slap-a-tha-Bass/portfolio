import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import {
  CardDiv,
  CardFooter,
  CardTitle,
  FooterLink,
  FooterText,
  LinkButton,
} from "../styled-components";
const ProsciLab = () => {
  return (
    <>
      <div className="bg-color">
        <CardDiv className="chess-img">
          <CardTitle>proSCI lab</CardTitle>
          <Card.Body style={{ fontSize: "calc(1rem + 1.5vw)" }}>
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Sole creator and engineer of this front-end application, geared
                towards researchers who want to share their work
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                First time tackling styled-components being used for conditional
                rendering.
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Mobile and web friendly application.
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Used only styled-components for all of the styling and theme
                classes.
              </li>
            </ul>
          </Card.Body>
          <CardFooter>
            <Link to="/projects" className="my-4">
              <FooterLink style={{ color: "rgba(240,240,240,0.9)" }}>
                <i className="bi bi-arrow-left-circle-fill"></i>
              </FooterLink>
            </Link>
            <FooterLink>
              <FooterText style={{ color: "rgba(240,240,240,0.9)" }}>
                Deployed:
              </FooterText>
              <LinkButton
                style={{
                  color: "rgba(240,240,240,0.9)",
                  textDecoration: "underline",
                }}
                href="https://prosci-lab.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                proSCI lab
              </LinkButton>
            </FooterLink>
            <FooterLink>
              <FooterText style={{ color: "rgba(240,240,240,0.9)" }}>
                Github:
              </FooterText>
              <LinkButton
                style={{ color: "rgba(240,240,240,0.9)" }}
                href="https://github.com/Slap-a-tha-Bass/ceren_lab_static"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github h1"></i>
              </LinkButton>
            </FooterLink>
          </CardFooter>
        </CardDiv>
      </div>
      <div className="chess-img">
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Dark Theme
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="prosci-dark"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Light Theme
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="prosci-light"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Collapsed Navbar - Mobile
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="prosci-collapsed"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Menu Expanded - Mobile
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="prosci-menu"></div>
          </Card.Body>
        </CardDiv>
      </div>
    </>
  );
};

export default ProsciLab;

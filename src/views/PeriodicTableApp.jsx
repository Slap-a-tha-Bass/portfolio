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
const PeriodicTableApp = () => {
  return (
    <>
      <div className="bg-color">
        <CardDiv className="chess-img">
          <CardTitle>periodic table</CardTitle>
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
                Sole creator and engineer of this front-end application,
                inspired by science
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Custom API built to map through all of the elements and display
                information about each element.
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Navigate to more details about the element by clicking on the
                element card.
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Used only styled-components for all of the styling, utilizing
                the "props" functionality to create multi-colored properties for
                each element.
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
                href="https://periodic-table-vpd7l.ondigitalocean.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                periodic table
              </LinkButton>
            </FooterLink>
            <FooterLink>
              <FooterText style={{ color: "rgba(240,240,240,0.9)" }}>
                Github:
              </FooterText>
              <LinkButton
                style={{ color: "rgba(240,240,240,0.9)" }}
                href="https://www.github.com/Slap-a-tha-Bass/periodic-table"
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
            Table View 1
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="periodic-table-1"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Table View 2
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="periodic-table-2"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
           About Element View
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="periodic-table-about"></div>
          </Card.Body>
        </CardDiv>
      </div>
    </>
  );
};

export default PeriodicTableApp;

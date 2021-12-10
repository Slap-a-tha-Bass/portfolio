import React from 'react';
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

const ChessApp = () => {
    return (
        <>
           <div className="bg-color">
        <CardDiv className="chess-img">
          <CardTitle>starry knight chess</CardTitle>
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
                inspired by my love and frustration for chess
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Purely created with Styled-components CSS. Hardly any functionality.
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Each character is made from scratch using shapes and stacking them on top of each other repetitively. 
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Future updates to functionality are also possible with moving the pieces around on the board. 
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
                style={{ color: "rgba(240,240,240,0.9)", textDecoration: "underline" }}
                href="https://chess-app-frjk7.ondigitalocean.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                starry knight chess
              </LinkButton>
            </FooterLink>
            <FooterLink>
              <FooterText style={{ color: "rgba(240,240,240,0.9)" }}>
                Github:
              </FooterText>
              <LinkButton
                style={{ color: "rgba(240,240,240,0.9)" }}
                href="https://www.github.com/Slap-a-tha-Bass/chess-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github h1"></i>
              </LinkButton>
            </FooterLink>
          </CardFooter>
        </CardDiv>
      </div> 
        </>
    )
}

export default ChessApp;

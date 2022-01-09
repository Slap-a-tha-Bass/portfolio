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

const ChirprApp = () => {
  return (
    <>
      <div className="d-flex justify-content-center px-4 bg-color">
        <CardDiv className="chess-img">
          <CardTitle>chirpr app</CardTitle>
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
                Sole creator and engineer of this full-stack application
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Clients have ability to register or login with Passport
                Authentication with encrypted passwords using BCrypt
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Users have the ability to send status updates using CRUD REST
                api functions
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Users can also Donate to the website with a Stripe integration
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Frontend uses TypeScript and Bootstrap; Backend uses ExpressJS
                and MySQL
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
                href="https://chirpr-app.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                chirpr app
              </LinkButton>
            </FooterLink>
            <FooterLink>
              <FooterText style={{ color: "rgba(240,240,240,0.9)" }}>
                Github:
              </FooterText>
              <LinkButton
                style={{ color: "rgba(240,240,240,0.9)" }}
                href="https://www.github.com/Slap-a-tha-Bass/chirprDB"
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
            Login Page
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="chirpr-login"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Login Invalid Page
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="chirpr-login-invalid"></div>
          </Card.Body>
        </CardDiv>
      </div>
      <div className="chess-img">
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            <CardTitle>Register Page</CardTitle>
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="chirpr-register"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            <CardTitle>Register Success Page</CardTitle>
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="chirpr-register-success"></div>
          </Card.Body>
        </CardDiv>
      </div>
      <div className="chess-img">
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            <CardTitle>Profile Page</CardTitle>
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="chirpr-profile"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            <CardTitle>Post Chirp Page</CardTitle>
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="chirpr-post"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            <CardTitle>Chirps Page</CardTitle>
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="chirpr-chirps"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            <CardTitle>Donate Page</CardTitle>
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="chirpr-donate"></div>
          </Card.Body>
        </CardDiv>
      </div>
    </>
  );
};

export default ChirprApp;

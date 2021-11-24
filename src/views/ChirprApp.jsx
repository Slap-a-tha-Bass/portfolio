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
      <div className="chess-img d-flex justify-content-center px-4">
        <CardDiv>
          <CardTitle>chirpr app</CardTitle>
          <Card.Body>
            <ul className="list-group">
              <li className="list-group-item">
                Sole creator and engineer of this full-stack application
              </li>
              <li className="list-group-item">
                Clients have ability to register or login with Passport
                Authentication with encrypted passwords using BCrypt
              </li>
              <li className="list-group-item">
                Users have the ability to send status updates using CRUD REST
                api functions
              </li>
              <li className="list-group-item">
                Users can also Donate to the website with a Stripe integration
              </li>
              <li className="list-group-item">
                Frontend uses TypeScript and Bootstrap; Backend uses ExpressJS
                and MySQL
              </li>
            </ul>
          </Card.Body>
          <CardFooter>
            <Link to="/projects">
              <FooterLink>
                <i className="bi bi-arrow-left-circle-fill"></i>
              </FooterLink>
            </Link>
            <FooterLink>
              <FooterText>Deployed project:</FooterText>
              <LinkButton
                href="https://chirpr-app.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                chirpr app
              </LinkButton>
            </FooterLink>
            <FooterLink>
              <FooterText>Link to repo:</FooterText>
              <LinkButton
                href="https://www.github.com/Slap-a-tha-Bass/chirprDB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github h3"></i>
              </LinkButton>
            </FooterLink>
          </CardFooter>
        </CardDiv>
      </div>
      <div className="chess-img">
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Order Page
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="order-page"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Subtotal Page
            <Card.Body>
              <div className="subtotal-page"></div>
            </Card.Body>
          </CardTitle>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Payment Page
            <Card.Body>
              <div className="payment-page"></div>
            </Card.Body>
          </CardTitle>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Receipt URL Page
            <Card.Body>
              <div className="receipturl-page"></div>
            </Card.Body>
          </CardTitle>
        </CardDiv>
      </div>
    </>
  );
};

export default ChirprApp;

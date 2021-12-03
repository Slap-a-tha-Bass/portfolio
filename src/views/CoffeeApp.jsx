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

const CoffeeApp = () => {
  return (
    <>
      <div className="bg-color">
        <CardDiv className="chess-img">
          <CardTitle>c^2 coffee</CardTitle>
          <Card.Body style={{ fontSize: "calc(1rem + 1.5vw)" }}>
            <ul className="list-group">
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.25)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Sole creator and engineer of this full-stack application,
                inspired by my love for coffee
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.25)",
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
                  backgroundColor: "rgba(39, 78, 184, 0.25)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Users have the ability to place an order with any combination of
                snacks or drinks using CRUD REST api functions
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.25)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Several hooks are experimented with in this project, ie
                useForm() for form handling and apiService() for CRUD
                applications
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.25)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Server functions handle all of the math and sorting the orders
                placed so that the correct price is displayed
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.25)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Stripe integration for handling a mock-purchase sends receipt
                information to a stored api procedure
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.25)",
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
                style={{ color: "rgba(240,240,240,0.9)" }}
                href="https://cc-coffee-app.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                c^2 coffee
              </LinkButton>
            </FooterLink>
            <FooterLink>
              <FooterText style={{ color: "rgba(240,240,240,0.9)" }}>
                Github:
              </FooterText>
              <LinkButton
                style={{ color: "rgba(240,240,240,0.9)" }}
                href="https://www.github.com/Slap-a-tha-Bass/final_project_cc_coffee_app"
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
            Order Page
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="order-page"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            Subtotal Page
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="subtotal-page"></div>
          </Card.Body>
        </CardDiv>
      </div>
      <div className="chess-img">
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            <CardTitle>Payment Page</CardTitle>
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="payment-page"></div>
          </Card.Body>
        </CardDiv>
      </div>
      <div className="chess-img">
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            <CardTitle>Receipt URL Page</CardTitle>
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="receipturl-page"></div>
          </Card.Body>
        </CardDiv>
      </div>
    </>
  );
};

export default CoffeeApp;

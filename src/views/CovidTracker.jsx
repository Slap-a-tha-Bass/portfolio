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
const CovidTracker = () => {
  return (
    <>
      <div className="bg-color">
        <CardDiv className="chess-img">
          <CardTitle>US COVID Tracker</CardTitle>
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
                inspired by displaying data.
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                API fetch from covidactnow.org allowed me to map through all of
                the states and display information about each element.
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Navigate to more details about each state by clicking on the
                state.
              </li>
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(39, 78, 184, 0.5)",
                  color: "rgba(240, 240, 240, 0.95)",
                  fontWeight: "200",
                }}
              >
                Used only styled-components for all of the styling.
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
                href="https://covid-tracker-app-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                US COVID Tracker
              </LinkButton>
            </FooterLink>
            <FooterLink>
              <FooterText style={{ color: "rgba(240,240,240,0.9)" }}>
                Github:
              </FooterText>
              <LinkButton
                style={{ color: "rgba(240,240,240,0.9)" }}
                href="https://github.com/Slap-a-tha-Bass/covid-tracker-app"
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
            US Current View
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="covid-uscurrent"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            US Current Graphs
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="covid-current-graph1"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            US Current Graphs cont'd
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="covid-current-graph2"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            US Current Table
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="covid-current-table"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
           US Historic View
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="covid-ushistoric"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            US Historic Graphs
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="covid-historic-graph1"></div>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <CardTitle className="card-header text-center text-light">
            US Historic Graphs cont'd
          </CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <div className="covid-historic-graph2"></div>
          </Card.Body>
        </CardDiv>
      </div>
    </>
  );
};

export default CovidTracker;

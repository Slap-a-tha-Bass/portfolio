import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  CardTitle,
  CardFooter,
  DeliverResultsCard,
  ResultsLiDiv,
  ContactButton,
} from "../styled-components";

const HomeCard = ({ title, link, li1, li2, li3, li4, path }) => {
  return (
    <DeliverResultsCard className="transition">
      <CardTitle>{title}</CardTitle>
      <Card.Body>
        <ul
          className="list-group"
          style={{
            backgroundColor: "rgba(39, 78, 184, 0.35)",
            color: "rgba(240, 240, 240, 0.85)",
          }}
        >
          <ResultsLiDiv>
            <i
              className="bi bi-check display-5"
              style={{ color: "rgba(127, 188, 246, 0.95)" }}
            ></i>
            <li
              className="list-group-item"
              style={{
                backgroundColor: "rgba(39, 78, 184, 0.01)",
                color: "rgba(240, 240, 240, 0.85)",
              }}
            >
              {li1}
            </li>
          </ResultsLiDiv>
          <ResultsLiDiv>
            <i
              className="bi bi-check display-5"
              style={{ color: "rgba(127, 188, 246, 0.95)" }}
            ></i>

            <li
              className="list-group-item"
              style={{
                backgroundColor: "rgba(39, 78, 184, 0.01)",
                color: "rgba(240, 240, 240, 0.85)",
              }}
            >
              {li2}
            </li>
          </ResultsLiDiv>
          <ResultsLiDiv>
            <i
              className="bi bi-check display-5"
              style={{ color: "rgba(127, 188, 246, 0.95)" }}
            ></i>
            <li
              className="list-group-item"
              style={{
                backgroundColor: "rgba(39, 78, 184, 0.01)",
                color: "rgba(240, 240, 240, 0.85)",
              }}
            >
              {li3}
            </li>
          </ResultsLiDiv>

          <ResultsLiDiv>
            <i
              className="bi bi-check display-5"
              style={{ color: "rgba(127, 188, 246, 0.95)" }}
            ></i>
            <li
              className="list-group-item"
              style={{
                backgroundColor: "rgba(39, 78, 184, 0.01)",
                color: "rgba(240, 240, 240, 0.85)",
              }}
            >
              {li4}
            </li>
          </ResultsLiDiv>
        </ul>
      </Card.Body>
      <CardFooter className="d-flex justify-content-center">
        <Link className="text-decoration-none" to={path || ''}>
          <ContactButton>{link}</ContactButton>
        </Link>
      </CardFooter>
    </DeliverResultsCard>
  );
};

export default HomeCard;

import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CardDiv, CardTitle, CardFooter, CardText } from "../styled-components";

const ProjectCard = ({ title, content, path }) => {
  return (
    <CardDiv className="chess-img">
      <Link to={path} className="text-decoration-none">
        <CardTitle>{title}</CardTitle>
        <Card.Body>
          <CardText>{content}</CardText>
        </Card.Body>
        <CardFooter>
          <div className="tech1"></div>
          <div className="tech2"></div>
          <div className="tech3"></div>
          <div className="tech4"></div>
          <div className="tech5"></div>
          <div className="tech6"></div>
          </CardFooter>
      </Link>
    </CardDiv>
  );
};

export default ProjectCard;

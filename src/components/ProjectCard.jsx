import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CardDiv, CardTitle, CardFooter, CardText } from "../styled-components";

const ProjectCard = ({ title, content, tech, path }) => {
  return (
    <CardDiv>
      <Link to={path} className="text-decoration-none">
        <CardTitle>{title}</CardTitle>
        <Card.Body>
          <CardText>{content}</CardText>
        </Card.Body>
        <CardFooter>{tech}</CardFooter>
      </Link>
    </CardDiv>
  );
};

export default ProjectCard;

import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CardDiv, CardTitle, CardFooter, CardText } from "../styled-components";

const ProjectCard = ({ title, content, tech, path }) => {
  return (
      <Link to={path} className="text-decoration-none">
        <CardDiv>
          <CardTitle>{title}</CardTitle>
          <Card.Body>
            <CardText>{content}</CardText>
          </Card.Body>
          <CardFooter>{tech}</CardFooter>
        </CardDiv>
      </Link>
  );
};

export default ProjectCard;

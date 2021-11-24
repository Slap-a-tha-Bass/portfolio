import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CardDiv, CardTitle, CardFooter } from "../styled-components";

const ProjectCard = ({ title, content, tech, path }) => {
  return (
      <Link to={path} className="text-decoration-none">
        <CardDiv>
          <CardTitle>{title}</CardTitle>
          <Card.Body>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
          <CardFooter>{tech}</CardFooter>
        </CardDiv>
      </Link>
  );
};

export default ProjectCard;

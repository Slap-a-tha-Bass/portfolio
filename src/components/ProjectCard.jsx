import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CardDiv, CardTitle, CardFooter, CardText } from "../styled-components";

const ProjectCard = ({ title, content, path, allTech, fewTech1 }) => {
  return (
    <CardDiv className="chess-img">
      <Link to={path} className="text-decoration-none">
        <CardTitle>{title}</CardTitle>
        <Card.Body>
          <CardText>{content}</CardText>
        </Card.Body>
        <CardFooter>
          {/* ALL TECH FOR PROJECT */}
          {allTech && <div className="tech1"></div>}
          {allTech && <div className="tech2"></div>}
          {allTech && <div className="tech3"></div>}
          {allTech && <div className="tech4"></div>}
          {allTech && <div className="tech5"></div>}
          {allTech && <div className="tech6"></div>}
          {/* Just a couple of techs used VOL 1 */}
          {fewTech1 && <div className="tech1"></div>}
          {fewTech1 && <div className="tech7"></div>}
          </CardFooter>
      </Link>
    </CardDiv>
  );
};

export default ProjectCard;

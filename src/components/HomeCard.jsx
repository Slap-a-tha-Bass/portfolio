import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  CardTitle,
  CardFooter,
  DeliverResultsCard,
  ContactButton,
  HomeCardText
} from "../styled-components";

const HomeCard = ({ title, content, link, path }) => {
  return (
    <DeliverResultsCard className="chess-img transition">
      <CardTitle>{title}</CardTitle>
      <Card.Body>
       <HomeCardText>{content}</HomeCardText>
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

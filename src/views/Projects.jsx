import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Col } from "react-bootstrap";
import { HomeFont, HomeDiv } from "../styled-components";

const Projects = () => {
  return (
    <div className="bg-color">
      <HomeDiv>
        <HomeFont>Projects</HomeFont>
      </HomeDiv>
      <Col md={6} className="transition">
        <ProjectCard
          title="c^2 coffee"
          content="A coffee ordering app that seamlessly allows the user to navigate and place their own order and submit for payment. Receipts are also collected for both the user and the app using Stripe.js for mock-payments."
          path="/projects/coffeeapp"
        />
      </Col>
      <Col md={6} className="transition">
        <ProjectCard
          title="chirpr app"
          content="A social app that lets users post an updated status. Users have to sign in using Passport.js and can then view all other 'chirps.' They can edit or delete their content as well. Users can also donate to the site using Stripe.js."
          path="/projects/chirprapp"
        />
      </Col>
    </div>
  );
};

export default Projects;

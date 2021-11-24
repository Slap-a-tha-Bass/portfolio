import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Col } from "react-bootstrap";
import { HomeFont } from "../styled-components";

const Projects = () => {
  return (
    <div className="chess-img transition">
      <HomeFont>Projects</HomeFont>
        <Col md={6}>
          <ProjectCard
            title="c^2 coffee"
            content="A coffee ordering app that seamlessly allows the user to navigate and place their own order and submit for payment. Receipts are also collected for both the user and the app using Stripe.js for mock-payments."
            tech="TypeScript, ExpressJS, Bootstrap, Stripe, BCrypt, Passport, MySQL"
            path="/projects/coffeeapp"
          />
          <ProjectCard
            title="chirpr app"
            content="A social app that lets users post an updated status. Users have to sign in using Passport.js and can then view all other 'chirps.' They can edit or delete their content as well. Users can also donate to the site using Stripe.js."
            tech="TypeScript, ExpressJS, Bootstrap, Stripe, BCrypt, Passport, MySQL"
            path="/projects/chirprapp"
          />
        </Col>
    </div>
  );
};

export default Projects;

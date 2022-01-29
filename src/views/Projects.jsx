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
          title="US COVID Tracker"
          content="An app, built with Next.js, designed to stay recent with all COVID data in the US. Used chart.js to build some useful charts displayed on details pages of each state. Not mobile friendly do to all of the data being imported. Future plans to make it mobile friendly are optional."
          path="/projects/covidtracker"
          fewTech2
        />
      </Col>
      <Col md={6} className="transition">
        <ProjectCard
          title="proSCI lab"
          content="A lab page prototype, built with Next.js, geared towards styling and utilizing styled-components to create an project that is mobile friendly. This would be geared toward researches who want to display their articles on their own personal lab page."
          path="/projects/proscilab"
          fewTech2
        />
      </Col>
      <Col md={6} className="transition">
        <ProjectCard
          title="periodic table"
          content="A custom build API that fetches information on each element. The landing page displays all of the basic info about each element. You can navigate to a more details page upon clicking the element you want to research. Best if on larger screens (turn phone sideways for best view)."
          path="/projects/periodictableapp"
          fewTech1
        />
      </Col>
      <Col md={6} className="transition">
        <ProjectCard
          title="starry knight chess"
          content="A non-functional chess app built from using only Styled-components. Loved the way this one turned out! Would love to collaborate and make it fully functional one day."
          path="/projects/chessapp"
          fewTech1
        />
      </Col>
      <Col md={6} className="transition">
        <ProjectCard
          title="c^2 coffee"
          content="A coffee ordering app that seamlessly allows the user to navigate and place their own order and submit for payment. Receipts are also collected for both the user and the app using Stripe.js for mock-payments."
          path="/projects/coffeeapp"
          allTech
        />
      </Col>
      <Col md={6} className="transition">
        <ProjectCard
          title="chirpr app"
          content="A social app that lets users post an updated status. Users have to sign in using Passport.js and can then view all other 'chirps.' They can edit or delete their content as well. Users can also donate to the site using Stripe.js."
          path="/projects/chirprapp"
          allTech
        />
      </Col>
    </div>
  );
};

export default Projects;

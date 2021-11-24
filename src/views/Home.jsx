import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AboutMeCard,
  AboutMeDiv,
  AboutMeFrame,
  AboutMeLi,
  CardTitle,
  HeadshotDiv,
  HeadshotFrame,
  HomeButton,
  HomeDiv,
  HomeFont,
  NameFont,
  TechDiv,
  TechFrame,
  TechCard
} from "../styled-components";

const Home = () => {
  return (
    <div className="chess-img transition">
      <HomeFont className="text-center mt-5">Hi, my name is</HomeFont>
      <Link to="/aboutme" className="text-decoration-none">
        <NameFont>Corey DeLoach</NameFont>
      </Link>
      <HomeFont className="text-center">
        I am a Full-Stack Software Developer
      </HomeFont>
      <HomeDiv>
        <Link to="/projects" className="text-decoration-none">
          <HomeButton>projects</HomeButton>
        </Link>
        <Link to="/contact" className="text-decoration-none">
          <HomeButton>contact</HomeButton>
        </Link>
      </HomeDiv>
      <HeadshotFrame />
      <HeadshotDiv className="headshot" />
      <AboutMeFrame />
      <AboutMeDiv>
        <AboutMeCard>
          <CardTitle>About me</CardTitle>
          <Card.Body>
            <ul className="p-0">
              <AboutMeLi>Born and raised in Birmingham, AL</AboutMeLi>
              <AboutMeLi>B.S. in Biology from Birmingham-Southern</AboutMeLi>
              <AboutMeLi>Previously in chemical sales for 7 years</AboutMeLi>
              <AboutMeLi>Daily chess player on chess.com</AboutMeLi>
              <AboutMeLi>Wood working and DIY project friendly</AboutMeLi>
              <AboutMeLi>Unpaid part-time comedian</AboutMeLi>
            </ul>
          </Card.Body>
        </AboutMeCard>
      </AboutMeDiv>
      <TechFrame />
      <TechDiv>
        <TechCard>
          <CardTitle>Tech Used</CardTitle>
          <Card.Body>
            <ul className="p-0">
              <AboutMeLi>TypeScript</AboutMeLi>
              <AboutMeLi>NodeJS</AboutMeLi>
              <AboutMeLi>Styled Components</AboutMeLi>
              <AboutMeLi>React-Bootstrap</AboutMeLi>
              <AboutMeLi>MySQL</AboutMeLi>
              <AboutMeLi>Heroku</AboutMeLi>
              <AboutMeLi>Digital Ocean</AboutMeLi>
              <AboutMeLi>Netlify</AboutMeLi>
            </ul>
          </Card.Body>
        </TechCard>
      </TechDiv>
    </div>
  );
};

export default Home;

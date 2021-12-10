import React from "react";
import { Card } from "react-bootstrap";
import {
  AboutMeCard,
  AboutMeDiv,
  AboutMeFrame,
  AboutMeLi,
  CardTitle,
  HeadshotDiv,
  HeadshotFrame,
  TechDiv,
  TechFrame,
  TechCard,
  HeadshotCard,
} from "../styled-components";
const About = () => {
  return (
    <div className="bg-color">
      <HeadshotCard />
      <HeadshotFrame />
      <HeadshotDiv className="headshot transition" />
      <AboutMeFrame />
      <AboutMeDiv>
        <AboutMeCard className="transition">
          <CardTitle>About me</CardTitle>
          <Card.Body>
            <ul className="p-0">
              <AboutMeLi>Born and raised in Birmingham, AL</AboutMeLi>
              <AboutMeLi>Couldn't tell you what an array was 2 years ago</AboutMeLi>
              <AboutMeLi>Now I'm building full-stack apps, CRAZY!</AboutMeLi>
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
        <TechCard className="transition">
          <CardTitle>Tech Used</CardTitle>
          <Card.Body>
            <ul className="p-0">
              <AboutMeLi>TypeScript</AboutMeLi>
              <AboutMeLi>ExpressJS</AboutMeLi>
              <AboutMeLi>Styled Components</AboutMeLi>
              <AboutMeLi>React-Bootstrap</AboutMeLi>
              <AboutMeLi>MySQL</AboutMeLi>
              <AboutMeLi>MonogDB</AboutMeLi>
              <AboutMeLi>KeystoneJS</AboutMeLi>
              <AboutMeLi>GraphQL</AboutMeLi>
              <AboutMeLi>Digital Ocean</AboutMeLi>
            </ul>
          </Card.Body>
        </TechCard>
      </TechDiv>
    </div>
  );
};

export default About;

import React from "react";
import { Card } from "react-bootstrap";
import {
  AboutMeCard,
  AboutMeDiv,
  AboutMeFrame,
  CardText,
  CardTitle,
  HomeFont,
  Icon,
  SocialLink,
} from "../styled-components";

const Contact = () => {
  return (
    <div className="chess-img transition">
      <AboutMeFrame />
      <AboutMeDiv>
        <AboutMeCard>
          <CardTitle>Contact me</CardTitle>
          <Card.Body className="d-flex justify-content-center">
            <SocialLink>
              <a
                href="http://www.github.com/Slap-a-tha-Bass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <i className="bi bi-github"></i>
                </Icon>
              </a>
            </SocialLink>
            <SocialLink>
              <a
                href="http://www.linkedin.com/in/corey-deloach-061180124"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <i className="bi bi-linkedin"></i>
                </Icon>
              </a>
            </SocialLink>
            <SocialLink>
              <a
                href="http://www.twitter.com/Slap_a_tha_Bass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <i className="bi bi-twitter"></i>
                </Icon>
              </a>
            </SocialLink>
          </Card.Body>
          <Card.Body className="d-inline text-center">
            <CardText>or email me @</CardText>
            <HomeFont>
                cdeloach16@gmail.com
            </HomeFont>
          </Card.Body>
          <Card.Body className="d-inline text-center">
            <CardText>if you play chess, challenge me on chess.com</CardText>
            <HomeFont>
                @Slap-a-tha-Bass
            </HomeFont>
          </Card.Body>
        </AboutMeCard>
      </AboutMeDiv>
      {/* 
      <div className=" mt-2 text-light">or shoot me an email</div>
      <div className="">
        <a className="h4 Contact" href="mailto:cdeloach16@gmail.com">
          cdeloach16@gmail.com
        </a>
      </div>
      <div className=" mt-4 text-light">
        if you're a chess fan, challenge me below
      </div>
      <div className=" mb-3">
        <a
          className="h4 Contact"
          href="http://www.chess.com/member/Slap-a-tha-Bass"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slap-a-tha-Bass
        </a>
      </div>
      <br />
      <div className="d-flex justify-content-start">
        <Link className="h4 Contact mt-3" to="/aboutme">
          about me
        </Link>
      </div> */}
    </div>
  );
};

export default Contact;

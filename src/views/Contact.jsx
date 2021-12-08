import React from "react";
import { Card } from "react-bootstrap";
import {
  AboutMeCard,
  AboutMeDiv,
  AboutMeFrame,
  CardText,
  CardTitle,
  ContactFont,
  Icon,
  SocialLink,
} from "../styled-components";

const Contact = () => {
  return (
    <div className="bg-color">
      <AboutMeFrame />
      <AboutMeDiv>
        <AboutMeCard className="chess-img transition">
          <CardTitle>Contact me</CardTitle>
          <CardText>if you have any questions or interested in hiring me</CardText>
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
                href="http://www.linkedin.com/in/corey-deloach"
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
            <CardText>or email me so we can work on your next project together</CardText>
            <ContactFont>
                <a href="mailto:corey@deloach.dev">corey@deloach.dev</a>
            </ContactFont>
          </Card.Body>
        </AboutMeCard>
      </AboutMeDiv>
    </div>
  );
};

export default Contact;

import styled, { keyframes } from "styled-components";

export const NavDiv = styled.div`
  margin-left: 55vw;
`;
export const NavLinkCustom = styled.div`
  position: sticky;
  color: rgb(200, 200, 200);
  text-decoration: none;
  border-radius: 0.3rem;
  height: 12vh;
  width: 14vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: calc(0.85rem + 1vh);
  padding: 3vw;
  margin-left: 2vw;
  margin-right: 2vw;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    background-color: rgba(37, 142, 240, 0.65);
    color: white;
  }
`;
export const ToggleButton = styled.div`
  outline: none;
  width: 3rem;
  height: 2rem;
  border-radius: 0.5rem;
  padding: none;
  margin: none;
  color: rgba(37, 142, 240, 0.65);
  background-color: black;
`;
export const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const LogoButton = styled.div`
  position: relative;
  color: rgba(240, 240, 240, 0.6);
  font-family: monospace;
  font-size: 1rem;
  border-left: 2rem solid transparent;
  border-right: 2rem solid transparent;
  border-top: 4rem solid rgba(240, 240, 240, 0.65);
  margin-left: 3rem;
  margin-top: 1.5rem;
  text-decoration: none;
  transition-property: all;
  transition-duration: 0s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  animation: 10s infinite ${rotate};
`;
export const LogoFrame = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  border-left: 4rem solid transparent;
  border-right: 4rem solid transparent;
  border-bottom: 5rem solid rgba(37, 142, 240, 0.65);
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;
export const HomeDiv = styled.div`
  width: 90vw;
  margin-left: 5vw;
  margin-right: 5vw;
  display: flex;
  justify-content: center;
`;
export const HomeFont = styled.span`
  color: rgba(240, 240, 240, 0.85);
  font-size: calc(1.5rem + 1.5vw);
`;
export const NameFont = styled.p`
  color: rgba(37, 142, 240, 0.95);
  font-size: calc(2.5rem + 1.5vw);
  text-decoration: none;
  margin-top: 1vw;
`;
export const WorkFont = styled.span`
  color: rgba(240, 240, 240, 0.85);
  font-size: calc(1.5rem + 1.5vw);
`;
export const CardDiv = styled.div`
  background-color: rgba(39, 78, 184, 0.35);
  color: rgba(240, 240, 240, 0.85);
  font-size: 2vw;
  margin: 2vw;
  box-shadow: 5px 10px 5px rgba(2, 0, 110, 0.35);
  width: 85vw;
  margin-left: 7.5vw;
  margin-right: 10vw;
  &:hover {
    cursor: pointer;
  }
`;
export const CardTitle = styled.div`
  font-size: calc(1.7rem + 1.5vw);
  display: flex;
  justify-content: center;
  color: rgba(240, 240, 240, 0.95);
  padding-top: 1vw;
`;
export const CardText = styled.p`
  color: rgba(240, 240, 240, 0.85);
  font-size: calc(1rem + 1.5vw);
`;
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: rgba(37, 142, 240, 0.65);
  font-weight: 600;
  padding-bottom: 1rem;
  font-size: calc(1rem + 1.5vw);
`;
export const FooterLink = styled.div`
  color: black;
  font-size: calc(1.5rem + 1.5vw);
  text-decoration: none;
  margin-left:1vw;
`;
export const LinkButton = styled.a`
  text-decoration: none;
  color: black;
`;
export const FooterText = styled.p`
  font-size: calc(0.7rem + 1.5vw);
`;
export const FootBarAcross = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0);
`;
export const FootBarDivTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.01);
  color: rgba(240, 240, 240, 0.55);
`;
export const FootBarDivBottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.01);
  color: rgba(240, 240, 240, 0.55);
`;
export const FootBarP = styled.p`
  font-size: calc(0.3rem + 1.5vw);
`;
export const ResumeLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1.5rem + 1.5vw);
  color: rgba(255, 255, 255, 0.75);
  &:hover {
    color: rgba(39, 78, 184, 0.95);
  }
`;
export const PDFSizer = styled.div`
  font-size: calc(3rem + 1.5vw);
  margin-left: 1vw;
`;
export const SeeResumeSizer = styled.div`
  font-size: calc(0.7rem + 1.5vw);
  margin-left: 1vw;
`;
export const HeadshotDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 5vw;
  margin-left: 33vw;
  margin-right: 33vw;
  border-radius: 30vw;
`;
export const HeadshotFrame = styled.div`
  height: 0;
  width: 0;
  position: absolute;
  border-left: 45vw solid transparent;
  border-right: 45vw solid transparent;
  border-bottom: 60vw solid rgba(120, 120, 120, 0.55);
  margin-left: 5vw;
`;
export const HeadshotCard = styled.div`
  position: absolute;
  background-color: rgba(39, 78, 184, 0.35);
  height: 60vw;
  width: 60vw;
  margin-left: 20vw;
`;
export const AboutMeFrame = styled.div`
  height: 0;
  width: 0;
  position: absolute;
  border-left: 45vw solid transparent;
  border-right: 45vw solid transparent;
  border-top: 60vw solid rgba(50, 50, 50, 0.55);
  margin-left: 5vw;
`;
export const AboutMeDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 5vw;
  margin-right: 5vw;
  text-decoration: none;
`;
export const AboutMeCard = styled.div`
  background-color: rgba(39, 78, 184, 0.35);
  color: rgba(240, 240, 240, 0.65);
  font-size: calc(1rem + 1.5vw);
  padding: 2vw;
  box-shadow: 5px 10px 5px rgba(2, 0, 110, 0.35);
  margin-left: 5vw;
  margin-right: 5vw;
`;
export const AboutMeLi = styled.li`
  list-style-type: none;
  border-bottom: 0.1vw solid rgba(39, 78, 184, 0.95);
  text-decoration: none;
  background-color: rgba(2, 0, 110, 0.01);
  color: rgba(240, 240, 240, 0.95);
`;
export const TechDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 5vw;
  margin-left: 10vw;
  margin-right: 10vw;
`;
export const TechFrame = styled.div`
  height: 0;
  width: 0;
  position: absolute;
  border-left: 30vw solid transparent;
  border-right: 30vw solid transparent;
  border-bottom: 45vw solid rgba(39, 78, 184, 0.65);
  margin-left: 20vw;
`;
export const TechCard = styled.div`
  background-color: rgba(60, 60, 60, 0.65);
  font-size: calc(1rem + 1.5vw);
  padding: 2vw;
  box-shadow: 5px 10px 5px rgba(2, 0, 110, 0.35);
  margin-left: 10vw;
  margin-right: 10vw;
`;
export const ProjectFrame = styled.div`
  height: 0;
  width: 0;
  position: absolute;
  border-left: 45vw solid transparent;
  border-right: 45vw solid transparent;
  border-bottom: 60vw solid rgba(0, 0, 0, 0.15);
  margin-left: 5vw;
`;
export const SocialLink = styled.div`
  font-size: 5vh;
  display: flex;
  text-align: center;
  margin-top: 1vw;
  margin-left: 6vw;
  margin-right: 6vw;
`;
export const Icon = styled.div`
  color: rgba(240, 240, 240, 0.65);
  &:hover {
    color: rgba(39, 78, 184, 0.95);
  }
`;
export const ResumeDiv = styled.div`
  margin-top: 10vw;
`;
export const ContactFont = styled.div`
  color: rgba(240, 240, 240, 0.65);
  font-size: calc(1.5rem + 1.5vw);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundColor = styled.div`
  background-color: black !important;
`;
export const DeliverResultsCard = styled.div`
  background-color: rgba(39, 78, 184, 0.35);
  color: rgba(240, 240, 240, 0.45);
  font-size: calc(0.6rem + 1.5vw);
  padding: 2vw;
  box-shadow: 5px 10px 5px rgba(115, 115, 163, 0.15);
  margin-left: 12vw;
  margin-right: 12vw;
  margin-top: 5vw;
  padding-right: 3vw;
  padding-left: 3vw;
`;
export const ResultsLiDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;
`;
export const ContactButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(8rem + 10vw);
  height: calc(4rem + 6vh);
  background-color: rgba(39, 78, 184, 0.5);
  color: white;
  border-radius: 0.3rem;
  margin: calc(1rem + 1vw);
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    background-color: rgba(39, 78, 184, 0.9);
    color: white;
  }
`;

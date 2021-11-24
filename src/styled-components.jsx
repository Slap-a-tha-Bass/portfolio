import styled, { keyframes } from "styled-components";

export const NavBarAcross = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
`;
export const NavBarTopLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const NavBarTopRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 2rem;
`;
export const NavButton = styled.div`
  color: rgb(200, 200, 200);
  text-decoration: none;
  border-radius: 0.3rem;
  max-height: 100px;
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: large;
  padding: 3rem;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: rgba(37, 142, 240, 0.65);
  }
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
`;
export const HomeFont = styled.p`
  color: rgba(240, 240, 240, 0.65);
  font-size: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NameFont = styled.p`
  display: flex;
  justify-content: center;
  color: rgba(37, 142, 240, 0.65);
  font-size: 8vw;
  text-decoration: none;
  margin-left: 0.8rem;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: rgba(37, 142, 240, 0.95);
  }
`;
export const HomeDiv = styled.div`
  min-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8vw;
  padding-bottom: 20vw;
`;
export const HomeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(37, 142, 240, 0.95);
  box-shadow: 1vw 1vw 1vw rgba(2, 0, 110, 0.35);
  color: rgba(240, 240, 240, 0.45);
  width: 20vw;
  height: 10vw;
  text-decoration: none;
  font-size: 4vw;
  margin-left: 6vw;
  margin-right: 6vw;
  margin-top: 1rem;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    cursor: pointer;
    color: rgba(240, 240, 240, 0.75);
  }
`;
export const CardDiv = styled.div`
  background-color: rgba(37, 142, 240, 0.65);
  color: rgba(240, 240, 240, 0.65);
  font-size: 2vw;
  margin: 2vw;
  box-shadow: 5px 10px 5px rgba(2, 0, 110, 0.35);
  width: 85vw;
  margin-left: 7.5vw;
  margin-right: 10vw;
`;
export const CardTitle = styled.div`
  font-size: 4vw;
  display: flex;
  justify-content: center;
  color: rgba(240, 240, 240, 0.95);
`;
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: black;
  margin-left: 1rem;
`;
export const FooterLink = styled.div`
  color: black;
  font-size: 3vw;
  text-decoration: none;
`;
export const LinkButton = styled.a`
  text-decoration: none;
  color: black;
`;
export const FooterText = styled.p`
  font-size: 2vw;
`;
export const FootBarDivTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.01);
  color: rgba(240, 240, 240, 0.55);
  margin-top: 70vw;
`;
export const FootBarDivBottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.01);
  color: rgba(240, 240, 240, 0.55);
  margin-top: 10vw;
`;
export const FootBarP = styled.p`
  font-size: 2.5vw;
`;
export const ResumeLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vw;
  color: rgba(240, 240, 240, 0.55);
  &:hover {
    color: rgba(240, 240, 240, 0.95);
  }
`;
export const PDFSizer = styled.div`
  font-size: 5vw;
  margin-left: 1vw;
`;
export const HeadshotDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 17vw;
  margin-left: 30vw;
  margin-right: 30vw;
  border-radius: 20vw;
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

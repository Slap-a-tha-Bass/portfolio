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
`;
export const HomeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(37, 142, 240, 0.95);
  box-shadow: 5px 10px 5px rgba(240, 240, 240, 0.35);
  color: rgba(240, 240, 240, 0.45);
  width: 20vw;
  height: 10vw;
  text-decoration: none;
  font-size: 4vw;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
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

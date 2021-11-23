import React from "react";
import { Link } from "react-router-dom";
import { HomeButton, HomeDiv, HomeFont, NameFont } from "../styled-components";

const Home = () => {
  return (
    <div className="chess-img">
      <HomeFont className="text-center">Hi, my name is</HomeFont>
      <Link to="/aboutme" className="text-decoration-none">
        <NameFont>Corey DeLoach</NameFont>
      </Link>
      <HomeFont className="text-center">I am a Full-Stack Software Developer</HomeFont>
      <HomeDiv>
        <Link to="/projects" className="text-decoration-none">
          <HomeButton>projects</HomeButton>
        </Link>
        <Link to="/contact" className="text-decoration-none">
          <HomeButton>contact</HomeButton>
        </Link>
      </HomeDiv>
    </div>
  );
};

export default Home;

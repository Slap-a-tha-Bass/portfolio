import React from "react";
import { Link } from "react-router-dom";
import {
  HeadshotDiv,
  HeadshotFrame,
  HomeButton,
  HomeDiv,
  HomeFont,
  NameFont,
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
    </div>
  );
};

export default Home;

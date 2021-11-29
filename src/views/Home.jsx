import React from "react";
import { Link } from "react-router-dom";
import { WorkFont, HomeFont, NameFont } from "../styled-components";

const Home = () => {
  return (
    <>
      <div className="chess-img">
        <HomeFont className="text-center transition">
          Hi, my name is
          <Link to="/about" className="text-decoration-none ">
            <NameFont>Corey DeLoach</NameFont>
          </Link>
        </HomeFont>
        <WorkFont className="text-center transition">
          I am a Full-Stack Software Developer
        </WorkFont>
        {/* <HomeDiv>
        <Link to="/projects" className="text-decoration-none">
          <HomeButton>projects</HomeButton>
        </Link>
        <Link to="/contact" className="text-decoration-none">
          <HomeButton>contact</HomeButton>
        </Link>
      </HomeDiv> */}
      </div>
    </>
  );
};

export default Home;

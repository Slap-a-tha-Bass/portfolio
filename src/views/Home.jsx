import React from "react";
import { Link } from "react-router-dom";
import { WorkFont, HomeFont, NameFont, HomeDiv } from "../styled-components";

const Home = () => {
  return (
    <>
      <div className="chess-img">
        <HomeDiv>
          <HomeFont className="transition">
            Hi, my name is
            <Link to="/about" className="text-decoration-none">
              <NameFont>Corey DeLoach</NameFont>
            </Link>
          </HomeFont>
        </HomeDiv>
        <HomeDiv>
          <WorkFont className="text-center transition">
            I build Full-Stack React applications  
          </WorkFont>
        </HomeDiv>
      </div>
    </>
  );
};

export default Home;

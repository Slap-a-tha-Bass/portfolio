import React from "react";
import { Link } from "react-router-dom";
import { WorkFont, HomeFont, NameFont, HomeDiv } from "../styled-components";
import HomeCard from "../components/HomeCard";

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
            I am a Full-Stack Software Developer
          </WorkFont>
        </HomeDiv>
        <HomeCard
          title="What I can deliver"
          li1="Combining latest technology with clear documentation"
          li2="Building full-stack usable apps for technology companies"
          li3="Implementing UI/UX design for customer satisfaction"
          li4="Developing skills to become a mentor for new talent"
          link="Contact me"
          path="/contact"
        />
      </div>
    </>
  );
};

export default Home;

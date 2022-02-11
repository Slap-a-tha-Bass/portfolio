import React from "react";
import HomeCard from "../components/HomeCard";

const Home = () => {
  return (
    <>
      <div className="bg-color">
        <HomeCard
          title="Hi, my name is Corey DeLoach"
          content="I build full stack apps using React"
          link="Contact me"
          path="/contact"
          projects_link="Projects"
          projects_path="/projects"
        />
      </div>
    </>
  );
};

export default Home;

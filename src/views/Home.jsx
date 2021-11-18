import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
            
                <div className="chess-img">
                    <div className="Home-text display-4 d-flex align-items-center mt-4 justify-content-center text-center pb-4">
                        Hi, my name is  <Link to="/aboutme" className="Name Home-text display-2"> Corey DeLoach</Link> 
                    </div>
                    <div className="Home-text display-4 text-center mt-4 pt-4">
                        I am a Full-Stack Software Developer
                    </div>
                </div>
                
    )
}

export default Home;

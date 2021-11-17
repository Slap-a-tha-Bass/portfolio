import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
            
                <div>
                    <div className="Home display-4 d-flex align-items-center mt-2">
                        Hi, my name is  <Link to="/aboutme" className="Name display-2"> Corey DeLoach</Link> 
                    </div>
                    <div className="Home display-5">
                        I am a Full-Stack Software Developer
                    </div>
                    <div className="chess-img"></div>
                </div>
                
    )
}

export default Home;

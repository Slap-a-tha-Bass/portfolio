import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
            
                <div className="chess-img">
                    <div className="display-4 d-flex align-items-center text-light mt-4 justify-content-center text-center">
                        Hi, my name is  <Link to="/aboutme" className="Name display-2"> Corey DeLoach</Link> 
                    </div>
                    <div className="display-4 text-center text-light mt-4">
                        I am a Full-Stack Software Developer
                    </div>
                </div>
                
    )
}

export default Home;

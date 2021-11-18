import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
            
                <div className="chess-img">
                    <div className="text-white display-5 d-flex align-items-center justify-content-center text-center">
                        Hi, my name is  <Link to="/aboutme" className="Name text-white display-2"> Corey DeLoach</Link> 
                    </div>
                    <div className="text-white display-5 text-center pt-3">
                        I am a Full-Stack Software Developer
                    </div>
                </div>
                
    )
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // useEffect(() => {
    //     fetch('https://cc-coffee.herokuapp.com/')
    //         .then(() => console.log('Coffee awaken!'));
    // }, []);
    // useEffect(() => {
    //     fetch('https://chirpr-app.herokuapp.com/')
    //         .then(() => console.log('Chirpr awaken!'));
    // }, []);
    return (
                <div className="chess-img">
                    <div className="text-white display-5 d-flex align-items-center justify-content-center text-center">
                        Hi, my name is  <Link to="/aboutme" className="Name mt-1"> Corey DeLoach</Link> 
                    </div>
                    <div className="text-white display-6 text-center pt-3">
                        I am a Full-Stack Software Developer
                    </div>
                    <div className="HomeDiv">
                            <Link className="HomeButton border rounded-pill" to="/projects">view my work</Link>
                            <Link className="HomeButton border rounded-pill" to="/contact">contact me</Link>
                    </div>
                </div>  
    )
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
            <div className="chess-img-2">
                <h1 className="Projects text-center display-4 mt-2">Contact me</h1>
                <div className="text-center mt-2 text-light">if you're interested in hiring me or like what i do</div>
                <div className="d-flex justify-content-center align-items-center mt-2 text-light">
                    <div>
                        <a className="social mx-2 d-flex align-items-center" href="http://www.github.com/Slap-a-tha-Bass" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                    </div>
                    <div className="">or</div>
                    <div>
                        <a className="social mx-2 d-flex align-items-center" href="http://www.linkedin.com/us/corey-deloach-061180124/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>                
                    </div>
                    <div className="">or</div>
                    <div>
                        <a className="social mx-2 d-flex align-items-center" href="http://www.twitter.com/Slap_a_tha_Bass" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                    </div>
                </div>
                <div className="text-center mt-2 text-light">or shoot me an email</div>
                <div className="text-center"><a className="h4 Name" href="mailto:cdeloach16@gmail.com">cdeloach16@gmail.com</a></div>
                <div className="text-center mt-4 text-light">if you're a chess fan, challenge me below</div>
                <div className="text-center mb-3"><a className="h4 Name" href="http://www.chess.com/member/Slap-a-tha-Bass" target="_blank" rel="noopener noreferrer">Slap-a-tha-Bass</a></div>
                {/* <div className="chess-img-2 text-center"></div> */}
                <div className="d-flex justify-content-center"><Link className="h4 Name mt-3" to="/aboutme">about me</Link></div>
            </div>
    )
}

export default Contact;

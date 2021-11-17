import React from 'react';

const Contact = () => {
    return (
            <>
                <h1 className="Projects text-center display-4 mt-2">Contact me</h1>
                <div className="Home text-center mt-2">if you're interested in hiring me or like what i do</div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                    <div>
                        <a className="social mx-2" href="http://www.github.com/Slap-a-tha-Bass" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                    </div>
                    <div className="">or</div>
                    <div>
                        <a className="social mx-2" href="http://www.linkedin.com/us/corey-deloach-061180124/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>                
                    </div>
                    <div className="">or</div>
                    <div>
                        <a className="social mx-2" href="http://www.twitter.com/Slap_a_tha_Bass" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                    </div>
                </div>
                <div className="Home text-center mt-2">or shoot me an email</div>
                <div className="text-center"><a className="h4 Name" href="mailto:cdeloach16@gmail.com">cdeloach16@gmail.com</a></div>
                <div className="Home text-center mt-4">additionally, if you're a chess fan, challenge me below</div>
                <div className="text-center"><a className="h4 Name" href="http://www.chess.com/member/Slap-a-tha-Bass" target="_blank" rel="noopener noreferrer">Slap-a-tha-Bass</a></div>
            </>
    )
}

export default Contact;

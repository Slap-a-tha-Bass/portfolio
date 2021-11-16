import React, { useState } from 'react';

const Projects = () => {

    return (  
        <>
                <h1 className="Projects text-center">Projects</h1>
                <div className="d-flex justify-content-center">
                    <div className="card border rounded shadow">
                        <h2 className="card-header">c^2 coffee</h2>
                        <div className="card-body">
                            <div className="card-text">
                                <ul className="list-group">
                                    <li className="list-group-item">Sole creator and engineer of this full-stack application, inspired by my love for coffee</li>
                                    <li className="list-group-item">Clients have ability to register or login with Passport Authentication </li>
                                    <li className="list-group-item"></li>
                                    <li className="list-group-item"></li>
                                    <li className="list-group-item"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer"></div>
                    </div>
                </div>
                {/* <div className="col-md-12 bgcolor">
                    <div className="Project display-5">
                        inspired by my love for coffee
                    </div>
                    <div>
                        <a className="link" href="http://cc-coffee.herokuapp.com" target="_blank" rel="noopener noreferrer">c^2 coffee</a>
                    </div>
                    <div className="Project display-5">
                        more projects can be seen on my
                    </div> 
                    <a className="link" href="http://www.github.com/Slap-a-tha-Bass" target="_blank" rel="noopener noreferrer">github</a>
                </div> */}
        </>
    )
}

export default Projects;

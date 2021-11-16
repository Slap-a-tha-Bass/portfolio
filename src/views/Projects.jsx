import React, { useState } from 'react';

const Projects = () => {

    return (  
        <>
                <h1 className="Projects text-center display-4">Projects</h1>
                {/* c^2 coffee project */}
                <div className="d-flex justify-content-center px-4">
                    <div className="card border rounded shadow-lg border-2 border-dark my-3 col-md-8">
                        <div className="card-header card-header-info text-center h2">c^2 coffee</div>
                        <div className="card-body card-header-info">
                            <div className="card-text">
                                <ul className="list-group">
                                    <li className="list-group-item card-header-warning">Sole creator and engineer of this full-stack application, inspired by my love for coffee</li>
                                    <li className="list-group-item card-header-warning">Clients have ability to register or login with Passport Authentication with encrypted passwords using BCrypt</li>
                                    <li className="list-group-item card-header-warning">Users have the ability to place an order with any combination of snacks or drinks using CRUD REST api functions</li>
                                    <li className="list-group-item card-header-warning">Several hooks are experimented with in this project, ie useForm() for form handling and apiService() for CRUD applications</li>
                                    <li className="list-group-item card-header-warning">Server functions handle all of the math and sorting the orders placed so that the correct price is displayed</li>
                                    <li className="list-group-item card-header-warning">Stripe integration for handling a mock-purchase sends receipt information to a stored api procedure</li>
                                    <li className="list-group-item card-header-warning">Frontend uses TypeScript and Bootstrap; Backend uses ExpressJS and MySQL </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer card-header-info d-flex justify-content-around">
                            <div>
                                <p className="h5">Deployed project:</p>
                                <a className="link" href="https://cc-coffee.herokuapp.com" target="_blank" rel="noopener noreferrer">c^2 coffee</a>
                            </div>
                            <div>
                                <p className="h5">Link to repo:</p>
                                <a className="link" href="https://www.github.com/Slap-a-tha-Bass/final_project_cc_coffee_app" target="_blank" rel="noopener noreferrer"><i className="bi bi-github btn-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* chirper project */}
                <div className="d-flex justify-content-center px-4">
                    <div className="card border rounded shadow-lg border-2 border-dark my-3 col-md-8">
                        <div className="card-header card-header-info text-center h2">chirper</div>
                        <div className="card-body card-header-info">
                            <div className="card-text">
                                <ul className="list-group">
                                    <li className="list-group-item card-header-warning">Sole creator and engineer of this full-stack application</li>
                                    <li className="list-group-item card-header-warning">Clients have ability to register or login with Passport Authentication with encrypted passwords using BCrypt</li>
                                    <li className="list-group-item card-header-warning">Users have the ability to send status updates using CRUD REST api functions</li>
                                    <li className="list-group-item card-header-warning"></li>
                                    <li className="list-group-item card-header-warning">Frontend uses TypeScript and Bootstrap; Backend uses ExpressJS and MySQL </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer card-header-info d-flex justify-content-around">
                            <div>
                                <p className="h5">Deployed project:</p>
                                <a className="link" href="https://cc-coffee.herokuapp.com" target="_blank" rel="noopener noreferrer">c^2 coffee</a>
                            </div>
                            <div>
                                <p className="h5">Link to repo:</p>
                                <a className="link" href="https://www.github.com/Slap-a-tha-Bass/final_project_cc_coffee_app" target="_blank" rel="noopener noreferrer"><i className="bi bi-github btn-lg"></i></a>
                            </div>
                        </div>
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

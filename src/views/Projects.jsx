import React from 'react';

const Projects = () => {

    return (  
        <div>
                <h1 className="Projects text-center text-dark display-4 mt-2">Projects</h1>
                {/* c^2 coffee project */}
                <div className="d-flex justify-content-center px-4">
                    <div className="card border-dark rounded shadow-lg my-3 col-md-8">
                        <div className="card-header card-header-info text-center h2">c^2 coffee</div>
                        <div className="card-body card-header-info">
                            <div className="card-text">
                                <ul className="list-group">
                                    <li className="list-group-item card-header-warning border-dark ">Sole creator and engineer of this full-stack application, inspired by my love for coffee</li>
                                    <li className="list-group-item card-header-warning border-dark">Clients have ability to register or login with Passport Authentication with encrypted passwords using BCrypt</li>
                                    <li className="list-group-item card-header-warning border-dark">Users have the ability to place an order with any combination of snacks or drinks using CRUD REST api functions</li>
                                    <li className="list-group-item card-header-warning border-dark">Several hooks are experimented with in this project, ie useForm() for form handling and apiService() for CRUD applications</li>
                                    <li className="list-group-item card-header-warning border-dark">Server functions handle all of the math and sorting the orders placed so that the correct price is displayed</li>
                                    <li className="list-group-item card-header-warning border-dark">Stripe integration for handling a mock-purchase sends receipt information to a stored api procedure</li>
                                    <li className="list-group-item card-header-warning border-dark">Frontend uses TypeScript and Bootstrap; Backend uses ExpressJS and MySQL </li>
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
                                <a className="link" href="https://www.github.com/Slap-a-tha-Bass/final_project_cc_coffee_app" target="_blank" rel="noopener noreferrer"><i className="bi bi-github h3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* chirper project */}
                <div className="d-flex justify-content-center px-4">
                    <div className="card border-dark rounded shadow-lg my-3 col-md-8">
                        <div className="card-header card-header-info text-center h2">chirpr app</div>
                        <div className="card-body card-header-info">
                            <div className="card-text">
                                <ul className="list-group">
                                    <li className="list-group-item card-header-warning border-dark">Sole creator and engineer of this full-stack application</li>
                                    <li className="list-group-item card-header-warning border-dark">Clients have ability to register or login with Passport Authentication with encrypted passwords using BCrypt</li>
                                    <li className="list-group-item card-header-warning border-dark">Users have the ability to send status updates using CRUD REST api functions</li>
                                    <li className="list-group-item card-header-warning border-dark">Users can also Donate to the website with a Stripe integration</li>
                                    <li className="list-group-item card-header-warning border-dark">Frontend uses TypeScript and Bootstrap; Backend uses ExpressJS and MySQL </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer card-header-info d-flex justify-content-around">
                            <div>
                                <p className="h5">Deployed project:</p>
                                <a className="link" href="https://chirpr-app.herokuapp.com" target="_blank" rel="noopener noreferrer">chirpr app</a>
                            </div>
                            <div>
                                <p className="h5">Link to repo:</p>
                                <a className="link" href="https://www.github.com/Slap-a-tha-Bass/chirprDB" target="_blank" rel="noopener noreferrer"><i className="bi bi-github h3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Projects;

import React from 'react';
import { Link } from 'react-router-dom';

const ChirprApp = () => {

    return (
        <div className="d-flex justify-content-center px-4">
                    <div className="card rounded shadow-lg my-3 col-md-8">
                        <div className="card-header card-header-info text-center h2">chirpr app</div>
                        <div className="card-body card-header-info">
                            <div className="card-text">
                                <ul className="list-group">
                                    <li className="list-group-item card-header-warning">Sole creator and engineer of this full-stack application</li>
                                    <li className="list-group-item card-header-warning">Clients have ability to register or login with Passport Authentication with encrypted passwords using BCrypt</li>
                                    <li className="list-group-item card-header-warning">Users have the ability to send status updates using CRUD REST api functions</li>
                                    <li className="list-group-item card-header-warning">Users can also Donate to the website with a Stripe integration</li>
                                    <li className="list-group-item card-header-warning">Frontend uses TypeScript and Bootstrap; Backend uses ExpressJS and MySQL </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer card-header-info d-flex justify-content-around align-items-center">
                            <div>
                                <Link to="/projects" className="link"><i className="bi bi-arrow-left-circle-fill"></i></Link>
                            </div>
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
    )
}

export default ChirprApp;

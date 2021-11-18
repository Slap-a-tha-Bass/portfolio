import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeApp = () => {
    return (
        <div className="d-flex justify-content-center px-4">
                    <div className="card rounded shadow-lg my-3 col-md-8">
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
                        <div className="card-footer card-header-info d-flex justify-content-around align-items-center">
                            <div>
                                <Link to="/projects" className="link"><i className="bi bi-arrow-left-circle-fill"></i></Link>
                            </div>
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
    )
}

export default CoffeeApp;

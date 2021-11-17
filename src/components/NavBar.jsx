import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <div className = "NavBar checkered border-bottom border-dark">
            <div className="d-flex">
                <Link to='/' className ="LogoButton mx-4 display-1 shadow px-2">CD</Link>
            </div>
            <div className="d-flex ">
                <Link to='/projects' className ="NavButton mx-4 h4">projects</Link>
                <Link to='/contact' className ="NavButton mx-4 h4">contact</Link>
            </div>
        </div>
    )
}

export default NavBar;

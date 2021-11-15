import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <div className = "NavBar">
            <div className="d-flex">
                <Link to='/' className ="NavButton mx-4">home</Link>
            </div>
            <div className="d-flex ">
                <Link to='/projects' className ="NavButton mx-4">projects</Link>
                <Link to='/contact' className ="NavButton mx-4">contact</Link>
            </div>
        </div>
    )
}

export default NavBar;

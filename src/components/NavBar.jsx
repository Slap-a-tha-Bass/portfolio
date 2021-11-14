import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <div className = "NavBar">
            <Link to='/' className ="NavButton">home</Link>
            <Link to='/projects' className ="NavButton">projects</Link>
            <Link to='/contact' className ="NavButton">contact</Link>
        </div>
    )
}

export default NavBar;

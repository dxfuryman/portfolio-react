import React from "react";
import './nav.css'; // Keep your CSS import
import { NavLink } from 'react-router-dom'; // Import NavLink
import { Link } from 'react-scroll';
import {useState} from "react";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <span id="name">Vineet Somani</span>

            {/* Hamburger Button */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={isMenuOpen ? "line line-1-open" : "line line-1"}></div>
                <div className={isMenuOpen ? "line line-2-open" : "line line-2"}></div>
                <div className={isMenuOpen ? "line line-3-open" : "line line-3"}></div>
            </div>
        </>
    );
}

function Navbar2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="btn-nav">
            {/* Main Navigation (Hidden when menu is closed) */}
            <div className={`btn-nav-main ${isMenuOpen ? 'open' : ''}`}>
                <nav>
                    <NavLink to="/" activeClassName="active"><button className={"btn"}><h2>Home</h2></button></NavLink>
                    <NavLink to="/about" activeClassName="active"><button className={"btn"}><h2>About</h2></button></NavLink>
                    <NavLink to="/contact" activeClassName="active"><button className={"btn"}><h2>Portfolio</h2></button></NavLink>
                </nav>
            </div>
            <nav>
                <div className="special">
                    {/* Hire Me Button */}
                </div>
            </nav>
        </div>
    );
}

export { Navbar, Navbar2 };

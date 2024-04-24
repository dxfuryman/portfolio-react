import React from "react";
import './nav.css'; // Keep your CSS import
import { NavLink } from 'react-router-dom'; // Import NavLink
import { Link } from 'react-scroll';


function Navbar() {
    return (
        <p>
            <span id="name">Vineet Somani</span>
        </p>
    );
}

function Navbar2() {
    return (
        <div className="btn-nav">
            <div className="btn-nav-main">
                <nav>
                    <Link to="home" smooth={true} duration={500}><button className={"btn"}><h2>Home</h2></button></Link>
                    <Link to="about" smooth={true} duration={500}><button className={"btn"}><h2>About</h2></button></Link>
                    <Link to="portfolio" smooth={true} duration={500}><button className={"btn"}><h2>Portfolio</h2></button></Link>
                </nav>
            </div>
            <nav>
                <div className="special">
                    <Link to="hire" smooth={true} duration={500}><button className="btn2"><h2>Hire me </h2></button></Link>
                </div>
            </nav>
        </div>
    );
}

export { Navbar, Navbar2 };

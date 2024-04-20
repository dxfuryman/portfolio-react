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
                    <NavLink to="/" activeClassName="active"><button className={"btn"}><h2>Home</h2></button></NavLink>
                    <NavLink to="/about" activeClassName="active"><button className={"btn"}><h2>About</h2></button></NavLink>
                    <NavLink to="/contact" activeClassName="active"><button className={"btn"}><h2>Portfolio</h2></button></NavLink>
                </nav>
                {/*<nav>*/}
                {/*    <ul>*/}
                {/*    <li  activeClassName="active"><button className={"btn"}><a><h2>Home</h2></a></button></li>*/}
                {/*    <li  activeClassName="active"><button className={"btn"}><h2>About</h2></button></li>*/}
                {/*    <li activeClassName="active"><button className={"btn"}><h2>Portfolio</h2></button></li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
            </div>
            <nav>
                <div className="special">
                    <NavLink to="/hire" activeClassName="active"><button className="btn2"><h2>Hire me </h2></button></NavLink>
                </div>
            </nav>
        </div>
    );
}

export { Navbar, Navbar2 };

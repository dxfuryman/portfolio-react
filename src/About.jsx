import React from "react";
import Profile from "./assets/profile.png";
import react from "./logo/furydom logo.jpg"
export const About = () => {
    return (
        <>
            <div className="profile">
                <p>
                    👋 I’m Vineet Somani, a BTech Computer Science student and frontend development enthusiast. My code is as sharp as Batman’s batarangs, and I bring humor and expertise to the open-source universe. <br/>Whether it’s hitting sixes in cricket, scoring goals in football, or checkmating in chess, I bring the same passion to coding.<br/> Let’s connect and make the web a better place, one line of code at a time! 🦇🏏⚽♟️
                </p>
                <img src={Profile} alt="My profile picture" />
            </div>
        </>
    )
}
export const Tech = () => {
    return(
        <><div className="tech-container">
            <h1>Tech Stack</h1>
        <div className="tech-stack">
            <img src={react} alt="react-logo"/>
            <img src={react} alt="react-logo"/>
            <img src={react} alt="react-logo"/>
            <img src={react} alt="react-logo"/>
            <img src={react} alt="react-logo"/>
            <img src={react} alt="react-logo"/>
            <img src={react} alt="react-logo"/>
            <img src={react} alt="react-logo"/>
            <img src={react} alt="react-logo"/>
        </div>
        </div>
        </>
    )
}
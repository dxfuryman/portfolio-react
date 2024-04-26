import React from "react";
import Profile from "./assets/profile.png";
import react from "./logo/img.png"
import js from "./logo/img_1.png"
import git from "./logo/img_2.png"
import css from "./logo/img_3.png"
import ts from "./logo/img_4.png"
import tailwind from "./logo/img_5.png"
import html from "./logo/img_6.png"
import redux from "./logo/img_7.png"
import router from "./logo/img_8.png"
import github from "./tools logo/img_5.png"
import ii from "./tools logo/img.png"
import ws from "./tools logo/img_1.png"
import vs from "./tools logo/img_2.png"
import linux from "./tools logo/img_3.png"
import cp from "./tools logo/img_4.png"
import sass from "./tools logo/img_6.png"
import chrome from "./tools logo/img_7.png"
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
export const Tools = () => {
    return(
        <><div className="tech-container">
            <h1>Tool Stack</h1>
        <div className="tech-stack">
            <img src={github} alt="react-logo"/>
            <img src={ii} alt="js-logo"/>
            <img src={ws} alt="react-logo"/>
            <img src={vs} alt="react-logo"/>
            <img src={linux} alt="react-logo"/>
            <img src={cp} alt="react-logo"/>
            <img src={sass} alt="react-logo"/>
            <img src={chrome} alt="react-logo"/>

        </div>
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
                <img src={js} alt="js-logo"/>
                <img src={git} alt="react-logo"/>
                <img src={redux} alt="react-logo"/>
                <img src={router} alt="react-logo"/>
                <img src={ts} alt="react-logo"/>
                <img src={tailwind} alt="react-logo"/>
                <img src={css} alt="react-logo"/>
            </div>
        </div>
        </>
    )
}
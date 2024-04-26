import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navbar , Navbar2 } from "./nav.jsx";
import ProfileImage from "./assets/profile.png";
import HeartImg from "./assets/heart.png";
import {About, Tech, Tools} from './About';
import { Contact } from './Contact.jsx';
import { Link, Element } from 'react-scroll';
import Home from './Home';
import { Portfolio } from "./projects/Portfolio.jsx";
import { Hire } from "./Hire.jsx";
import backgroundVideo from "../public/Speed_Of_Light_Background_Loop.mp4";

function Main() {
    const [likes, setLikes] = useState(0);

    const counter = () => {
        setLikes(prevLikes => prevLikes + 1);
    };

    return (
        <>
            <div>
                <video className="video-background" autoPlay loop muted>
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser doesn't support the video tag.
                </video>

            <div className="header">
                <Navbar />
                <Navbar2 />
            </div>


            <Element name="home">
                <Home />
            </Element>

            <Element name="about">
                <About />
                <Tech />
                <Tools />
            </Element>

            <Element name="portfolio">
                <Portfolio />
            </Element>

            <Element name="hire">
                <Hire />
            </Element>

            <div className="like">
                <button onClick={counter}><img src={HeartImg}  /></button>
                <p className="likeText"><strong>Likes {likes}</strong></p>
            </div>
            </div>
        </>
    );
}

function App() {
    return (
        <Main />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

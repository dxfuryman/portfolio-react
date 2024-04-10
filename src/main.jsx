import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Navbar, Navbar2 } from "./nav.jsx";
import ProfileImage from "./assets/profile.png";
import HeartImg from "./assets/heart.png";
import {About} from './About';
import {Contact} from './Contact.jsx';
import Home from './Home';
import {Portfolio} from "./projects/Portfolio.jsx";
// import './projects/Portfolio.css'

function Main() {
    const [likes, setLikes] = useState(0);

    const counter = () => {
        setLikes(prevLikes => prevLikes + 1);
    };

    return (
        <>
            <div className="header">
                <Navbar />
                <Navbar2 />
            </div>



            <div className="like">
                <button onClick={counter}><img src={HeartImg}  /></button>
                <p className="likeText"><strong>Likes {likes}</strong></p>
            </div>
        </>
    );
}

function App() {
    return (
        <Router>
            <Main /> {/* Render the Main component with its content */}

            <Routes>
                <Route path="/" element={<Home />} /> // Using the Home component
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Portfolio />} />
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

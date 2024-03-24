import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Navbar, Navbar2} from "./nav.jsx";
import ProfileImage from "./assets/profile.jpg"
import backgroundimg from "./assets/black-paper-background.webp"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <div className={"header"}>
        <Navbar />
            <Navbar2 />
        </div>

        <div className={"profile"}>
        <img src={ProfileImage} alt={"My profile picture"}/>
        </div>
    </>

)

import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from "react";
import './index.css'
import {Navbar, Navbar2} from "./nav.jsx";
import ProfileImage from "./assets/profile.jpg";
import HeartImg from "./assets/heart.png";

function Main()  {
    const [likes, setLikes] = useState(0);
    const counter = () => {
        setLikes(likes+1);
    }
    return(
    <>
        <div className={"header"}>
            <Navbar />
            <Navbar2 />
        </div>

        <div className={"profile"}>
            <img src={ProfileImage} alt={"My profile picture"}/>

        </div>
        <div className={"like"}>
            <button onClick={counter}><img src={HeartImg}/></button>
            <p className={"likeText"}><strong>Likes {likes}</strong></p>
        </div>

    </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)

import React from "react";
import ProfileImage from "./assets/profile.jpg";
export const About = () => {
    return (
        <>
            <div className="profile">
                <img src={ProfileImage} alt="My profile picture" />
            </div>
        </>
    )
}
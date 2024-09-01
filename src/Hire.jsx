import React from "react";
import './hire.css';
// import { Textarea } from "@/components/ui/textarea"

// Import your SVG icons
import MailIcon from '../src/assets/mail.png'; // Replace with your actual path
import PhoneIcon from '../src/assets/phone.png'; // Replace with your actual path
import GithubIcon from '../src/assets/git.png'; // Replace with your actual path
import LinkedinIcon from '../src/assets/in.png'; // Replace with your actual path
import TwitterIcon from '../src/assets/x.png'; // Replace with your actual path
import InstagramIcon from '../src/assets/insta.png'; // Replace with your actual path

export const Hire = () => {
    return (
        <><div className="Hire-box">
            <div className="con-me"><h1>Contact me</h1></div>
            <div className="login-container">
            <div className="login-box">
                <form action="https://formspree.io/f/xzbnkobd" method="POST">
                    <div className="user-box">
                        <input type="text" name="Full name " required />
                        <label>Full Name</label>
                    </div>
                    <div className="user-box">
                        <input type="email" name="Email" required />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="number" name="Phone number" required />
                        <label>Phone no</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="message" required />
                        <label>message</label>
                    </div>
                    {/*<Textarea />*/}
                    <a href="#">
                        <button type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button>
                    </a>
                </form>
                <div className="info">
                    <div className="info-txt">
                        <img src={MailIcon} alt="Mail Icon" /> vineetsomani61@gmail.com
                        <br/>
                        <img src={PhoneIcon} alt="Phone Icon" /> 9571410883
                    </div>
                    <div className="info-svg">
                        <img src={GithubIcon} alt="Github Icon" />
                        <img src={LinkedinIcon} alt="Linkedin Icon" />
                        <img src={TwitterIcon} alt="Twitter Icon" />
                        <img src={InstagramIcon} alt="Instagram Icon" />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

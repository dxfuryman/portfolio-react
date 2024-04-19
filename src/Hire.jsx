import React from "react";
import './hire.css';
export const Hire = () => {
    return (
        <>
            <div className="con-me"><h1>Contact me</h1></div>
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
                <
            </div>
        </>
    );
};

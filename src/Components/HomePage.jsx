import React from "react";
import self from "../Assets/profile-headshot.png"

import "../Styles/HomePage.css"

function HomePage() {
    return (
        <div className="home-page-container">
            <div className="home-nav-bar">
                <button className="home-nav-bar-item">Home</button>
                <button className="home-nav-bar-item">Resume</button>
                <button className="home-nav-bar-item">Projects</button>
                <button className="home-nav-bar-item">Contact</button>
            </div>
            <div className="home-page">
                <div className="home-page-intro">
                    <h3>Welcome to my world!</h3>
                    <h1>Hi, I'm <span className="highlight-text">Alexander Liu</span><br/>a Software Engineering Student</h1>
                </div>
                <img src={self} className="portrait-picture"/>
            </div>
        </div>
    );
}

export default HomePage;
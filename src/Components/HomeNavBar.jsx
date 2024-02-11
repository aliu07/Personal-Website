import React from "react";
import "../Styles/HomeNavBar.css";
import react from "../Assets/react-logo.svg"

function HomeNavBar() {
    return (
        <div className="home-nav-bar">
            <div className="logo-container">
                <div className="logo-text">POWERED BY</div>
                <img className="logo-image" alt="ERROR" src={react}/>
            </div>
            <div className="nav-bar-item-container">
                <button className="home-nav-bar-item">Home</button>
                <button className="home-nav-bar-item">Resume</button>
                <button className="home-nav-bar-item">Projects</button>
                <button className="home-nav-bar-item">Hobbies</button>
                <button className="home-nav-bar-item">Contact</button>
            </div>
        </div>
    );
}

export default HomeNavBar;
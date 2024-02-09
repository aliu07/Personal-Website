import React from "react";
import "../Styles/HomeNavBar.css";

function HomeNavBar() {
    return (
        <div className="home-nav-bar">
            <div className="logo-container">
                INSERT LOGO HERE
            </div>
            <div className="nav-bar-item-container">
                <button className="home-nav-bar-item">Home</button>
                <button className="home-nav-bar-item">Resume</button>
                <button className="home-nav-bar-item">Projects</button>
                <button className="home-nav-bar-item">Contact</button>
            </div>
        </div>
    );
}

export default HomeNavBar;
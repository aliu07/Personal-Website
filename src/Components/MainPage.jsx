import React from "react";
import HomeNavBar from "./HomeNavBar";

import "../Styles/MainPage.css"

function MainPage() {
    return (
        <div className="main-page-container">
            <HomeNavBar></HomeNavBar>
            <div className="home-page">
                <div className="home-page-intro">
                    <h3 className="off-white-text">WELCOME TO MY WORLD!</h3>
                    <h1>Hi, I'm <span className="highlight-text">Alexander Liu</span></h1>
                    <h2>a Developer / Student / Athlete</h2>
                    <p className="off-white-text">Detail-oriented and dedicated Office Administrator seeking a challenging position where my organizational skills, creativity, and proficiency in graphic design can contribute to a positive work environment.</p>
                </div>
                <div className="portrait-picture-container">
                    <div className="lighting-square">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
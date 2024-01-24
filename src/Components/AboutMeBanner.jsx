import React from "react";

import ResumeAndProjectsButtons from "./ResumeAndProjectsButtons";

import '../Styles/AboutMeBanner.css'

function AboutMeBanner() {
    return (
        <div className="about-me-banner">
            <h1>HELLO</h1>
            <p className="subtitle">Welcome to my personal web page!</p>
            <div className="buttons-container">
                <ResumeAndProjectsButtons></ResumeAndProjectsButtons>
            </div>
            <p>
            I am a 2nd year software engineering student in the co-op program at McGill University. I thrive in problem-solving, consistently seeking and embracing challenges as opportunities for personal and professional growth. Beyond my technical background, I am also invested in other hobbies and extracurriculars that you can find out about by below.
            </p>
        </div>
    );
}

export default AboutMeBanner;
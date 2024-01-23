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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore minus neque ipsum ex praesentium quaerat voluptatum assumenda aspernatur, repellendus natus ut consectetur earum excepturi nostrum, maiores recusandae reprehenderit. Reprehenderit, optio.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam totam aspernatur, labore sequi perspiciatis eius praesentium, ab ipsa nihil possimus quas quos porro in. Officia excepturi atque repudiandae perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quos dignissimos soluta suscipit ullam sapiente temporibus dicta dolore facilis ratione doloribus fugit obcaecati blanditiis tempora, earum ab voluptates! Et, atque?
            </p>
        </div>
    );
}

export default AboutMeBanner;
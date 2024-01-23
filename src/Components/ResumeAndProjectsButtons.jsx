import React from "react";

import '../Styles/ResumeAndProjectsButtons.css'

function ResumeAndProjectsButtons() {
    return (
        <div className="button-row">
            <button className="resume-button button-cell">RESUME</button>
            <button className="projects-button button-cell">PROJECTS</button>
        </div>
    );
}

export default ResumeAndProjectsButtons;
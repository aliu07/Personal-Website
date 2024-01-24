import React from "react";
import '../Styles/SocialMediaBar.css'
import github from '../Assets/github-logo.svg'
import linkedin from '../Assets/linkedin-logo.svg'
import github from '../Assets/leetcode-logo.svg'

function SocialMediaBar() {
    return (
        <div className="social-media-container">
            <a href={"https://www.linkedin.com/in/alexander-liu22/"} target="_blank" rel="noopener noreferrer" className="icon-container">
                <img src={linkedin}/>
            </a>
            <a href={"https://github.com/aliu07"} target="_blank" rel="noopener noreferrer" className="icon-container">
                <img src={github}/>
            </a>
            <a href={"https://leetcode.com/TookaPack/"} target="_blank" rel="noopener noreferrer" className="icon-container">
                <img src={github}/>
            </a>
        </div>
    );
}

export default SocialMediaBar;
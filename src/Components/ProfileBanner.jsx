import React from "react";

import SocialMediaBar from "./SocialMediaBar";

import '../Styles/ProfileBanner.css'
import profile from '../Assets/profile-headshot.png'

function ProfileBanner() {
    return (
        <div className="profile-banner">
            <div className="profile-pic-container">
                <img src={profile} className="profile-pic"/>
                <div className="name-container">
                    <h2>Alexander</h2>
                    <h2>Liu</h2>
                </div>
                <svg>
                    <rect/>
                </svg>
                <p className="job-title">Software Engineering Student,</p>
                <p className="job-title">McGill University</p>
            </div>
            <div className="profile-social-bar">
                <SocialMediaBar></SocialMediaBar>
            </div>
        </div>
    );
}

export default ProfileBanner;
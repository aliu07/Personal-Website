import React from "react";

import ProfileBanner from './ProfileBanner'
import AboutMeBanner from "./AboutMeBanner";

import '../Styles/HomeBanner.css'

function HomeBanner() {
    return (
        <div className="home-banner">
            <div className="home-banner-left">
                <ProfileBanner></ProfileBanner>
            </div>
            <div className="home-banner-right">
                <AboutMeBanner></AboutMeBanner>
            </div>
        </div>
    );
}

export default HomeBanner;
import React from "react";
import { useState } from "react";

import '../Styles/WelcomePage.css'

function WelcomePage() {
    const [animationComplete, setAnimationComplete] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleAnimationEnd = () => {
      setAnimationComplete(true);
    };
  
    const handleButtonClick = () => {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
      });
      setButtonClicked(true);
    };

    return (
        <div className='parent-container'>
            <div className='welcome-text-container'>
                <div className='welcome-text-wrapper'>
                <p className={`welcome-text ${animationComplete ? 'animation-complete' : ''}`} onAnimationEnd={handleAnimationEnd}>Welcome to my <span className='highlight-text'>personal</span> website!</p>
                </div>
            </div>
            <div className={`proceed-button-container ${animationComplete ? 'proceed-button-show' : ''}`}>
              <button className='proceed-button' onClick={handleButtonClick}>Proceed</button>
            </div>
        </div>
    );
}

export default WelcomePage;
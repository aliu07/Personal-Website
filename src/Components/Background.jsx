import React from "react";
import '../Styles/Background.css';
import waves from '../Assets/waves-background.jpg'

function Background() {
    return (
        <div className='fullscreen'>
            <img className='left' src={waves}/>
            <div className='right'></div>
        </div>
    );
}

export default Background;
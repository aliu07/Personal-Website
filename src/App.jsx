import './App.css';
import { useState } from 'react';

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  }

  return (
    <div className='parent-container'>
      <div className='welcome-text-container'>
        <div className='welcome-text-wrapper'>
        <p className={`welcome-text ${animationComplete ? 'animation-complete' : ''}`} onAnimationEnd={handleAnimationEnd}>Welcome to my <span className='highlight-text'>personal</span> website!</p>
        </div>
      </div>
      <div className={`proceed-button-container ${animationComplete ? 'proceed-button-show' : ''}`}>
            <button className='proceed-button'>Proceed</button>
      </div>
    </div>
  );
}

export default App;
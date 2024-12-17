import React, { useState } from 'react';
import './index.css';

const LightDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="header">
          <h1>Light / Dark</h1>
          <p>Toggle light or dark to customize your interface</p>
        </div>
        
        <div className="toggle-container" onClick={toggleMode}>
          <div className={`toggle ${isDarkMode ? 'active' : ''}`}>
          </div>
        </div>
        
        <div className="icon">
          <img 
            src={isDarkMode ? '/moon.png' : '/sun.png'} 
            alt={isDarkMode ? 'Moon' : 'Sun'} 
            className="mode-icon" 
          />
        </div>
      </div>
    </div>
  );
};

export default LightDarkMode;

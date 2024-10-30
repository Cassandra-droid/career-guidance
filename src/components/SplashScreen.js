// SplashScreen.js
import React, { useEffect } from 'react';
import '../styles/SplashScreen.css';
import logo from '../assets/logo.png';

function SplashScreen({ onLoadingComplete }) {
  useEffect(() => {
    // Set a timeout to simulate loading
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 6000); // Adjust duration as needed (3 seconds here)

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="splash-screen">
      <img src={logo} alt="" className="splash-logo" />
    </div>
  );
}

export default SplashScreen;

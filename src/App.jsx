import React, { useState, useRef } from 'react';
import './App.css';
import vid from '../src/Busy_Parking_Lot_-_Aerial_Time-Lapse.mp4'

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>Welcome to the about page of Jurassic Parking.</p>
    </div>
  );
}

function App() {
  const fileInputRef = useRef(null);
  const [currentPage, setCurrentPage] = useState('home'); // Options: 'home', 'aboutUs'
  // Update the initial video source to use process.env.PUBLIC_URL for local development
  const [videoSrc, setVideoSrc] = useState(process.env.PUBLIC_URL + '../src/Busy_Parking_Lot_-_Aerial_Time-Lapse.mp4');

  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
  };

  const handleVideoInputClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoSrc(videoUrl);
    }
  };

  return (
    <div className="App">
      <video autoPlay loop muted className="App-background-video">
        <source src={vid} autoPlay loop muted />
        Your browser does not support the video tag.
      </video>
      
      <nav className="App-nav">
        <button onClick={() => navigateTo('home')}>Home</button>
        <button onClick={() => navigateTo('aboutUs')}>About Us</button>
      </nav>

      {currentPage === 'home' && (
        <header className="App-header">
          <h1>Jurassic Parking</h1>
          <p>Enter the world of smart parking.</p>
          <a className="App-link" href="#" onClick={handleVideoInputClick}>
            Input video
          </a>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
            accept="video/*"
          />
        </header>
      )}

      {currentPage === 'aboutUs' && <AboutUs />}
    </div>
  );
}

export default App;

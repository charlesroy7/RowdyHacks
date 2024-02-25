import React, { useState, useRef } from 'react';
import './App.css';
import vid from '../src/Busy_Parking_Lot_-_Aerial_Time-Lapse.mp4'

function AboutUs() {
  return (
    <div className="about-us-container">
      <div style={{ fontSize: '28px' ,fontWeight: 'bold' }}>About us</div>
      <div style={{ fontSize: '24px' }}>We are an enthusiastic team of novice developers from Dallas, TX, embarking on our first hackathon journey, with the exception of one team member. Our diverse group is composed of students majoring in Computer Information Systems and Computer Science, all united by a passion for technology and innovation. For this hackathon, we set our sights on addressing a pressing issue faced by the University of Texas at San Antonio (UTSA): the challenge of finding parking in a densely populated urban area. Our solution leverages artificial intelligence to monitor parking space availability in real-time, providing invaluable insights into parking patterns and trends. This not only eases the immediate stress of finding parking but also offers data-driven strategies to optimize parking management and improve the overall campus experience.</div>
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

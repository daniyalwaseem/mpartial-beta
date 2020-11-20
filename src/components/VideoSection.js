import React from 'react';
import '../App.css';
import './VideoSection.css';

function VideoSection() {
  return (
    <>
      <div className='video-container'>
        <video src='/videos/homepage.mp4' autoPlay loop muted />
        <div className="main_banner_text">
          Impartial, Remote, 3rd-Party,
          <br />
          Estimating Engine
        </div>
      </div>
    </>
  );
}

export default VideoSection;
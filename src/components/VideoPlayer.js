// src/components/VideoPlayer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const { videoSrc } = useParams();

  if (!videoSrc) {
    return <div className="video-container">No video selected</div>;
  }

  return (
    <div className="video-container">
      <ReactPlayer
        url={videoSrc}
        controls
        width="100%"
        height="100vh"
        playing
        onError={(e) => console.error('Error during playback:', e)}
      />
    </div>
  );
};

export default VideoPlayer;

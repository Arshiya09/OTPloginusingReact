
import React from 'react';
import '../styles/VideosScroll.css';

const VideosScroll = ({ videos }) => {
  return (
    <div className="videos-scroll-container">
      <div className="videos-slider">
        {videos.map((item, index) => (
          <div key={index} className="video-card">
            <img
              src={item.thumbnail || "https://via.placeholder.com/300x200"}
              alt={item.title}
              className="video-thumbnail"
            />
            <h3>{item.title}</h3>
            <p className="video-description">{item.description}</p>
            <a
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosScroll;

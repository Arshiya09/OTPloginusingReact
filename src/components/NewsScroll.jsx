

import React from 'react';
import '../styles/NewsScroll.css';

const NewsScroll = ({ news }) => {
  return (
    <div className="news-scroll-container">
      <div className="news-slider">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <img
              src={item.image || "https://via.placeholder.com/300x200"}
              alt={item.title}
              className="news-image"
            />
            <h3>{item.title}</h3>
            <p className="news-source">Source: {item.source || "Unknown"}</p>
            <p className="news-description">{item.description}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsScroll;

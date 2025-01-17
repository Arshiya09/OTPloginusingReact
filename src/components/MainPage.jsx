import React, { useEffect, useState } from 'react';
import NewsScroll from './NewsScroll';
import VideosScroll from './VideosScroll';
import '../styles/MainPage.css';

const MainPage = () => {
  const [news, setNews] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://estatecircleapi.firsteconomy.com/api/news?page=1&search',
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VzdGF0ZWNpcmNsZWFwaS5maXJzdGVjb25vbXkuY29tL2FwaS92ZXJpZnlPdHAiLCJpYXQiOjE3MzY5NDc5NjAsImV4cCI6MTczNzgxMTk2MCwibmJmIjoxNzM2OTQ3OTYwLCJqdGkiOiI1bmpOYW9TZ3ZBWFhVUzhSIiwic3ViIjoiMTA0NyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.f7y-XhqD1qw2jueSDJxEUt8ux-tTVFCTjjNYCBr-Mbc`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setNews(data.data || []); // Assuming the news data is in the "data" property
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    const fetchVideos = async () => {
      try {
        const response = await fetch(
          'https://estatecircleapi.firsteconomy.com/api/learningVideos?page=1&search=',
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VzdGF0ZWNpcmNsZWFwaS5maXJzdGVjb25vbXkuY29tL2FwaS92ZXJpZnlPdHAiLCJpYXQiOjE3MzY5NDc5NjAsImV4cCI6MTczNzgxMTk2MCwibmJmIjoxNzM2OTQ3OTYwLCJqdGkiOiI1bmpOYW9TZ3ZBWFhVUzhSIiwic3ViIjoiMTA0NyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.f7y-XhqD1qw2jueSDJxEUt8ux-tTVFCTjjNYCBr-Mbc`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setVideos(data.data || []); 
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchNews();
    fetchVideos();
  }, []);

  return (
    <div className="main-page">
      <h1 className='Header'>Welcome to the Main Page</h1>


      <div className="news-container">
        <h2 className='News-header'>News Section</h2>
        <NewsScroll news={news} />
      </div>


      <div className="videos-container">
        <h2 className='Video-header'>Videos Section</h2>
        <VideosScroll videos={videos} /></div>
    </div>
  );
};

export default MainPage;

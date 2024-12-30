import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TechNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/technews')  // Corrected URL
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div>
      <h1>Latest Tech News</h1>
      {news.length > 0 ? (
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default TechNews;

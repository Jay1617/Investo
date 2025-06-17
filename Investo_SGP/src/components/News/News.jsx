import React from 'react'
import './News.css'
function News() {
  return (
    <div className="dashboard_news">
      <div className="news_h2">
        <h2>
          <span className="news_h2_">Key Highlights in Stock Market Today</span>
        </h2>
      </div>
      <div className="comingSoon">
        <div>
          <img
            src="../news.jpg"
            alt="Coming Soon"
            width={"500px"}
            height={"500px"}
          />
        </div>
      </div>
    </div>
  );
}

export default News
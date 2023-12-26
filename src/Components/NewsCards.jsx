import React from "react";
import "./NewsCards";
const NewsCards = ({ title, description, imageUrl, newsUrl }) => {
  return (
    <div className="card h-100 mb-3">
      <img src={imageUrl} className="card-img-top img-fluid " alt="img" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light btn-sm mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCards;

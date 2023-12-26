// News.js
import React, { useEffect, useState } from "react";
import NewsCards from "./NewsCards";
import Shimmer from "./Shimmer/Shimmer";

const News = ({ country, PageSize, category, apikey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
    updateNews();
  };

  const handlePrevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    updateNews();
  };

  const fetchMoreData = () => {
    updateNews();
  };

  const updateNews = async () => {
    setLoading(true);

    try {
      const url = `https://newsapi.org/v2/top-headlines?&country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${PageSize}`;
      const response = await fetch(url);
      const jsonData = await response.json();

      console.log("jsonData:", jsonData); // Log the data

      setArticles((prevArticles) =>
        page === 1
          ? [...jsonData.articles]
          : [...prevArticles, ...jsonData.articles]
      );

      setTotalArticles(jsonData.totalResults);
    } catch (error) {
      console.error("Error while fetching the data", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    document.title = `${category} - Brief`;
    updateNews();
  }, [category, country, PageSize, apikey, page]);

  return (
    <div className="container my-3">
      {loading && <Shimmer />}

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {!loading &&
            articles.map((element, index) => {
              const startIndex = (page - 1) * PageSize;
              const endIndex = startIndex + PageSize;

              if (index >= startIndex && index < endIndex) {
                return (
                  <div className="col-md-4 mb-3" key={element.url}>
                    <NewsCards
                      title={element.title}
                      description={element.description}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.hindustantimes.com/tech/img/2023/05/20/1600x900/exoplanet_1684604246137_1684604260516.png"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      Source={element.author}
                    />
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>

      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-secondary"
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button
          disabled={page * PageSize >= totalArticles}
          type="button"
          className="btn btn-secondary"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;

import React, { useEffect, useState, useRef } from "react";
import NewsCards from "./NewsCards";
import Shimmer from "./Shimmer/Shimmer";

const News = ({ country, PageSize, category, apikey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  // Creating filter
  const countryRef = useRef("in");
  const sourceNamesRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNews();
  };

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
    updateNews();
  };

  const handlePrevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    updateNews();
  };

  const updateNews = async () => {
    setLoading(true);

    try {
      const countryValue = countryRef.current.value;
      const sourceNamesValue = sourceNamesRef.current.value;

      const url = `https://newsapi.org/v2/top-headlines?&country=${countryValue}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${PageSize}`;
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData);

      // Filter articles based on form data
      const filteredArticles = jsonData.articles.filter((article) => {
        return (
          (!sourceNamesValue ||
            article.source.name
              .toLowerCase()
              .includes(sourceNamesValue.toLowerCase())) &&
          true
        );
      });

      setArticles((prevArticles) =>
        page === 1
          ? [...filteredArticles]
          : [...prevArticles, ...filteredArticles]
      );

      setTotalArticles(filteredArticles.length);
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
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" ref={countryRef} placeholder="Country" />
            <input
              type="text"
              ref={sourceNamesRef}
              placeholder="Source Names"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
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
                      Source={element.source.name}
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

import React from "react";
import NewsItem from "./NewsItem";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true)

  

  const updateNews = async () => {
    props.setProgress(10);
    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=79696b53064244988dd39b0c5f67057a`;
      setLoading(true);
    let Data = await fetch(url);
    let parsedData = await Data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100)
  };

  useEffect(() => {
    updateNews();
  }, []);


  const fetchData = async () => {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=79696b53064244988dd39b0c5f67057a`;
    let Data = await fetch(url);
    let parsedData = await Data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };


  return (
    <>
    <h2 className="text-center " style={{ margin: "40px 0px", marginTop: '90px' }}>NewsOx1 -Top {props.category.charAt(0).toUpperCase()}{props.category.slice(1)} Headlines</h2>
    {loading && <Spinner/>}
    <InfiniteScroll
  dataLength={articles.length} 
  next={fetchData}
  hasMore={true}
loader={<Spinner/>}
  >
      <div className="container my-3">
        <div className="row">
          {articles.map((element) => { 
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0,35):""}
                  description={element.description?element.description.slice(0,125):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
      </InfiniteScroll>
    </>
  );

};
News.defaultProps = {
    country: "in",
    
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    
    category: PropTypes.string,
  };
export default News;

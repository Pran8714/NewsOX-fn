import React from "react";
import imgback from "./imgback.jpg";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  
  
return ( <div className="my-3" >
    <div  className="card" >
      <div style={{display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'}}>
        <span class="badge rounded-pill text-bg-danger" style={{ left:'90%', zIndex: '1' }}>{source}</span>
      </div>
      <div>
        <div  className="card" >
          <img
            src={imageUrl ? imageUrl : imgback}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" >
            <h5 className="card-title">{title ? title : "Not Available!"}...</h5>
            <p className="card-text">
              <small style={{ color: "red" }}>
                by {author ? author : "Unknown"} on{" "}
                {date ? new Date(date).toGMTString() : ""}
              </small>
            </p>
            <p className="card-text" >{description}...</p>
          
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )};
;

export default NewsItem;

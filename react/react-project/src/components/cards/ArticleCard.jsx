import React from "react";

import "./ArticleCard.styles.css";

const ArticleCard = ({ title, desc, category, imgUrl }) => {
  return (
    <article className="card">
      <figure>
        <img src={imgUrl} alt="image" />
      </figure>
      <div className="content">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="read-more">
        <a href="#">Read more</a>
      </div>
    </article>
  );
};

export default ArticleCard;

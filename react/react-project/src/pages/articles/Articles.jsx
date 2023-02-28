import React from "react";

import "./Articles.css";
import { data } from "../../data";

import ArticleCard from "../../components/cards/ArticleCard";

const news = data.filter((article) => {
  return article.category.toLocaleLowerCase() === "news";
});

const Articles = () => {
  return (
    <section className="articles">
      {news.map((article) => {
        return <ArticleCard {...article} key={article.id} />;
      })}
    </section>
  );
};

export default Articles;

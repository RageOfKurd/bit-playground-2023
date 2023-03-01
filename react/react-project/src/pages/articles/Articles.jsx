import React, { useState, useEffect } from "react";

import "./Articles.css";
import { data } from "../../data";

import ArticleCard from "../../components/cards/ArticleCard";
import Button from "../../components/button/Button";

const Articles = () => {
  const [filteredData, setFilteredData] = useState(data);

  const [fetchData, setFetchData] = useState([]);

  const handleFilter = (category) => {
    const dataFiltered = data.filter((article) => {
      return article.category.toLocaleLowerCase() === category;
    });
    setFilteredData(dataFiltered);
  };

  const handleAllData = () => {
    setFilteredData(data);
  };

  const requestData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    console.log(countries);
    setFetchData(countries);
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <>
      <Button text="All" handleClick={handleAllData} />
      <Button text="News" handleClick={() => handleFilter("news")} />
      <Button text="Blogs" handleClick={() => handleFilter("blog")} />
      <section className="articles">
        {filteredData.map((article) => {
          return <ArticleCard {...article} key={article.id} />;
        })}
      </section>
    </>
  );
};

export default Articles;

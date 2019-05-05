import React from "react";

const Article = ({ title, name, article }) => {
  const styleArticles = {
    borderBottom: "1px solid #262626",
    margin: "20px 0px",
    paddingBottom: "20px"
  };
  const styleTitle = {
    marginLeft: 15,
    fontSize: 25,
    textTransform: "uppercase"
  };
  const StyleName = {
    margin: "0px 20px 20px",
    fontSize: 12
  };
  const styleArticle = {
    marginLeft: 20
  };

  return (
    <article className="article" style={styleArticles}>
      <h1 style={styleTitle}>{title}</h1>
      <h4 style={StyleName}>{name}</h4>
      <p style={styleArticle}>{article}</p>
    </article>
  );
};

export default Article;

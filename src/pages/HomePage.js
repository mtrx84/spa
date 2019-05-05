import React from "react";
import Article from "../components/Article";
const text = [
  {
    id: 1,
    title: '"O obrotach ciał niebieskich"',
    name: "Mikołaj Kopernik",
    article:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem earum accusantium voluptatibus ipsam fuga eligendi enim soluta reprehenderit molestias corrupti cum, repellat deserunt nemo magni iusto veritatis eveniet dolore expedita."
  },
  {
    id: 2,
    title: '"Bla bla car"',
    name: "Adianna Nowak",
    article:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem earum accusantium voluptatibus ipsam fuga eligendi enim soluta reprehenderit molestias corrupti cum, repellat deserunt nemo magni iusto veritatis eveniet dolore expedita."
  },
  {
    id: 3,
    title: '"Ktokolwiek widział, ktokolwiek wie"',
    name: "Krzysztof Ibisz",
    article:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem earum accusantium voluptatibus ipsam fuga eligendi enim soluta reprehenderit molestias corrupti cum, repellat deserunt nemo magni iusto veritatis eveniet dolore expedita."
  }
];

const HomePage = () => {
  const articles = text.map(article => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{articles}</div>;
};

export default HomePage;

import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/header.css";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const images = [
  { path: "/", img: img1, alt: "zdjęcie" },
  { path: "/products", img: img2, alt: "zdjęcie" },
  { path: "/contacts", img: img3, alt: "zdjęcie" },
  { path: "/admin", img: img3, alt: "zdjęcie" }
];

const Header = () => {
  const img = images.map((image, id) => (
    <Route
      key={id}
      path={image.path}
      exact
      render={() => <img src={image.img} alt={image.alt} />}
    />
  ));

  return (
    <Switch>
      {/* <Route path="/" exact render={() => <img src={img1} alt="złom" />} />
      <Route path="/products" render={() => <img src={img2} alt="złom" />} />
      <Route path="/contacts" render={() => <img src={img3} alt="złom" />} />
      <Route path="/admin" render={() => <img src={img1} alt="złom" />} /> */}
      {img}
      <Route
        render={() => <h1 style={{ textAlign: "center" }}>Not found...</h1>}
      />
    </Switch>
  );
};

export default Header;

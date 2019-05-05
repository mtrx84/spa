import React from "react";
import { Route } from "react-router-dom";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Route
        path="/"
        exact
        render={() => {
          return <p>Jesteś na stronie głównej</p>;
        }}
      />
      <Route
        path="/:id"
        render={props => {
          const namePage = [
            { id: "products", name: "produkty" },
            { id: "product", name: "produkt" },
            { id: "contacts", name: "kontakt" },
            { id: "admin", name: "panel administracyjny" }
          ];
          let name;
          namePage.forEach(index =>
            index.id === props.match.params.id
              ? (name = index.name)
              : props.match.params.id
          );
          console.log(name);
          return (
            <p>
              Jesteś na stronie
              <span> {name}</span>
              <Route
                path="/:id/:id"
                render={props => {
                  return <span> -> {props.match.params.id}</span>;
                }}
              />
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;

import React from "react";
import "../styles/navigation.css";
import { NavLink } from "react-router-dom";

const nav = [
  { name: "start", path: "/", exact: true },
  { name: "produkty", path: "/products" },
  { name: "kontakt", path: "/contacts" },
  { name: "panel", path: "/admin" }
];

const Navigation = () => {
  const navigation = nav.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>{navigation}</ul>
    </nav>
  );
};

export default Navigation;

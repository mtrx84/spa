import React from "react";
import { Route } from "react-router-dom";
import "../styles/page.css";
import { Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import ProductsPage from "../pages/ProductsPage";
import ProductListPage from "../pages/ProductListPage";

import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" component={ProductListPage} />
      <Route path="/product/:id" component={ProductsPage} />
      <Route path="/contacts" component={Contact} />
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Page;

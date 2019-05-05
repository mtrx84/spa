import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const ProductsPage = props => {
  console.log(props);
  return (
    <div className="product">
      <h2>Strona produktu</h2>
      <Product id={props.match.params.id} />
      <Link to="/products">Powrót do listy produktów</Link>
    </div>
  );
};

export default ProductsPage;

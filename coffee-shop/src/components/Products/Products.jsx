import React from "react";
import { products } from "../utils/products";
import { Link } from "react-router-dom";
import styls from "./products.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Products() {
  return (
    <div className={styls.outerSection}>
      <div className={styls.container}>
        <div className={styls.top}>
          <h3>Choose Your Coffee</h3>
          <h1>Recent Products</h1>
        </div>

        <div className={styls.flex}>
          {products.map((product) => (
            <div className={styls.card} key={product.id}>
              <img src={product.image} alt={product.name} />
              <p className={styls.name}>{product.name}</p>
              <p className={styls.des}>{product.description}</p>
              <h2 className={styls.price}>${product.price}</h2>
              <button className={styls.button}>
                <ShoppingCartIcon /> Add to Cart
              </button>
            </div>
          ))}
        </div>
        <Link to="/product">
        <button className={styls.allp}>View all products</button>
        </Link>
      </div>
    </div>
  );
}

export default Products;

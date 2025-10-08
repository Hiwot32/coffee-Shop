import React from "react";
import { motion } from "framer-motion";
import { products } from "../utils/products";
import { Link } from "react-router-dom";
import styls from "./products.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Products() {
  // Variants for animation reuse
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className={styls.outerSection}>
      <div className={styls.container}>
        {/* Top Titles */}
        <motion.div
          className={styls.top}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once:false }}
        >
          <h3>Choose Your Coffee</h3>
          <h1>Recent Products</h1>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          className={styls.flex}
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once:false }}
        >
          {products.map((product) => (
            <motion.div
              className={styls.card}
              key={product.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <p className={styls.name}>{product.name}</p>
              <p className={styls.des}>{product.description}</p>
              <h2 className={styls.price}>${product.price}</h2>
              <button className={styls.button}
              >
                <ShoppingCartIcon /> Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products Button */}
        <Link to="/product">
          <motion.button
            className={styls.allp}
            whileHover={{
              scale: 1.05,
              backgroundColor: "white",
              color: "black",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View all products
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Products;

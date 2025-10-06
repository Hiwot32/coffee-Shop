import React from 'react'
import product from './product.module.css'
import { allProducts } from '../../components/utils/productsPage'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Product() {
  return (
    <div>
              <div className={product.topSection}>
                  <div className={product.texts}>
                    <h1>Products</h1>
                    <p>CoffeeKing</p>
                  </div>
            </div>
              <h1 className={product.title}>All Products</h1>
            <div className={product.container}>
              
              {allProducts.map((data)=>(
                <div className={product.card}>
                  <img src={data.image} />
                  <h2>{data.name}</h2>
                  <p>{data.desc}</p>
                  <h3>${data.price}</h3>
                  <button><ShoppingCartIcon />Add to Cart</button>
                </div>
              ))}

            </div>

      
    </div>
  )
}

export default Product

import React, { useMemo, useState, useEffect } from 'react'
import axios from "axios"
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

import '../css/viewprod.css'
import { useNavigate, useParams } from 'react-router-dom'
import Products from "../Api/data.json"

export default function ViewProd() {
  const navigate = useNavigate();

  const cart = () => {
    navigate("/cart");
  }

  const { id } = useParams();

  return (
    <>
      <Header/>

      <Nav/>
      <main>
        <h2>Product Details</h2>
        <div class="prod-details">
          <div class="product-image">

            {Products.length > 0 && (
              <img
                src={Products[id - 1].image}
                alt="Product Image"
              />
              
            )}
          </div>
          {Products.length>0 && (<div class="product-info">
            <h3>{Products[id-1].title}</h3>
            <p class="viewpara">
              {Products[id-1].description}
            </p>
            <p>Price: ${Products[id-1].price}</p>
            
            <div class="quantity">
              <button
                id="decrement"
                type="button"
                class="btn btn-outline-primary"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                value="1"
                min="1"
                class="form-control"
              />
              <button
                id="increment"
                type="button"
                class="btn btn-outline-primary"
              >
                +
              </button>
            </div>
            <button id="submit" type="submit" class="btn btn-primary" onClick={()=>{
              navigate('/cart')
            }}>
              Add to cart
            </button>
          </div>)}
          
        </div>
      </main>
      <Footer/>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import "../css/style.css"
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import { Form, FormControl, InputGroup, Container, Row, Col, Button } from "react-bootstrap";
import Products from "../Api/data.json"

export default function List() {
  const navigate = useNavigate();
 
    
  const cart=()=>{
    navigate("/cart");
  }

  const prod=(e)=>{
    console.log(e);
    
   navigate(`/viewprod/${e}`)
   
  }

  return (
    <>
      <Header/>
      <Nav/>

    

      <main>
          <h1>Available Products</h1>

          <div class="products">
            
            {Products.map((e, i) => {


              return (
                <div class="product" key={e._id}>

                  <img
                    src={e.image}
                    alt="Image 1"
                  />

                  <div>
                    <h2>{e.title}</h2>
                    
                    <button class="view-button" onClick={() => prod(e._id)}>View</button>
                  </div>

                </div>
              );

            })}



            
          </div>
        </main>


      <Footer/>
    </>
  )
}

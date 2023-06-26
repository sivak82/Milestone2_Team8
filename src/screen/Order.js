import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import { Button } from 'react-bootstrap';

import '../css/aboutus.css'
import '../css/Signup_Login.css'
import '../css/style.css'
import '../css/viewprod.css'

export default function Order() {

    
    return (
        <>

           <Header/>
           <Nav/>


            <ListGroup >
                <ListGroup.Item><div style={{
                    backgroundColor: "#003ea5", height: "125pxpx", boxShadow: "2px 2px 2px 1px white", margin: "10px", padding: "25px 10px 10px 25px", borderRadius: "25px"
                }}>
                    <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between" }}>
                        <div> <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "100px", width: "100px" }} /></div> 
                        <div style={{color:"whitesmoke"}}><h3>Price:$30</h3>
                                <h3> Number of items: 2</h3>
                        </div>
                        
                        <div style={{color:"whitesmoke"}}>
                           <h3>Expected Delivery Date:</h3>
                           <h3>24th May</h3>
                        </div>
                        
                    </div >
                </div>
                </ListGroup.Item>
                
                <ListGroup.Item><div style={{
                    backgroundColor: "#003ea5", height: "125px", boxShadow: "2px 2px 2px 1px white", margin: "10px", padding: "25px 10px 10px 25px", borderRadius: "25px"
                }}>
                    <div style={{  display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                   <div><img src="https://images.unsplash.com/photo-1524012435847-659cf8c3d158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNvY2NlciUyMGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "100px", width: "100px" }} /></div> 
                   <div style={{color:"whitesmoke"}}><h3>Price:$10</h3>
                   <h3> Number of items: 1</h3>
                   </div>
                   <div style={{color:"whitesmoke"}}>
                           <h3>Expected Delivery Date:</h3>
                           <h3>2th Aug</h3>
                        </div> 
                   </div>

                   

                </div>
            </ListGroup.Item>

        </ListGroup >

       <Footer/>
      
        </>
    )
}

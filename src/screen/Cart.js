import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup'

import '../css/aboutus.css'
import '../css/Signup_Login.css'
import '../css/style.css'
import '../css/viewprod.css'

export default function Cart() {
    const navigate = useNavigate();

    const baseURL = "https://fakestoreapiserver.reactbd.com/products";
    const [Products, setpro] = useState([]);


    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setpro(response.data);
            console.log(Products);
        }).catch(() => {
            alert("Page is not working.Please reload the page");
        })


    }, []);

    const cart = () => {
        navigate("/cart");
    }

    const conf=()=>{
        alert("order successful")
        navigate('/order')
    }

    return (
        <>

            <Header/>
            <Nav/>


            <ListGroup >
                <ListGroup.Item><div style={{
                    backgroundColor: "#003ea5",
                     height: "125pxpx", boxShadow: "2px 2px 2px 1px white", margin: "10px", padding: "25px 10px 10px 25px", borderRadius: "25px"
                }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div> <img src="https://images.unsplash.com/photo-1600185822006-732898dd0eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZmJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "100px", width: "100px" }} /></div>
                        <div style={{ color: "whitesmoke" }}><h3>Price:$30</h3></div>
                        <div>
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

                    </div >
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                        <div><Button>Remove</Button></div>
                        <div>
                            <Popup  trigger=
                                {<button> OrderNow </button>}
                                position="left center">
                                <div style={{backgroundColor:"rgb(140, 50, 142)",padding:"10px",boxShadow:"5px 10px 10px 5px grey"}}>
                                    <div style={{display:"flex",justifyContent:"space-around"}}>
                                        <div >
                                            <img src="https://images.unsplash.com/photo-1600185822006-732898dd0eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZmJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                                style={{ height: "50px", width: "50px" }} />
                                        </div>
                                        <div style={{color:"whitesmoke",paddingTop:"20px"}}>
                                            Price: $30
                                        </div>
                                    </div>

                                    <div style={{color:"whitesmoke",backgroundColor:"rgb(140, 50, 142)",paddingTop:"5px"}}>
                                      <table>
                                        <tr>
                                            <th>Price : </th>
                                            <td>$30</td>
                                        </tr>
                                        <tr>
                                            <th>Number of items : </th>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <th>Discount : </th>
                                            <td>$2</td>
                                        </tr>
                                        <tr>
                                            <th>Delivery charge : </th>
                                            <td>$5</td>
                                        </tr>
                                        <hr/>
                                        <tr>
                                            <th>Total : </th>
                                            <td>$33</td>
                                        </tr>
                                      </table>
                                        <button style={{marginLeft:"35px"}} onClick={conf}>Click here</button>
                                    </div>

                                </div>


                            </Popup>
                        </div>
                    </div>
                </div>
                </ListGroup.Item>

                <ListGroup.Item><div style={{
           backgroundColor: "#003ea5", height: "125pxpx", boxShadow: "2px 2px 2px 1px white", margin: "10px", padding: "25px 10px 10px 25px", borderRadius: "25px"
                }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div> <img src="https://images.unsplash.com/photo-1531565637446-32307b194362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2thdGVib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "100px", width: "100px" }} /></div>
                        <div style={{ color: "whitesmoke" }}><h3>Price:$20</h3></div>
                        <div>
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

                    </div >
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                        <div><Button>Remove</Button></div>
                        <div>
                            <Popup  trigger=
                                {<button> OrderNow </button>}
                                position="left center">
                                <div style={{backgroundColor:"rgb(140, 50, 142)",padding:"10px",boxShadow:"5px 10px 10px 5px grey"}}>
                                    <div style={{display:"flex",justifyContent:"space-around"}}>
                                        <div >
                                            <img src="https://images.unsplash.com/photo-1531565637446-32307b194362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2thdGVib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                                style={{ height: "50px", width: "50px" }} />
                                        </div>
                                        <div style={{color:"whitesmoke",paddingTop:"20px"}}>
                                            Price: $20
                                        </div>
                                    </div>

                                    <div style={{color:"whitesmoke",backgroundColor:"rgb(140, 50, 142)",paddingTop:"5px"}}>
                                      <table>
                                        <tr>
                                            <th>Price : </th>
                                            <td>$20</td>
                                        </tr>
                                        <tr>
                                            <th>Number of items : </th>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <th>Discount : </th>
                                            <td>$8</td>
                                        </tr>
                                        <tr>
                                            <th>Delivery charge : </th>
                                            <td>$5</td>
                                        </tr>
                                        <hr/>
                                        <tr>
                                            <th>Total : </th>
                                            <td>$37</td>
                                        </tr>
                                      </table>
                                        <button style={{marginLeft:"35px"}} onClick={conf}>Click here</button>
                                    </div>

                                </div>


                            </Popup>
                        </div>
                    </div>
                </div>
                </ListGroup.Item>

            </ListGroup >

            <Footer/>

        </>
    )
}





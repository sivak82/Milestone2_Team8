import React from 'react'
import '../css/style.css';
import '../css/Signup_Login.css'
import '../css/aboutus.css'
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import { Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom'

export default function Aboutus() {
   
    return (
        <>
           <Header/>
           <Nav/>
            <main>
      <h2 className="headingAboutus">About Us</h2>
      <div className="Aboutusbox">
        <div className="aboutuscontent">
          <div className="aboutusimg">
            <img className="aboutusinsideimage" src = {process.env.PUBLIC_URL+'Images/sports.jpg'} 
            alt="aboutus" />
          </div>
          <div className="Content">
            <p><b>Welcome Verse Sports Store:</b></p>
            <p></p>
            <p>
              We established verse in 2001 and it's rapidly growing with 1 lakh
              plus customers in USA. And we got an award for the best online sports
              seller in the USA following are our cultures to drive in
            </p>
            <p>
              Passionate about sports: At Verse, we are driven by our passion
              for sports and athletic excellence
            </p>
            <p>
              Extensive product selection: We offer a wide range of high-quality
              sporting goods and equipment.
            </p>
            <p>
              Leading brands: We curate products from top brands across various
              sports disciplines.
            </p>
            <p>
              Convenient shopping experience: Our user-friendly website allows
              you to browse and purchase sports items easily.
            </p>
            <p>
              Secure online ordering: Rest assured that your personal
              information is protected when you shop with us.
            </p>
          </div>
        </div>
        <div className="Membersimg">
          <div className="Member">
            <img src = {process.env.PUBLIC_URL+'Images/Siva.jpg'} alt="Siva" width="200" height="210" />
            <h3>Kongara Sivakumar</h3>
            <p>Chief Member Of Sports Store</p>
          </div>
          <div className="Member">
            <img src = {process.env.PUBLIC_URL+'Images/Teja.jpg'} alt="Teja" width="200" height="210" />
            <h3>Sai Tejavardhan Reddy</h3>
            <p>Chief Member Of Sports Store</p>
          </div>
          <div className="Member">
            <img src = {process.env.PUBLIC_URL+'Images/Prem.jpg'} alt="Prem" width="250" height="210" />
            <h3>Putha PremKumar</h3>
            <p>Chief Member Of Sports Store</p>
          </div>
        </div>
      </div>
    </main>
    <Footer/>       
        </>
    )
}

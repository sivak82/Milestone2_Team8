import React from 'react'
import '../css/style.css'
import '../css/Signup_Login.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate();
  return (
    <>
      <header>
      <h1 class="titleh2">Verse Sports Store
      <div class="header-buttons">
        <Button onClick={()=>{
          navigate('/login')
        }} >Log In</Button>
        <Button onClick={()=>{
          navigate('/signup')
        }}>Sign Up</Button>
      </div>
      </h1>
    </header>

    {/* <nav>
                <ul>
                    <li>
                        <button onClick={() => {
                            navigate('/');
                        }} >Login</button>
                    </li>
                    <li><button onClick={()=>{
                        navigate('/List')
                    }}>Product List</button></li>
                    <li><button onClick={()=>{
                        navigate('/Createnew')
                    }}>Create New Product</button></li>
                    <li><button onClick={()=>{
                        navigate('/aboutus')
                    }}>About us</button></li>
                </ul>
            </nav> */}

    <main>
      <h2 class="home_heading">Welcome to Sports Store</h2>
      <div class="welcome-box">
        <p>
          Welcome to the Sports Store, your ultimate destination for all things
          sports-related. We take pride in offering a wide selection of
          high-quality sporting goods and equipment. Whether you're a
          professional athlete, a fitness enthusiast, or just starting your
          sports journey, we have the perfect gear to meet your needs. Explore
          our website to discover our extensive product list, create new custom
          products, and learn more about us. We are passionate about sports and
          are committed to providing you with an exceptional shopping
          experience.
        </p>
      </div>

      <div class="image-container">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Image 1"
        />
        <img
          src="https://c4.wallpaperflare.com/wallpaper/871/222/389/ball-white-background-cricket-wallpaper-preview.jpg"
          alt="Image 2"
        />
        <img
          src="https://images.unsplash.com/photo-1609900179380-6cf74a55a827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Um9sbGVyJTIwU2thdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="Image 3"
        />
        <img
          src="https://images.unsplash.com/photo-1531565637446-32307b194362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2thdGVib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Image 4"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1668226461496-f12afabe97c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzJTIwaG9ja2V5JTIwYmF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="Image 5"
        />
        <img
          src="https://images.unsplash.com/photo-1509255929945-586a420363cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwb3J0cyUyMGdsb3Zlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Image 6"
        />
        <img
          src="https://t3.ftcdn.net/jpg/03/63/44/38/360_F_363443852_32aPQw2o5ogHyUnO5svdf4MpQfxTNXcH.jpg"
          alt="Image 7"
        />
        <img
          src="https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RHVtYmJlbGxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="Image 8"
        />
      </div>
    </main>

    <footer>
      <p>&copy; 2023 Sports Store. All rights reserved.</p>
      <p>Verse Sports Store 582 Melbourne Street Florida FL32801</p>
      <p>Contact: info@sportsstore.com | Phone: +1 123-456-7890</p>
    </footer>
    </>
  )
}

import React,{useState} from 'react'
import {auth} from "../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer';

import '../css/Signup_Login.css'

import '../css/style.css'
export default function SignUp() {
    const navigate=useNavigate();

    const [Email,setEmail]=useState("");
    const [Password,setpass]=useState("");


    const newAccount=(e)=>{
        e.preventDefault();
        console.log(Email);
        console.log(Password);

        createUserWithEmailAndPassword(auth,Email,Password).then((userCredenial)=>{
            console.log(userCredenial);
            alert('Account created succesfully')
        }).catch((error)=>{
           
            alert(error);
        })
    }
    return (
   <>
            <header>
                <h1 class="titleh3">Verse Sports Store</h1>
            </header>
            {/* <nav>
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li><a href="prodlist.html">Product List</a></li>
                    <li><a href="createNew.html">Create New Product</a></li>
                    <li><a href="aboutus.html">About us</a></li>
                </ul>
            </nav> */}
            <main>
                <div class="Signupbox">
                    <div class="Signuppage">
                        <h2 class="Loginheading">Verse Sports Store Signup Page</h2>
                    </div>
                    <div>
                        <form onSubmit={newAccount}>
                            <div class="Names">
                                <label class="Sportsfirstname" for="firstname">First Name:</label>
                                <div>
                                    <input type="text" class="usertextboxsize" id="firstname" name="firstname" required/><br/>
                                    </div>
                                </div>
                                <div class="Names">
                                    <label for="lastname">Last Name:</label>
                                    <div>
                                        <input type="text" class="usertextboxsize" id="lastname" name="lastname" required/><br/>
                                        </div>
                                    </div>
                                    <div class="Names">
                                        <label for="username">Username:</label>
                                        <div>
                                            <input type="text" class="usertextboxsize" id="username" name="username" required/><br/>
                                            </div>
                                        </div>
                                        <div class="Names">
                                            <label for="pass" >Password:</label>
                                            <div>
                                                <input type="password" value={Password} class="pwdtextboxsize" id="pass" name="pwd" 
                                                onChange={(e)=>{
                                                    setpass(e.target.value);
                                                }} required/><br/>
                                                </div>
                                            </div>
                                            <div class="Names">
                                                <label for="email">Email:</label>
                                                <div>
                                                    <input type="email" value={Email} class="mailtextboxsize" id="email" name="email" 
                                                    onChange={(e)=>{
                                                        setEmail(e.target.value);
                                                    }} required /><br /><br />
                                                    </div>
                                                    </div>
                                                        <div class="Submitbtn">
                                                            <button type="submit" >SignUp</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </main>
                                     <Footer/>
                                    </>
                                    )
}

import React, { useState } from 'react'
import {auth} from "../firebase"
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from './Footer';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../css/Signup_Login.css'
import '../css/style.css'
export default function Login() {
  const navigate=useNavigate();
    const [Email,setEmail]=useState("");
    const [Password,setpass]=useState("");

     const submission=(e)=>{
        e.preventDefault();
        console.log(Email);
        console.log(Password);

        signInWithEmailAndPassword(auth,Email,Password).then((userCredenial)=>{
            console.log(userCredenial);
            alert("Login sucessful")
            navigate('/list')
        }).catch((error)=>{
            alert('Wrong credentials')
            console.log(error);
        })
     }
    return (
        <>
            <header>
                <h1 class="titleh3">Verse Sports Store</h1>
            </header>
            
            <main>
                <h2>Welcome to Sports Store</h2>
                <div class="Loginbox">
                    <div class="Loginpage">
                        <h2 class="Loginheading">Verse Sports Store Login Page</h2>
                    </div>
                    <div>
                        <form onSubmit={submission} >
                               <div class="Names">
                                <label for="Email">Email:</label>
                                   <div>
                                    <input type="email" class="usertextboxsize" value={Email} id="Email" name="Email" placeholder="Enter your Email" 
                                    onChange={ (e)=>{
                                        setEmail(e.target.value)
                                    }}required /><br/>
                                    </div>
                                </div>
                                <div class="Names">
                                    <label for="password">Password:</label>
                                    <div>
                                        <input type="password" class="pwdtextboxsize" value={Password} id="password" name="pwd"
                                            placeholder="Enter your password" onChange={(e)=>{
                                                setpass(e.target.value);
                                            }} required/><br/><br/>
                                            </div>
                                </div>
                                            <div class="Submitbtn">
                                                <Button type='submit' style={{marginRight:"10%"}}>Login</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </main>
                           <Footer/>
                        </>

                        )
}

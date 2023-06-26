import React from 'react';
import {useNavigate} from 'react-router-dom'
// import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './screen/Home';
import Aboutus from './screen/Aboutus';
import List from './screen/Lists.js';
import Login from './screen/LoginPage';
import SignUp from './screen/SignUp';
import ViewProd from './screen/ViewProd';
import Cart from './screen/Cart'
import Order from './screen/Order'


function App() {
	
return (
	<Router>
	
	
	<Routes>
	
		<Route exact path='/'  element={<Home />} />
		<Route exact path='aboutus' element={<Aboutus/>} />
		<Route path='list' element={<List/>} />
		<Route path='login' element={<Login/>}/>
		<Route path ='signup' element={<SignUp/>} />
        <Route path='viewProd/:id' element={<ViewProd/>}/>
		<Route path='cart'     element={<Cart/>}/>
		<Route path='order' element={<Order/>}/>
		
	</Routes>
	</Router>
);
}

export default App;

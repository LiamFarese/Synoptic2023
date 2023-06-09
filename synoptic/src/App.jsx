import React from 'react'
import NavBar from './components/NavBar'
//import UserList from './components/UserList'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import { Routes, Route } from "react-router-dom"

function App(){
	return (
	<>
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="/contact" element={<Contact />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="/contact" element={<Contact />}></Route>
			
		</Routes>
	</>
	)
}

export default App;

import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Projects from "./pages/Projects.jsx";

function App() {
    return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

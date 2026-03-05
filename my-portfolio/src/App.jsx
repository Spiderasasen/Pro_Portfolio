import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

function App() {
    return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

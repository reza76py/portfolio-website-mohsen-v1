import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './styles/styles.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching API data:', error.message);
      });
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <p>{message}</p>
      </footer>
    </Router>
  );

}

export default App

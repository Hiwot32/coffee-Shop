import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Product from './Pages/Product/Product';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Layout from './Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />              
          <Route path="about" element={<AboutUs />} />    
          <Route path="product" element={<Product />} />  
          <Route path="blog" element={<Blogs />} />      
          <Route path="contact" element={<Contact />} />  
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

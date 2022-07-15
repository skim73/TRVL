import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "TRVL";
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='/sign-up' element={<SignUp/>} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;

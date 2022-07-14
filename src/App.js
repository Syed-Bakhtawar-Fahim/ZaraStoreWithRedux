import React from 'react';
import './App.css';
import AppNavbar from './Component/AppNavbar/AppNavbar'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path='product/:productId' element={<ProductDetails />} />
      </Routes>
      {/* <ProductComponent /> */}
     
      {/* <ProductDetails /> */}
      <Footer />
    </>
  );
}

export default App;

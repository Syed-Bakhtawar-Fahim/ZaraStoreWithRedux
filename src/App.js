import React from 'react';
import './App.css';
import AppNavbar from './Component/AppNavbar/AppNavbar'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import ProductComponent from './Component/ProductComponent/ProductComponent'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  ProductListing  from './Component/ProductListing/ProductListing';
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
      <ProductListing />
      {/* <ProductDetails /> */}
      <Footer />
    </>
  );
}
{/* <Home /> */}

export default App;

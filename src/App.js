import React from 'react';
import './App.css';
import AppNavbar from './Component/AppNavbar/AppNavbar'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import ProductComponent from './Component/ProductComponent/ProductComponent'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <AppNavbar />
      <Home />
      <ProductComponent />
      <Footer />
    </>
  );
}

export default App;

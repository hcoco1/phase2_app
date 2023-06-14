
import NavigationBar from './components/NavigationBar';
import CardsContainer from './CardsContainer';
import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Filter from './components/Filter';



function App() {

  return (

    <div className="container">
      <NavigationBar />
  
      <CardsContainer />
      <Footer/>

      </div>
  );
}

export default App;

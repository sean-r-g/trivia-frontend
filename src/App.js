import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import SoloPlay from './components/SoloPlay';
import TopNavBar from './components/NavBar';



function App() {


  return (
    <>
    <TopNavBar/>
    <h1>Trivia Time!</h1>
    <SoloPlay/>
    </>
  );
}

export default App;

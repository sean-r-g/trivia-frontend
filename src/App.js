import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import SoloPlay from './components/SoloPlay';


function App() {


  return (
    <>
    <h1>Trivia Time!</h1>
    <SoloPlay/>
    </>
  );
}

export default App;

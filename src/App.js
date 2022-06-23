import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import SoloPlay from './components/SoloPlay';
import TopNavBar from './components/NavBar';
import Login from './components/Login';



function App() {
  // const [token, setToken] = useState()

  function setToken(userToken) {
    localStorage.setItem('token', JSON.stringify(userToken))
  }
  
  const token = getToken()

  function getToken() {
    const tokenString = localStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken?.token
  }
 

  return (
    <>
    <TopNavBar />
    <Login setToken={setToken}/>
    <h1>Trivia Time!</h1>
    <SoloPlay/>
    </>
  );
}

export default App;

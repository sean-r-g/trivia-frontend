import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import SoloPlay from './components/SoloPlay';
import TopNavBar from './components/NavBar';
import Login from './components/Login';



function App() {
  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
 
let userId = null
const getUserId = () => {
    user.map((user)=>{
    userId = user.id
  })
}

  return (
    <>
    <TopNavBar/>
    <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} getUserId={getUserId} userId={userId}/>
    <h1>Trivia Time!</h1>
    <SoloPlay user={user}/>
    </>
  );
}

export default App;

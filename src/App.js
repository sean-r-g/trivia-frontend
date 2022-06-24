import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import SoloPlay from './components/SoloPlay';
import TopNavBar from './components/NavBar';
import Login from './components/Login';



function App() {
  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
 


  return (
    <>
    <TopNavBar/>
    <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} setEmail={setEmail}/>
    <h1>Trivia Time!</h1>
    <SoloPlay user={user} loggedin={loggedIn} email={email}/>
    </>
  );
}

export default App;

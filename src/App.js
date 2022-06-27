import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import SoloPlay from './components/SoloPlay';
import TopNavBar from './components/NavBar';
import Login from './components/Login';
import UserScores from './components/UserScores'
import authServices from './components/authservices';



function App() {
  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  
 
  useEffect(()=>{
    const currentUser = authServices.getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
    }
  }, [])

  return (
    <>
    <TopNavBar email={email} loggedIn={loggedIn} setEmail={setEmail} setUser={setUser} user={user} handleShow={handleShow}/>
    <div id='hidelogin'>
    <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} setEmail={setEmail} handleShow={handleShow} handleClose={handleClose} show={show} setShow={setShow}/>
    </div>
    <SoloPlay user={user} loggedIn={loggedIn} email={email}/>
    {loggedIn ? <UserScores user={user} loggedIn={loggedIn}/> : null}
    </>
  );
}

export default App;

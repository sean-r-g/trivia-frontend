import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import SoloPlay from './components/SoloPlay';
import TopNavBar from './components/NavBar';
import Login from './components/Login';
import UserScores from './components/UserScores'
import authServices from './components/authservices';



function App() {
  const [user, setUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);


  return (
    <>
    <TopNavBar email={email} loggedIn={loggedIn} setEmail={setEmail} setUser={setUser} user={user} handleShow={handleShow}/>
    <div id='hidelogin'>
    <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} setEmail={setEmail} handleShow={handleShow} handleClose={handleClose} show={show} setShow={setShow}/>
    </div>
    <SoloPlay user={user} loggedIn={loggedIn} email={email}/>
    {/* {loggedIn ? <UserScores user={user} loggedIn={loggedIn}/> : null} */}
    <UserScores user={user} loggedIn={loggedIn}/>
    {/* <div>
        {user.map((user)=>{
          return (
            <div className='user-scores'>
              <h4>Recent scores for {user.email}: </h4>
              {user.scores <= 1 ? <h4>{user.scores}</h4> : <h4>{user.scores.sort().reverse().toString().replaceAll(',', ' || ')}</h4> }
            </div>
            )
        })}
    </div> */}
    </>
  );
}

export default App;

import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import SoloPlay from './components/SoloPlay';
import TopNavBar from './components/NavBar';
import Login from './components/Login';
import UserScores from './components/UserScores'
import authServices from './components/authservices';
import Leaderboard from './components/Leaderboard';



function App() {
  const [user, setUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [show, setShow] = useState(false);
  const [showScores, setShowScores] = useState(false)
  const [showLb, setShowLb] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseScores = () => setShowScores(false);
  const handleShowScores = () => setShowScores(true);
  const handleCloseLb = () => setShowLb(false);
  const handleShowLb = () => setShowLb(true);

  return (
    <>
    <TopNavBar email={email} loggedIn={loggedIn} setEmail={setEmail} setUser={setUser} user={user} handleShow={handleShow} handleShowScores={handleShowScores} handleShowLb={handleShowLb}/>
    <div id='hidelogin'>
    <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} setEmail={setEmail} handleShow={handleShow} handleClose={handleClose} show={show} setShow={setShow}/>
    </div>
    <SoloPlay user={user} loggedIn={loggedIn} email={email}/>
    <UserScores user={user} loggedIn={loggedIn} handleShowScores={handleShowScores} handleCloseScores={handleCloseScores} showScores={showScores} setShowScores={setShowScores}
    />
    <Leaderboard handleCloseLb={handleCloseLb} handleShowLb={handleShowLb} showLb={showLb} setShowLb={setShowLb}/>
    </>
  );
}

export default App;

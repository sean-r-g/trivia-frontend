import {Modal, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import axios from 'axios';
import authServices from './authservices'

const Login = ({user, setUser, loggedIn, setLoggedIn, email, setEmail, show, setShow, handleClose, handleShow}) => {
    const [password, setPassword] = useState('')
    const [showLogin, setShowLogin] = useState(true)
    const [signedUp, setSignedUp] = useState(false)



    const getUsers = () => {
        axios.get('http://localhost:3000/users').then((response)=>{
            setUser(response.data)
        })
    }
    useEffect(()=> {
        getUsers()
    }, [])
    const handleSetUser = () => {
        setUser(user.filter(user => user.email == email))
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await authServices.login(email, password)
            setLoggedIn(true)
            setSignedUp(false)
            handleSetUser()
            console.log('Successfully logged in');
        } catch (err) {
            console.log(err);
        }
    }
    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            await authServices.signup(email, password).then((response)=>{
                console.log('Sign up successful', response);
                setSignedUp(true)
            })
        } catch (err) {
            console.log(err);
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('userscore')
        setLoggedIn(false)
        setEmail('')
        setPassword('')
    }
    const toggleLoginSignup = () => {
    showLogin ?  setShowLogin(false) : setShowLogin(true)
    }


    return (
        <>
          <p id='loginmodal' variant="primary" onClick={handleShow}>
            Log In
          </p>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            {showLogin ? <Modal.Title id='modaltitle'>Log In</Modal.Title> : <Modal.Title id='modaltitle'>Sign Up</Modal.Title>}
            </Modal.Header>
            <Modal.Body id='modalbody'>
            {loggedIn ? <h3>Logged in as: {email}</h3> : null }
            {signedUp ? <h3>Successfully signed up! Please log in to continue</h3> : null}
            {!loggedIn ? showLogin ? <form onSubmit={handleLogin}>
                <label>
                    <p>Email</p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <br/>
                <label>
                    <p>Password</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <div>
                <br/>
                    <button type="submit">Log In</button>
                </div>
            </form> : 
            <form onSubmit={handleSignup}>
                <label>
                    <p>Email</p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <br/>
                <label>
                    <p>Password</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <div>
                <br/>
                    <button type="submit">Create Account</button>
                </div>
            </form> : null}
            <br/>
            {!loggedIn ? showLogin ? <button onClick={toggleLoginSignup}>Sign Up</button> : <button onClick={toggleLoginSignup}>Log In</button> : null}
            <br/>
            <br/>
            {loggedIn ? <button onClick={handleLogout}>Log Out</button> : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}


export default Login

/// SOURCE: https://www.youtube.com/watch?v=S4_vB1T4jWY&list=PL2adUX6Utt_2ushm0DDJ3fxiKypU44KZq, https://www.youtube.com/watch?v=T5dIjye4b-I
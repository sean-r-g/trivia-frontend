import {Modal, Button} from 'react-bootstrap'
import {useState} from 'react'
import axios from 'axios';
import authServices from './authservices'

const Login = ({setToken}) => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const [showLogin, setShowLogin] = useState(true)
    const [showSignup, setShowSignup] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const currentURL = '/auth'

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await authServices.login(email, password)
            setLoggedIn(true)
            console.log('Successfully logged in');
        } catch (err) {
            console.log(err);
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('user')
        setLoggedIn(false)
    }
    const toggleLoginSignup = () => {
    showLogin ?  setShowLogin(false) : setShowLogin(true)
    }

    return (
        <>
          <button id='loginmodal' variant="primary" onClick={handleShow}>
            Log In
          </button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            {showLogin ? <Modal.Title id='modaltitle'>Log In</Modal.Title> : <Modal.Title id='modaltitle'>Sign Up</Modal.Title>}
            </Modal.Header>
            <Modal.Body id='modalbody'>
            {showLogin ? <form onSubmit={handleLogin}>
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
                    <button type="submit">Submit</button>
                </div>
            </form> : 
            <form>
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
                    <button type="submit">Submit</button>
                </div>
            </form> }
            <br/>
            {showLogin ? <button onClick={toggleLoginSignup}>Sign Up</button> : <button onClick={toggleLoginSignup}>Log In</button>}
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
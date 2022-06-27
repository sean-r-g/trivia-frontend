import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import UserScores from './UserScores'

const TopNavBar = ({email, loggedIn, handleShow, handleShowScores}) => {


    return (
        <Navbar id='navbar'fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><img id='logo' src='https://i.imgur.com/OCNCN6R.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link>Solo Play</Nav.Link>
            <Nav.Link>Ranked Play</Nav.Link>
            <Nav.Link onClick={handleShowScores}>My Scores</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
            {loggedIn ? <Nav.Link eventKey={2}>
                Welcome {email}!
            </Nav.Link> : null}
            {!loggedIn ? <Nav.Link onClick={handleShow}>Login</Nav.Link> : <Nav.Link onClick={handleShow}>Log Out</Nav.Link>}
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default TopNavBar
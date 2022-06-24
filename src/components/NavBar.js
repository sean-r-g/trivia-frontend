import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const TopNavBar = () => {

    return (
        <Navbar id='navbar'fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Trivia Time</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link>Solo Play</Nav.Link>
            <Nav.Link>Ranked Play</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link></Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default TopNavBar
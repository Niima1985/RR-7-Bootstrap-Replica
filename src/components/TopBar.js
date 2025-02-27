import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{margin: "5px 10px 40px 20px"}} href="#home"><img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end " >
                    <Nav className="mr-auto"> 
                    </Nav>
            <Nav style={{padding: "24px 40px 10px 40px", fontSize: "18px", lineHeight: "26px",  backgroundImage: "#0AAD0A",fontWeight: "bolder", display: "flex" }} >
                    <Nav.Link  style={{color: "#343538"}} href="#LogIn">Log In </Nav.Link>
                    <Button variant="success" style={{fontSize: "18px",padding: "8px 16px",borderradius: "20px"}}>Sign Up</Button>{' '}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

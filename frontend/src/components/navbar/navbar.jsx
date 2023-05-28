import React from "react";
import{Navbar, Nav, Button, Form, Container} from 'react-bootstrap'
import '../navbar/navbar.css'

function NavbarCom() {
    
    return (

        <div className="navcontainer">
            <Navbar id="navbar" expand="lg">
                
                <Container fluid>
                
                    <Navbar.Brand href="#">Online Notes</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    
                    <Navbar.Collapse id="navbarScroll">
                    
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className="navlink" href="#action1">Home</Nav.Link>

                            <Nav.Link className="navlink" href="#action2">Note</Nav.Link>

                            <Nav.Link className="navlink" href="#action3">History</Nav.Link>
                        </Nav>
                        
                        <Form className="d-flex">
                            <Button className="navbutton">Register</Button>
                            <button id="buttondevider"></button>
                            <Button className="navbutton">Login</Button>
                        </Form>
                        
                
                    </Navbar.Collapse>
                
                </Container>
            
            </Navbar>
        </div>
    )
}

export default NavbarCom
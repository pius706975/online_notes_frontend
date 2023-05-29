import React from "react";
import{Navbar, Nav, Form, Container} from 'react-bootstrap'
import '../navbar/navbar.css'

function NavbarCom() {
    
    return (

        <div className="navcontainer">
            <Navbar id="navbar" expand="lg">
                
                <Container fluid>
                
                    <Navbar.Brand className="navbarbrand" href="#">Online Notes</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    
                    <Navbar.Collapse id="navbarScroll">
                    
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <button className="navbutton" href="#action1">Home</button>

                            <button className="navbutton" href="#action2">Note</button>

                            <button className="navbutton" href="#action3">History</button>
                        </Nav>
                        
                        <Form className="d-flex">
                            <button className="navbutton">Register</button>
                            <button className="navbutton">Login</button>
                        </Form>
                        
                
                    </Navbar.Collapse>
                
                </Container>
            
            </Navbar>
        </div>
    )
}

export default NavbarCom
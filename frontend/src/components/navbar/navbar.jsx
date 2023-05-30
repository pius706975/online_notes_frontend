import React from "react";
import{Navbar, Nav, Form, Container} from 'react-bootstrap'
import '../navbar/navbar.css'
import { useNavigate } from "react-router-dom";
import {FaBars} from "react-icons/fa"

function NavbarCom() {

    const navigate = useNavigate()

    const home = ()=>{
        navigate('/')
    }

    const note = ()=>{
        navigate('/note')
    }

    const history = ()=>{
        navigate('/history')
    }

    const signin = ()=>{
        navigate('/signin')
    }
    
    
    return (

        <div className="navcontainer">
            <Navbar id="navbar" expand="lg">
                
                <Container fluid>
                
                    <Navbar.Brand className="navbarbrand" href="/">Online Notes</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="navbarScroll"><FaBars color="white"/></Navbar.Toggle>
                    
                    <Navbar.Collapse id="navbarScroll">
                    
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <button className="navbutton" onClick={home}>Home</button>

                            <button className="navbutton" onClick={note}>Note</button>

                            <button className="navbutton" onClick={history}>History</button>
                        </Nav>
                        
                        <Form className="d-flex">
                            <button className="navbutton" onClick={signin}>Sign in</button>
                        </Form>
                        
                
                    </Navbar.Collapse>
                
                </Container>
            
            </Navbar>
        </div>
    )
}

export default NavbarCom
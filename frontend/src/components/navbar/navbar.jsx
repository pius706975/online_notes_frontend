import React, { useEffect, useState } from "react";
import{Navbar, Nav, Form, Container, Dropdown} from 'react-bootstrap'
import '../navbar/navbar.css'
import { useNavigate } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import Api from "../../helpers/api";
import { logout } from "../../store/reducer/user";

function NavbarCom() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const api = Api()
    const [Users, setUsers] = useState("")
    const {isAuth} = useSelector((state)=>state.users)

    const getUser = ()=>{
        api.requests({
            method: 'GET',
            url: '/user/profile'
        }).then((res)=>{
            const {data} = res.data
            setUsers(data)
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        if (isAuth) {
            getUser()
        }
    }, [])

    const home = ()=>{
        navigate('/')
    }

    const note = ()=>{
        navigate('/notes')
    }

    const history = ()=>{
        navigate('/history')
    }

    const signin = ()=>{
        navigate('/signin')
    }

    const signup = ()=>{
        navigate('/signup')
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

                            <button className="navbutton" onClick={note}>Notes</button>

                            <button className="navbutton" onClick={history}>History</button>
                        </Nav>
                        
                        <Form className="d-flex">
                            {isAuth ? (
                                <div className="dropdown-container">
                                    <Dropdown align="end">
                                        <Dropdown.Toggle variant="link" className="profile-pic-toggle">
                                            <img src={Users.image} alt="..." className="profile-pic rounded-circle"/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="profile-menu">
                                            <Dropdown.Item href="/profile/edit">Profile</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>dispatch(logout())}>Sign out</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ) : (
                                <>
                                    <button className="navbutton" onClick={signup}>Sign up</button>
                                    <button className="navbutton" onClick={signin}>Sign in</button>
                                </>
                            )}
                        </Form>
                        
                
                    </Navbar.Collapse>
                
                </Container>
            
            </Navbar>
        </div>
    )
}

export default NavbarCom
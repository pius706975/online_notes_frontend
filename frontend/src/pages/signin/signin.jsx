import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../signin/signin.css"
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Api from "../../helpers/api";
import { login } from "../../store/reducer/user";

function Signin() {

    const [Users, setUsers] = useState({
        email: '',
        password: ''
    })

    const {isAuth} = useSelector((state)=>state.users)
    const api = Api()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth, navigate])

    const onChangeInput = (event)=>{
        event.preventDefault()
        const data = {...Users}
        data[event.target.name] = event.target.value
        setUsers(data)
    }

    const signin = ()=>{
        if (Users.email === '' || Users.password === '') {
            alert("Fields cannot be empty")
        } else {
            api.requests({
                method: 'POST',
                url: 'auth/login',
                data: Users
            }).then((res)=>{
                const {data} = res.data
                dispatch(login(data.token))
            }).catch((err)=>{
                alert(err)
            })
        }
    }

    const signup = ()=>{
        navigate('/signup')
    }

    return (
        <div className="signinContainer">
            <NavbarCom/>

            <div className="signupForm login template d-flex justify-content-center align-items-center">
                <div className="col-lg-3 forms">                    
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control form-control-md form-login" name="email" placeholder="john@email.com" onChange={onChangeInput} required></input>

                    <p></p>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control form-control-md form-login" name="password" placeholder="password" onChange={onChangeInput} required></input>

                    <button className="invisibleBTN"></button>
                    <button className="btn-signin form-login form-control form-control-md" onClick={signin}>Sign in</button>

                    <p></p>
                    <Link className="link" to="/forgotpasword">Forgot Password?</Link>
                    <p></p><br/>

                    <p>Don't have an account?</p>
                    <button className="btn-signup form-login form-control form-control-md" onClick={signup}>Sign up</button>
                </div>
            </div>
            
            <FooterCom/>
        </div>
    )
}

export default Signin
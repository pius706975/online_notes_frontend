import React, { useEffect, useState } from "react";
import "../signup/signup.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import Api from "../../helpers/api"
import { addUsers } from "../../store/reducer/user";

function SignUp() {

    const [Users, setUsers] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user'
    })

    const {isAuth} = useSelector((state) => state.users)
    const api = Api()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth, navigate])

    const signin = ()=>{
        navigate('/signin')
    }

    const onChangeInput = (event)=>{
        event.preventDefault()
        const data = {...Users}
        data[event.target.name] = event.target.value
        setUsers(data)
    }

    const signup = ()=>{
        if (Users.username === '' || Users.email === '' || Users.password === '') {
            alert('Please fill all fields')
        } else if (Users.username !== Users.username.toLocaleLowerCase()) {
            alert('Username must be lowercase')
        } else if (Users.password.length < 8) {
            alert('Password length must be 8 or greater')
        } else {
            api
            .requests({
                method: 'POST',
                url: '/user/register',
                data: Users
            }).then((res)=>{
                dispatch(addUsers(res.data))
                navigate('/signin')
            }).catch((err)=>{
                alert(err)
            })
        }
    }

    return(
        <div className="signupContainer">
            <NavbarCom/>

            <div className="signupForm login template d-flex justify-content-center align-items-center">
                <div className="col-lg-3 forms">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control form-control-md form-login" name="username" placeholder="johndoe" onChange={onChangeInput} required></input>
                    
                    <p></p>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control form-control-md form-login" name="email" placeholder="john@email.com" onChange={onChangeInput} required></input>
                    
                    <p></p>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control form-control-md form-login" name="password" placeholder="password" onChange={onChangeInput} required></input>

                    <button className="invisibleBTN"></button>
                    <button className="btn-signupp form-login form-control form-control-md" onClick={signup}>Sign up</button>

                    <p></p><br/>
                    <p>Already have account?</p>
                    <button className="btn-signinn form-login form-control form-control-md" onClick={signin}>Sign in</button>
                </div>
            </div>

            <FooterCom/>
        </div>
    )
}

export default SignUp
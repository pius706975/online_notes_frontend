import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../signin/signin.css"
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import {Link, useNavigate} from 'react-router-dom'

function Signin() {
    const navigate = useNavigate()

    const signup = ()=>{
        navigate('/signup')
    }
    return (
        <div className="signinContainer">
            <NavbarCom/>

            <div className="signupForm login template d-flex justify-content-center align-items-center">
                <div className="col-lg-3 forms">                    
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control form-control-md form-login" name="email" placeholder="john@email.com" required></input>

                    <p></p>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control form-control-md form-login" name="password" placeholder="password" required></input>

                    <button className="invisibleBTN"></button>
                    <button className="btn-signin form-login form-control form-control-md">Sign in</button>

                    <p></p>
                    <Link className="link" to="/forgotpasword">Forgot Password?</Link>
                    <p></p><br/>

                    <p>Don't have account?</p>
                    <button className="btn-signup form-login form-control form-control-md" onClick={signup}>Sign up</button>
                </div>
            </div>
            
            <FooterCom/>
        </div>
    )
}

export default Signin
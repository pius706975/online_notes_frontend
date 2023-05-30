import React from "react";
import "../signup/signup.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate()
    
    const signin = ()=>{
        navigate('/signin')
    }

    return(
        <div className="signupContainer">
            <NavbarCom/>

            <div className="signupForm login template d-flex justify-content-center align-items-center">
                <div className="col-lg-3 forms">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control form-control-md form-login" name="username" placeholder="johndoe" required></input>
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control form-control-md form-login" name="email" placeholder="john@email.com" required></input>

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control form-control-md form-login" name="password" placeholder="password" required></input>

                    <button className="invisibleBTN"></button>
                    <button className="btn-signup form-login form-control form-control-md">Sign up</button>

                    <p></p><br/>
                    <p>Do you have account?</p>
                    <button className="btn-signup form-login form-control form-control-md" onClick={signin}>Sign in</button>
                </div>
            </div>

            <FooterCom/>
        </div>
    )
}

export default SignUp
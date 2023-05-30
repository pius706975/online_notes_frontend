import React from "react";
import {useNavigate} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../welcome/welcome.css"

function Welcome() {

    const navigate = useNavigate()

    const signup = ()=>{
        navigate('/signup')
    }

    return(
        <div className="welContainer">
            <div class="jumbroton" id="myContainer">
                <h1>Welcome to Online Notes App</h1>
                <p>Your notes with you wherever you go.</p>
                <p>Easy to use, protects all your notes!</p>
                <button type="button" class="btn btn-lg signup btnColor" onClick={signup}>Sign up for free</button>
            </div>
        </div>
    )
}

export default Welcome
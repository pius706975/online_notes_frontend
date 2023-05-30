import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home/home";
import SignUp from "./pages/signup/signup";
import Note from "./pages/note/note";
import Signin from "./pages/signin/signin";

function TheRouter() {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/note" element={<Note/>}/>
            </Routes>
        </Router>
    )
}

export default TheRouter
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home/home";
import SignUp from "./pages/signup/signup";
import Note from "./pages/note/note";
import Signin from "./pages/signin/signin";
import EditProfile from "./pages/profile/editProfile";

function TheRouter() {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/note" element={<Note/>}/>
                <Route path="/profile/edit" element={<EditProfile/>}/>
            </Routes>
        </Router>
    )
}

export default TheRouter
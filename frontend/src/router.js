import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home/home";
import SignUp from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import EditProfile from "./pages/profile/editProfile";
import Notes from "./pages/notes/notes";
import NotePreview from "./pages/notes/notePreview";

function TheRouter() {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/profile/edit" element={<EditProfile/>}/>
                <Route path="/notes" element={<Notes/>}/>
                <Route path="/notes/preview/:id" element={<NotePreview/>}/>
            </Routes>
        </Router>
    )
}

export default TheRouter
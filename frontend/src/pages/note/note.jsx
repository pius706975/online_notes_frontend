import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../note/note.css"
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";

function Note() {
    return (
        <div className="noteContainer">
            <NavbarCom/>
            note
            <FooterCom/>
        </div>
    )
}

export default Note
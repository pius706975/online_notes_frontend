import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import "../notes/styling/noteEdit.css"
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import { BsSave2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import Api from "../../helpers/api";
import { useNavigate, useParams } from "react-router-dom";

function EditNote() {

    return(
        <div className="edit-note-container">
            <NavbarCom/>

                <div class="jumbroton" id="myContainer">
                    <input type="text" name="title" className="note-title" placeholder="Title"  required/> <br />
                    <textarea className="notepad__textarea" name="note" placeholder="Your note . . ." /> <br />
    
                    <div className="button">
                        <button className="save-button" ><BsSave2/> Save</button>
                    </div>
                </div>

            <FooterCom/>
        </div>
    )
}

export default EditNote
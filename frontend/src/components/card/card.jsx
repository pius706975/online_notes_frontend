import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../card/card.css"
import { Link } from "react-router-dom";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"

function Card(props) {

    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const currentDay = new Date().getDate()

    return(
        <div className="col-lg-3 col-md-6">
            <Link to={'/notes/preview/' + props.id} className="link-card">
                <div className="card main-card">
                    <p className="card-date">{currentYear}-{currentMonth}-{currentDay}</p>
                    <p className="card-note">{props.note}</p>
                </div>

                <div className="card-content">
                    <p className="card-title">{props.name}</p>
                    <button className="card-button"><AiOutlineEdit/></button>
                    <button className="card-button"><AiOutlineDelete/></button>
                </div>
            </Link>
        </div>
    )
}

export default Card
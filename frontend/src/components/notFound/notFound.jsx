import React from "react";
import "../notFound/notFound.css"
import NavbarCom from "../navbar/navbar";
import FooterCom from "../footer/footer";

function NotFound() {
    return(
        <div>
            <NavbarCom/>

            <div className="not-found">
                <h1>You haven't made any notes</h1>
            </div>

            <FooterCom/>
        </div>
    )
}

export default NotFound
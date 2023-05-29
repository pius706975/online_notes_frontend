import React from "react";
import "../footer/footer.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function FooterCom() {

    const currentYear = new Date().getFullYear()

    return (
        <div className="footer">
            <footer className="text-white footerText">
                <p>Online Notes by Pius Copyright &copy; 2022-{currentYear}.</p> 
            </footer>
        </div>
    )
}

export default FooterCom
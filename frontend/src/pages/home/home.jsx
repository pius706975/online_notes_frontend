import React from "react";
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import "../home/home.css"
import Welcome from "../../components/welcome/welcome";

function Home() {
    return (

        <div className="App">
            <NavbarCom/>
            <Welcome/>
            <FooterCom/>
        </div>
    )
}

export default Home
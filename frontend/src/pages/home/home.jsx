import React from "react";
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import "../home/home.css"
import NotePad from "../../components/note/notePad";

function Home() {

    return (

        <div className="App">
            <NavbarCom/>
            <NotePad/>
            <FooterCom/>
        </div>
    )
}

export default Home
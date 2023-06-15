import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../notes/notes.css"
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import Api from "../../helpers/api";
import Card from "../../components/card/card";
import NotFound from "../../components/notFound/notFound";
import { useSelector } from "react-redux";

function Notes() {

    const api = Api()
    const {isAuth} = useSelector((state)=>state.users)
    const [notes, setNotes] = useState([])

    const getNotes = ()=>{
        api.requests({
            method: 'GET',
            url: '/note/'
        }).then((res)=>{
            const {data} = res.data
            setNotes(data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getNotes()
    }, [])

    if (!notes) {
        return <NotFound/>
    }

    return(
        <div className="notesContainer">
            <NavbarCom/>

            <section className="the-notes">

                <div className="the-notes-container">

                    {isAuth ? (
                        <div className="row">
                            <div className="col-sm-6">
                                <h2 className="title text-white">Your Notes</h2>
                                <h2>&nbsp;</h2>
                            </div>

                            <div className="row">
                                {notes.map((v, k)=>{
                                    return(
                                        <Card id={v.id} name={v.title} note={v.note} />
                                    )
                                })}
                            </div>
                        </div>
                    ):(
                        <div className="not-found">
                            <h1>You haven't made any notes</h1>
                        </div>
                    )}
                    

                </div>

            </section>

            <FooterCom/>
        </div>
    )
}

export default Notes
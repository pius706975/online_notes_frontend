import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import "../notes/notePreview.css"
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import { useSelector } from "react-redux";
import Api from "../../helpers/api";
import { useParams } from "react-router-dom";

function NotePreview() {

    const api = Api()
    const {isAuth} = useSelector((state)=>state.users)
    const params = useParams()
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    
    const getPreview = ()=>{
        api.requests({
            url: '/note/' + params.id
        }).then((res)=>{
            setTitle(res.data.data.title)
            setNote(res.data.data.note)

            const {data} = res.data
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getPreview()
    })

    return(
        <div className="preview-container">
            <NavbarCom/>

            <section className="preview">

                {isAuth ? (
                    <div className="note-preview-container">
                        <h1>Note Preview</h1>
                        <h3>{title}</h3>
                        <p></p>
                        <p>{note}</p>
                    </div>
                ):(
                    <h1>You haven't made any notes</h1>
                )}


            </section>

            <FooterCom/>
        </div>
    )
}

export default NotePreview
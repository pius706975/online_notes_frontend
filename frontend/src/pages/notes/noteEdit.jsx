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
    
    const {isAuth} = useSelector((state)=>state.users)
    const navigate = useNavigate()
    const params = useParams()
    const api = Api()
    const [editNote, setEditNote] = useState([])
    const [data, setData] = useState([])
    
    const onChangeInput = (event)=>{
        event.preventDefault()
        const tmpData = {...data}
        tmpData[event.target.name] = event.target.value
        setData(tmpData)
        console.log(data)
    }

    const getNote = ()=>{
        api.requests({
            method: 'GET',
            url: '/note/' + params.id
        }).then((res)=>{
            const {data} = res.data
            setEditNote(data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const editData = ()=>{
        api.requests({
            method: 'PUT',
            url: '/note/edit/' + params.id,
            data: data
        }).then((res)=>{
            console.log(res)
            navigate('/notes/preview/' + params.id)
        }).catch((err)=>{
            alert(err)
        })
    }

    useEffect(()=>{
        getNote()
        setData({
            ...data
        })
    }, [])

    return(
        <div className="edit-note-container">
            <NavbarCom/>

            {isAuth ? (
                <div class="jumbroton" id="myContainer">
                    <input type="text" name="title" className="note-title" placeholder="Title" defaultValue={editNote.title} onChange={onChangeInput} required/> <br />
                    <textarea className="notepad__textarea" name="note" placeholder="Your note . . ." defaultValue={editNote.note} onChange={onChangeInput} /> <br />
    
                    <div className="button">
                        <button className="save-button" onClick={editData}><BsSave2/> Save</button>
                    </div>
                </div>
            ):(
                window.location.reload(navigate('/notes'))
            )}

            <FooterCom/>
        </div>
    )
}

export default EditNote
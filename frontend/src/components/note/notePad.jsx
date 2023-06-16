import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../note/notePad.css"
import {BsSave2} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import Api from "../../helpers/api";

function NotePad() {
    const navigate = useNavigate()
    const api = Api()
    const [Users, setUsers] = useState(null)

    const [data, setData] = useState({
        title: '',
        note: '',
    })

    const onChangeInput = (event)=>{
        event.preventDefault()
        const tmpData = {...data}
        tmpData[event.target.name] = event.target.value
        setData(tmpData)
    }

    const getUser = ()=>{
        api.requests({
            method: 'GET',
            url: '/user/profile'
        }).then((res)=>{
            const {data} = res.data
            setUsers(data)
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const addNote = ()=>{    
        if (Users) {
            console.log(process.env.REACT_APP_BASEURL+'/note/add_note');
            api.requests({
                method: 'POST',
                url: '/note/add_note',
                data: data
            }).then((res)=>{
                console.log(res);
                navigate('/notes')
            }).catch((err)=>{
                alert(err)
            })    
        } else {
            navigate('/signin')
        }
    }

    useEffect(()=>{
        getUser()
    }, [])


    return(
        <div className="welContainer">
            <div class="jumbroton" id="myContainer">
                <input type="text" name="title" className="note-title" placeholder="Title" onChange={onChangeInput} required/> <br />
                <textarea className="notepad__textarea" name="note" placeholder="Your note . . ." onChange={onChangeInput}/> <br />
 
                <div className="button">
                    <button className="save-button" onClick={addNote}><BsSave2/> Save</button>
                </div>
            </div>
        </div>
    )
}

export default NotePad
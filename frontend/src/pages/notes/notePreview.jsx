import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import "../notes/styling/notePreview.css"
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import { useSelector } from "react-redux";
import Api from "../../helpers/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";

function NotePreview() {

    const api = Api()
    const navigate = useNavigate()
    const {isAuth} = useSelector((state)=>state.users)
    const params = useParams()
    const [title, setTitle] = useState([])
    const [note, setNote] = useState([])

    const [showModal, setShowModal] = useState(false)
    const [selectedNote, setSelectedNote] = useState({id: ''})

    const handleClose = ()=>setShowModal(false)
    const handleShow = (id)=>{
        setSelectedNote({id: id})
        setShowModal(true)
    }

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

    const deleteNote = (id)=>{
        api.requests({
            method: 'DELETE',
            url: '/note/delete/' + id
        }).then((res)=>{
            window.location.reload(navigate('/notes'))
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
                    <div>
                        <div className="note-preview-container">
                            <h1 className="h1-title text-white">{title}</h1>
                            <p></p>
                            <p className="p-note">{note}</p>
                        </div>

                        <p>&nbsp;</p>
                        <div className="buttons">
                            <Link to={"/note/edit/" + params.id}>
                                <button className="note-preview-buttons">Edit</button>
                            </Link>
                            <button className="separator"></button>
                            <button className="note-preview-buttons" onClick={()=>{handleShow(params.id)}}>Delete</button>
                            <Modal className="centered-modal" show={showModal} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        Confirm Deletion
                                    </Modal.Title>
                                </Modal.Header>

                                <Modal.Body>Are you sure?</Modal.Body>

                                <Modal.Footer>
                                    <button onClick={handleClose}>Cancel</button>

                                    <button onClick={()=>{
                                        deleteNote(params.id)
                                        handleClose()
                                    }}>Delete</button>
                                </Modal.Footer>
                            </Modal>
                        </div>
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
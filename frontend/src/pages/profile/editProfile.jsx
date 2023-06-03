import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../profile/profile.css"
import NavbarCom from "../../components/navbar/navbar";
import FooterCom from "../../components/footer/footer";
import {Avatar, Modal} from "antd"
import 'antd/dist/antd.js'
import Api from "../../helpers/api";
import {FiEdit} from "react-icons/fi"
import {AiOutlineMail, AiOutlineEdit} from "react-icons/ai"
import {BsTelephoneForward} from "react-icons/bs"
import {MdOutlineJoinInner} from "react-icons/md"
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Welcome from "../../components/welcome/welcome";

function EditProfile() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = ()=>{
        setIsModalOpen(true)
    }
    const handleOK = ()=>{
        setIsModalOpen(false)
    }
    const handleCancel = ()=>{
        setIsModalOpen(false)
    }

    const {isAuth} = useSelector((state)=>state.users)
    const api = Api()
    const [bg1, setBg1] = useState(true)
    const [bg2, setBg2] = useState(false)
    const [name1, setName1] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [gender, setGender] = useState("")
    const [phone, setPhone] = useState("")
    const [image, setImage] = useState("")
    const [year, setYear] = useState("")

    const [imgData, setImgData] = useState([])

    const [data1, setData1] = useState("")
    const [data2, setData2] = useState("")
    const [data3, setData3] = useState("")
    const [data4, setData4] = useState("")
    const [data5, setData5] = useState("")
    const [data6, setData6] = useState("")
    const [data7, setData7] = useState("")

    const onChangeFile = (event)=>{
        event.preventDefault()

        const file = event.target.files[0]
        if (file) {
            const tmpData = {...imgData}
            tmpData['image'] = file
            setImgData(tmpData)
        }
    }

    const getUser = ()=>{
        api.requests({
            url: '/user/profile'
        }).then((res)=>{
            setData1(res.data.data.name)
            setData2(res.data.data.username)
            setData3(res.data.data.email)
            setData4(res.data.data.country)
            setData5(res.data.data.gender)
            setData6(res.data.data.mobile_number)
            setData7(res.data.data.image)

            const {data} = res.data
            const year = data.created_at.split('-')[0]
            setYear({...data, created_year: year})
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const updateUser = ()=>{
        api.requests({
            method: 'PUT',
            url: '/user/profile/edit',
            headers: {'Content-Type': 'multipart/form-data'},
            data: {
                name: name1,
                username: username,
                email: email,
                country: country,
                gender: gender,
                mobile_number: phone,
                image: image,
            },
        }).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const bg1Handler = ()=>{
        setBg1(true)
        setBg2(false)
        setGender("Male")
    }

    const bg2Handler = ()=>{
        setBg1(false)
        setBg2(true)
        setGender("Female")
    }

    const genderHandler = ()=>{
        if (data5 === "Male") {
            setBg1(true)
            setBg2(false)
        } else if (data5 === "Female") {
            setBg1(false)
            setBg2(true)
        }
    }

    useEffect(()=>{
        getUser()
    }, [])

    useEffect(()=>{
        genderHandler()
    }, [data5])

    return (
        <div className="profileContainer">
            <NavbarCom/>

            <section className="mt-5">

                {isAuth ? (
                    <div className="formContainer">

                        <div className="row">
                            <h2 className="profile-title">Edit Profile <AiOutlineEdit/></h2>
                        </div>

                        <div className="profile-img text-center p-4">
                            <div className="flex flex-row justify-content-center">
                                <Avatar className="rounded-circle" style={{width:"150px", height:"150px", border:"1px white solid", objectFit:"cover"}} alt="image" src={data7} />

                                <p className="fw-bold change-pic" onClick={showModal} style={{cursor:"pointer"}}><FiEdit/> Change picture</p>

                                <Modal title="Choose you profile photo" open={isModalOpen} onOk={handleOK} onCancel={handleCancel}>
                                    <input type="file" placeholder="User Picture" onChange={onChangeFile} defaultValue={data7}/>
                                </Modal>

                                <h3 className="fw-bold name text-white">{data1}</h3>

                                <p className="main-user info"><AiOutlineMail/> {data3}<br/><BsTelephoneForward/> {data6}<br/><MdOutlineJoinInner/> Has been active since {year.created_year}</p>
                            </div>

                            <div className="flex flex-row justify-content-center">
                                <Form>
                                    {['radio'].map((type)=>(
                                        <div className="mb-3 text-white" key={`inline-${type}`}>
                                            <Form.Check inline label="Male" name="gender" type={type} onClick={bg1Handler} checked={bg1} />

                                            <Form.Check inline label="Female" name="gender" type={type} onClick={bg2Handler} checked={bg2} />
                                        </div>
                                    ))}
                                </Form>
                            </div>
                        </div>

                        <div>
                            <p className="fw-bold">Contacts :</p>
                            <Form.Control type="text" className="update-field" placeholder="Display name" defaultValue={data1} onChange={(event)=>setName1(event.target.value)} />

                            <Form.Control type="text" className="update-field" placeholder="Username" defaultValue={data2} onChange={(event)=>setUsername(event.target.value)} />

                            <Form.Control type="text" className="update-field" placeholder="Email" defaultValue={data3} onChange={(event)=>setEmail(event.target.value)} />

                            <Form.Control type="text" className="update-field" placeholder="Country" defaultValue={data4} onChange={(event)=>setCountry(event.target.value)} />

                            <Form.Control type="text" className="update-field" placeholder="Mobile number" defaultValue={data6} onChange={(event)=>setPhone(event.target.value)} />
                        </div>

                        <div className="row mt-5 mb-5">
                            <div className="col-md-4">
                                <Link>
                                    <button className="save-btn btn-lg fw-bold" onClick={updateUser}>Save changes</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                ) : (
                    <Welcome/>
                )}



            </section>

            <FooterCom/>
        </div>
    )
}

export default EditProfile
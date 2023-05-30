import axios from 'axios'
import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

function Api(urls = '') {
    const {token} = useSelector((state)=>state.users)

    const [requests, setResquests] = useState({
        baseURL: process.env.REACT_APP_BASE_URL || urls,
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    const setConfig = ()=>{
        setResquests({
            ...requests,
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
    }

    useEffect(()=>{
        setConfig()
    }, [])

    return {requests: axios.create(requests)}
}

export default Api
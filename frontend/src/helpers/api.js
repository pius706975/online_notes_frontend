import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

function Api(urls = '') {
    
    const { token } = useSelector((state) => state.users)
    
    const [requests, setRequests] = useState({
        baseURL: process.env.REACT_APP_BASEURL || urls,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    const setConfig = useCallback(() => {
        setRequests(prevRequests => ({
            ...prevRequests,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }))
    }, [token])

    useEffect(() => {
        setConfig()
    }, [setConfig])

    return { requests: axios.create(requests) }
}

export default Api
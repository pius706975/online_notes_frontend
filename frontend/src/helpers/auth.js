import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

function WithAuth(Component, role) {
    return (props)=>{
        const {isAuth, data} = useSelector((state)=>state.users)
        
        if (!isAuth) {
            return <Navigate to="/signin"/>
        } 

        if (role && data.role !== role) {
            return <Navigate to="/"/>
        }
        
        return <Component {...props}/>
    }
}

export default WithAuth
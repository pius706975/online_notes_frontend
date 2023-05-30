import {createSlice} from "@reduxjs/toolkit"

const userSLice = createSlice({
    name: 'users',
    initialState: {
        isAuth: false,
        token: '',
        data: {}
    },

    reducers: {
        signin(state, actions) {
            console.log(actions.payload);
            return {
                ...state,
                isAuth: true,
                token: actions.payload
            }
        },

        signout(state, actions) {
            console.log(actions.payload);
            return {
                ...state,
                isAuth: false,
                token: ''
            }
        },

        
    }
})
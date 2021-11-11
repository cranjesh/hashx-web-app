import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"
import LoginForm from "../../components/material-ui/LoginForm";
import { setupUserSession } from "./actions";

const Login = () => {
    const [data, setData] = useState(null)
    const dispatch = useDispatch()
    const sessions = useSelector((state) => state.loginReducer.sessions)
    console.log('state.loginReducer.sessions', sessions)
    const onLogin = async (email, password) => {
        console.log('email, password', email, password)
        const loginResp = await axios.post(
            'https://hashx-login-service.herokuapp.com/loginWithPassword',
            {
                Email: email,
                HashedPassword: password
            })
        const dtStr = (new Date()).toTimeString()
        console.log('loginResp', loginResp)
        const session = { SessionKey: `key${dtStr}`, SessionUUID: `sid${dtStr}`, UserUUID: `uid${dtStr}` }
        dispatch(setupUserSession(session))
        setData(session)
    }
    return <LoginForm onButtonClick={onLogin} />
}
export default Login
import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"
import LoginForm from "../../components/material-ui/LoginForm";
import { setupUserSession, loginSetSession } from "./actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null)
    const dispatch = useDispatch()
    const sessions = useSelector((state) => state.loginReducer.sessions)
    console.log('state.loginReducer.sessions', sessions)
    const onLogin = async (email, password) => {
        console.log('email, password', email, password)
        const loginResp = await axios.post(
            'https://hashx-login-service.herokuapp.com/loginWithPassword',
            {
                Username: password,
                Email: email,
                SaltedHash: password,
                Lat: 1,
                Long: 1
            })
        console.log('loginResp', loginResp)
        const session = loginResp?.data?.data
        dispatch(setupUserSession(session))
        setData(session)
        localStorage.setItem('SessionUUID', session?.SessionUUID ? session?.SessionUUID: '')
        localStorage.setItem('UserUUID', session?.UserUUID ? session?.UserUUID: '')
        navigate("/home");
    }
    const onLoginThunk = async (email, password) => {
        dispatch(loginSetSession(email, password))
    }
    return <LoginForm onButtonClick={onLogin} />
}
export default Login

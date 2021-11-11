import { useEffect, useState } from 'react'
import axios from 'axios'

const UseLoginByPasswordApi = ({
    email,
    password
}) => {
    const [loginData, setLoginData] = useState({})

    useEffect(() => {
        const sendLoginByPasswordReq = async () => {
            try {
                const loginResp = await axios.post(
                    'https://hashx-login-service.herokuapp.com/loginWithPassword',
                    {
                        Email: email,
                        HashedPassword: password
                    })
                setLoginData({ done: true, data: loginResp.data })
            } catch (err) {
                console.log('sendLoginByPasswordReqerr', err)
                setLoginData({ done: true })
                return
            }
        }
        if (!loginData.done) sendLoginByPasswordReq()
    }, [email, password])
    return loginData
}

export { UseLoginByPasswordApi }
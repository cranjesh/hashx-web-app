import { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * THIS IS JUST A SAMPLE REFERENCE FOR HOOKS TO INITIATE COMPONENTS
 * @param {*} param0 
 * @returns 
 */
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
                        Username: password,
                        Email: email,
                        SaltedHash: password,
                        Lat: 1,
                        Long: 1
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

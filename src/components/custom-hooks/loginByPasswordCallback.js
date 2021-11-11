import { useState, useEffect, useCallback } from "react"
import axios from "axios"

const UseLoginByPasswordCallback = ({ email, password }) => {
    const [submitting, setSubmitting] = useState(true)
    const [loginData, setLoginData] = useState()
    const [query, setQuery] = useState({ email, password })
    console.log(`loginData==>`, loginData)

    const getLoginData = useCallback(async () => {
        const loginResp = await axios.post(
            'https://hashx-login-service.herokuapp.com/loginWithPassword',
            {
                Email: query.email,
                HashedPassword: query.password
            })
        setLoginData(loginResp.loginData)
    }, [query])
    useEffect(() => {
        if (submitting) { // is true initially, and again when button is clicked
            getLoginData().then(() => setSubmitting(false))
        }
    }, [submitting, getLoginData])
    return loginData
}

export { UseLoginByPasswordCallback }
import { useEffect, useState } from 'react'
import axios from 'axios'


const identityDataPost = (UserUUID) => axios.post(
    'https://hashx-api-identity-read.herokuapp.com/readIdentity',
    {
        UserUUID
    })

const useReadIdentityApi = ({
    userUUID
}) => {
    const [identityData, setIdentityData] = useState({})

    useEffect(() => {
        const sendIdentityDataReq = async () => {
            try {
                const identityDataResp = await identityDataPost(userUUID)
                setIdentityData({ done: true, data: identityDataResp.data })
            } catch (err) {
                console.log('sendIdentityDataReq err', err)
                setIdentityData({ done: true })
                return
            }
        }
        if (!identityData.done) sendIdentityDataReq()
    }, [userUUID])
    return identityData
}

export { identityDataPost, useReadIdentityApi }

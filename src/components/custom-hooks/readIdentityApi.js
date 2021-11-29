import { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * THIS IS JUST A SAMPLE REFERENCE FOR HOOKS TO INITIATE COMPONENTS
 * @param {*} param0 
 * @returns 
 */
const useReadIdentityApi = ({
    userUUID
}) => {
    const [identityData, setIdentityData] = useState({})

    useEffect(() => {
        const sendIdentityDataReq = async () => {
            try {
                const identityDataResp = await axios.post(
                    'https://hashx-api-identity-read.herokuapp.com/readIdentity',
                    {
                        UserUUID: userUUID
                    })
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

export { useReadIdentityApi }

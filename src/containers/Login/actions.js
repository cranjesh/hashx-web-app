import axios from 'axios'
import { SETUP_SESSION } from "../../state/actionTypes";

export function setupUserSession(sessionData) {
  return { type: SETUP_SESSION, sessionData };
}

export function loginSetSession(email, password) {
  return async function (dispatch) {
    console.log('thunk login', email, password)
    const loginResp = await axios.post(
      'https://hashx-login-service.herokuapp.com/loginWithPassword',
      {
        Username: password,
        Email: email,
        SaltedHash: password,
        Lat: 1,
        Long: 1
      })
    console.log('thunk loginResp', loginResp)
    const sessionData = loginResp.data
    dispatch(setupUserSession(sessionData))
  }
}

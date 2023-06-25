
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

} from '../Constants/UserConstants';

export const login = (values) => {
    return {
        type: USER_LOGIN_REQUEST,
        payload:{values},
    }
}
export const loginSucess = (data) => {
    
    return {
        type: USER_LOGIN_SUCCESS,
        payload:{data},
    }
}
export const loginFailure = (error) => {
    return {
        type: USER_LOGIN_FAIL,
        payload:{error},
    }
}

export const logout = () => (dispatch)=>{
    localStorage.removeItem('userdata')
    dispatch({ type: USER_LOGOUT })
}






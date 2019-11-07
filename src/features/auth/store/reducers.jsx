import {
    initialState
} from "./state";
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCESS,
    REMEMBER_ME,
    REMEMBER_ME_CLOSE
} from "./constants";

function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            console.log('token devulto: ',action.payload)
            return Object.assign({}, state, {
                token: action.payload.token,
                isAuthenticated: true,
                username: action.payload.token
            });
        case REMEMBER_ME:
            localStorage.setItem('user', action.payload.user);
            localStorage.setItem('password', action.payload.password);
            return {
                user: action.payload.user,
                password: action.payload.password
            }
        case REMEMBER_ME_CLOSE:
            localStorage.removeItem('user');
            localStorage.removeItem('password');
            return {
                user: null,
                password: null
            }
        case LOGOUT_SUCESS:
            localStorage.removeItem('token');

            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false
            }




        default: return state;

    }
}


export {
    AuthReducer
}
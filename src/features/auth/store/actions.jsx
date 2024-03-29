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
import { AuthService, authUrls } from "../../../api";
<<<<<<< HEAD
import { message} from 'antd';

// import formurlencoded from 'form-urlencoded';

=======
import { message } from "antd";
import qs from "qs";
>>>>>>> 42915662c8d46cc955704b748f9148d85aadd91a
const authService = new AuthService();

function decirLogin() {
  speechSynthesis.speak(new SpeechSynthesisUtterance(`bienvenido`));
}
function decirLogout() {
  speechSynthesis.speak(new SpeechSynthesisUtterance(`Cerro cesión`));
}
function decirError() {
  speechSynthesis.speak(new SpeechSynthesisUtterance("Verifique sus datos"));
}

<<<<<<< HEAD
const encodeFormData = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}
// LOGIN USER
const login = (email, password) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-url-encoded', 
            'Accept': 'application/json'
        }
    }
    // Request Body
    //const body = JSON.stringify({ email, password })
    const body =  encodeFormData({ email, password })
    console.log('funciona: ',body)
    authService.getToken(authUrls.getTokenUrl, body, config)
        .then(res => {

            message.success('Bienvenido a Mentoring!!!',2);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            decirLogin();
        }).catch(err => {
            message.error('Verifique sus datos!!!',2);
            dispatch({
                type: LOGIN_FAILED
            });
            decirError();
        });
}
=======
// LOGIN USER
const login = (email, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "content-Type": "application/x-www-form-urlencoded"
    }
  };
  // Request Body
  // const body = JSON.stringify({ email, password })
  const body = qs.stringify({ email, password });
  console.log("acaaaaa");
>>>>>>> 42915662c8d46cc955704b748f9148d85aadd91a

  authService
    .getToken(authUrls.getTokenUrl, body, config)
    .then(res => {
      message.success("Bienvenido a Mentoring!!!", 2);
      console.log("data: ", res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      decirLogin();
    })
    .catch(err => {
      message.error("Verifique sus datos!!!", 2);
      dispatch({
        type: LOGIN_FAILED
      });
      decirError();
    });
};

// LOGOUT USER

const logout = token => dispatch => {
  // Get token from state
  /* const token = getState().auth.token */

  // Headers
  const config = {
    headers: {
      "content-Type": "application/json"
    }
  };
  // If token, add to headers config
  if (token) {
    console.log(token);
    config.headers["Authorization"] = `token ${token}`;
  }

  authService
    .logout(authUrls.logout, config)
    .then(res => {
      decirLogout();
      dispatch({
        type: LOGOUT_SUCESS
      });
    })
    .catch(error => {
      console.log("el error es:", error);
      /* dispatch(returnErrors(err.response.data, err.response.status)); */
    });
};

const rememberMe = (user, password) => dispatch => {
  const data = {
    user,
    password
  };
  dispatch({
    type: REMEMBER_ME,
    payload: data
  });
};
const rememberMeClose = () => dispatch => {
  dispatch({
    type: REMEMBER_ME_CLOSE
  });
};

export { login, logout, rememberMe, rememberMeClose };

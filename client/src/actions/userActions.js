import axios from 'axios';

const logInUser = (user) => {
  return {
    type: 'LOGIN_USER',
    user
  }
}

export const showSignup = (user) => {
  return {
    type: 'SHOW_SIGN_UP',
    user
  }
}
// asynch actions
export const signUpUser = (user) => {
  return(dispatch) => {
    axios.post('/api/v1/users', { username: user.username, password: user.password })
    .then(res => dispatch(logInUser( {username: res.data.username, password: res.data.password_digest, id: res.data.id})
  )).catch(error => window.alert("Username has already been taken"))
}}

export const logInThisUser = (user) => {
  return(dispatch) => {
    axios.post('/api/v1/login',{ username: user.username, password: user.password })
    .then(res => dispatch(logInUser( {username: res.data.username, password: res.data.password_digest, id: res.data.id})
  )).catch(error => window.alert("Log In failed, please check your username and password and try again"))
}}

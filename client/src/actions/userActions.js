import axios from 'axios';
export const loginUser = (user) => {
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
    .then(res => dispatch({
      type: 'LOGIN_USER', user: {username: res.data.username, password: res.data.password_digest, id: res.data.id}
    })).catch(error => console.log(error))
}}
    // .then(user => dispatch({ type: 'LOGIN_USER', user}))

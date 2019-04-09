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

export const logOutUser = (user) => {
  return {
    type: 'LOGOUT_USER',
    user
  }
}
// asynch actions
export const signUpUser = (user) => {

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })}
  return(dispatch) => {
    fetch('/api/v1/users', data)
    .then(response => response.json())
    .then(res => {
      sessionStorage.setItem('user', res)
    dispatch(logInUser({username: res.username, password: res.password_digest, id: res.id}))
  }).catch(error => window.alert("username already taken"))
}}

// export const logInThisUser = (user) => {
//   return(dispatch) => {
//     axios.post('/api/v1/login',{ username: user.username, password: user.password })
//     .then(res => dispatch(logInUser( {username: res.data.username, password: res.data.password_digest, id: res.data.id})
//   )).catch(error => window.alert("Log In failed, please check your username and password and try again"))
// }}

export const logInThisUser = (user) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }
  return dispatch => {
    fetch(`/api/v1/login`, data)
      .then(response => response.json())
      .then(res => {
        sessionStorage.setItem('user', res)
      dispatch(logInUser( {username: res.username, password: res.password_digest, id: res.id}))
    console.log(sessionStorage)}).catch(error => window.alert("Log In failed, please check your username and password and try again"))

  }
}

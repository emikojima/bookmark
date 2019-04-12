const logInUser = (user) => {
  return {
    type: 'LOGIN_USER',
    user
  }
}

export const logInForRefresh = (userId, username) => {
  return {
    type: 'LOGINFORREFRESH',
    userId, username
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
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user })
  }
    return(dispatch) => {
      fetch('/api/v1/users', data)
      .then(response => response.json())
      .then(res => { debugger
        sessionStorage.setItem('jwt', res.jwt)
        sessionStorage.setItem('user', res.user.id)
        sessionStorage.setItem('username', res.user.username)
      dispatch(logInUser({username: res.user.username, password: res.user.password_digest, id: res.user.id}))
    }).catch(error => window.alert("username already taken"))
}}

export const logInThisUser = (user) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Credentials': 'include',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }
    return dispatch => {
      fetch(`/api/v1/login`, data)
        .then(response => response.json())
        .then(res => {
          sessionStorage.setItem('jwt', res.jwt)
          sessionStorage.setItem('user', res.user.id)
          sessionStorage.setItem('username', res.user.username)
        dispatch(logInUser( {username: res.user.username, password: res.user.password_digest, id: res.user.id}))
      }).catch(error => window.alert("Log In failed, please check your username and password and try again"))
  }
}

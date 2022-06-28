import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useDispatch } from 'react-redux'
const Login = () => {
  const dispatch = useDispatch()
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          Login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className='login'>
      <div className='login_container'>
        <img
          src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png'
          alt=''
        />
        <Button
          variant='container'
          color='primary'
          className='btn'
          onClick={signIn}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login

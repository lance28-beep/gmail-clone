import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
  const dispatch = useDispatch()
  const signIn = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      )
    })
  }
  return (
    <div className='login'>
      <div className='login___container'>
        <img
          src='https://lh3.googleusercontent.com/VS3B_qhOFTYsdyNfnlr98zg3HNjB_Gcs9bxVnaQO9MysAoBOXMHATClhRviImKKJV8RV-0s7hl8KeVQcij5Iagb1exHzt40x679l8Q=w0'
          alt=''
          srcset=''
        />
        <Button variant='contained' color='primary' onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default Login

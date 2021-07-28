import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail'
import { useDispatch, useSelector } from 'react-redux'
import { selectMessageIsOpen } from './features/mailSlice'
import { login, selectUser } from './features/userSlice'
import Login from './Login'
import { auth } from './firebase'

function App() {
  const sendMessage = useSelector(selectMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // the users is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
      }
    })

    return () => {
      // cleanup
    }
  }, [])
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className='App'>
          <Header />
          <div className='app___body'>
            <Sidebar />
            <Switch>
              <Route path='/mail'>
                <Mail />
              </Route>
              <Route path='/'>
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessage && <SendMail />}
        </div>
      )}
    </Router>
  )
}

export default App

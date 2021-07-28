import React from 'react'
import './Header.css'
//icons from material UI
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
//imported from materail ui to wrap icons to get the functionality of clickable button
import { Avatar, IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }
  return (
    <div className='header'>
      <div className='header___left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://u01.appmifile.com/images/2019/05/25/65d91020-cff7-4ccd-b469-e5a5296e2e55.jpg'
          alt=''
        />
      </div>
      <div className='header___middle'>
        <SearchIcon />
        <input placeholder='Search mail' type='text' />
        <ArrowDropDownIcon className='header-inputCaret' />
      </div>
      <div className='header___right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          src={user?.photoUrl}
          onClick={signOut}
          style={{ pointer: "cursor" }}
        />
      </div>
    </div>
  )
}

export default Header

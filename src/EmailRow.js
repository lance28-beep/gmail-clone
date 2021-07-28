import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from './features/mailSlice'

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    )
    history.push('/mail')
  }
  return (
    <div onClick={openMail} className='emailRow'>
      <div className='emailRow___options'>
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className='emailRow___title'>{title}</h3>
      <div className='emailRow___message'>
        <h4>
          {subject}
          {' - '}
          <span className='emailRow___description'>{description}</span>
        </h4>
      </div>
      <div className='emailRow___time'>{time}</div>
    </div>
  )
}

export default EmailRow

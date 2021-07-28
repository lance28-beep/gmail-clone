import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import firebase from 'firebase'
import { db } from './firebase'

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (formData) => {
    console.log(formData)
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(closeSendMessage())
  }

  const dispatch = useDispatch()
  return (
    <div className='sendMail'>
      <div className='sendMail___header'>
        <h3>New Message</h3>
        <CloseIcon
          className='sendMail___close'
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='To:'
          type='email'
          {...register('to', { required: true })}
        />
        {errors.to && <p className='sendMail__error'>To is required</p>}
        <input
          placeholder='Subject:'
          type='text'
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className='sendMail__error'>subject is required</p>
        )}
        <input
          placeholder='Message...'
          type='text'
          className='sendMail___message'
          {...register('message', { required: true })}
        />
        {errors.message && (
          <p className='sendMail__error'>message is required</p>
        )}
        <div className='sendMail___options'>
          <Button className='sendMail___send' type='submit'>
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail

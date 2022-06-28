import React from 'react'
import './sendmail.css'
import CloseIcon from '@mui/icons-material/Close'
import RemoveIcon from '@mui/icons-material/Remove'
import { Button } from '@material-ui/core'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import LinkIcon from '@mui/icons-material/Link'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import ImageIcon from '@mui/icons-material/Image'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { db } from './firebase'
import { closeSendMessage } from './features/mailSlice'
import firebase from 'firebase/compat/app'
const Sendmail = () => {
  const dispatch = useDispatch(0)
  const {
    register,
    handleSubmit,
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
  return (
    <div className='sendMail'>
      <div
        onClick={() => dispatch(closeSendMessage())}
        className='sendMail__header'
      >
        <h3>New Message</h3>
        <div className='sendMail__headerRight'>
          <RemoveIcon />

          <OpenInFullIcon />

          <IconButton onClick={() => dispatch(closeSendMessage())}>
            <CloseIcon className='sendMail__close' />
          </IconButton>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='form_input'>
        <input
          type='email'
          {...register('to', { required: true })}
          placeholder='To'
          // ref={register({ required: true })}
        />
        {errors.To && <p className='sendMail__error'>To is Required!</p>}
        <input
          type='subject'
          {...register('subject', { required: true })}
          placeholder='Subject'
          className='subject'
          // ref={register({ required: true })}
        />
        {errors.Subject && (
          <p className='sendMail__error'>Subject is Required!</p>
        )}
        <input
          type='text'
          {...register('message', { required: true })}
          className='sendMail__message'
          // ref={register({ required: true })}
        />
        {errors.Message && (
          <p className='sendMail__error'>Message is Required!</p>
        )}
        <div className='sendMail_options'>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className='sendMail__send'
          >
            Send
          </Button>
          <FormatColorTextIcon />

          <AttachFileIcon />
          <LinkIcon />
          <EmojiEmotionsIcon />

          <AddToDriveIcon />
          <ImageIcon />
          <WorkHistoryIcon />
          <div className='mail_optionRigth'>
            <MoreVertIcon />
            <IconButton onClick={() => dispatch(closeSendMessage())}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Sendmail

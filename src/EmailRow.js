import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'

import { useNavigate } from 'react-router-dom'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectedMail } from './features/mailSlice'
const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useNavigate()
  const dispatch = useDispatch()

  const openMail = () => {
    dispatch(selectedMail({ id, title, subject, description, time }))
    history('/mail')
  }
  return (
    <div onClick={openMail} className='emailRow'>
      <div className='emailRow_options'>
        <Checkbox className='checkbox' />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
      </div>
      <h3 className='emailRow_title'>{title}</h3>
      <div className='emailRow_message'>
        <h4>
          {subject}
          {''} <span className='emailRow_description'>-{description}</span>
        </h4>
      </div>
      <div className='emailRow_time'>{time}</div>
    </div>
  )
}

export default EmailRow

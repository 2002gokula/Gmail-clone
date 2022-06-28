import React, { useState, useEffect } from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import RedoIcon from '@mui/icons-material/Redo'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide'
import InboxIcon from '@mui/icons-material/Inbox'
import PeopleIcon from '@mui/icons-material/People'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import EmailRow from './EmailRow'
import Selection from './Selection'
import { db } from './firebase'
import { Link } from 'react-router-dom'

const EmailLIst = () => {
  const [email, setEmail] = useState([])

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setEmail(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])
  return (
    <div className='emaillist'>
      <div className='emaillist_settings'>
        <div className='emaillist_settingsleft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>

          <IconButton>
            <RedoIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emaillist_settingsright'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          {/* <IconButton>
            <SettingsIcon />
          </IconButton> */}
        </div>
      </div>
      <div className='emaillist_section'>
        <Selection Icon={InboxIcon} title='Primary' color='red' selected />
        <Selection Icon={PeopleIcon} title='Social' color='#1A73E8' />
        <Selection Icon={LocalOfferIcon} title='Promotions' color='#1A73E8' />
      </div>
      <div className='emailist_list'>
        {email.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  )
}

export default EmailLIst

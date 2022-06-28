import React from 'react'
import './Sidebar.css'
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import InboxIcon from '@mui/icons-material/Inbox'
import SidebarOption from './SidebarOption'
import StarIcon from '@mui/icons-material/Star'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendIcon from '@mui/icons-material/Send'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import NoteIcon from '@mui/icons-material/Note'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PersonIcon from '@mui/icons-material/Person'
import DuoIcon from '@mui/icons-material/Duo'
import PhoneIcon from '@mui/icons-material/Phone'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'
const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className='sidebar'>
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<AddIcon fontSize='large' className='addicon' />}
        className='sidebar_compose'
      >
        Compose
      </Button>
      <SidebarOption
        title='Indox'
        Icon={InboxIcon}
        number={54}
        selected={true}
      />
      <SidebarOption title='Starred' Icon={StarIcon} number={54} />
      <SidebarOption title='Snoozed' Icon={AccessTimeIcon} number={54} />
      <SidebarOption title='Send' Icon={SendIcon} number={54} />
      <SidebarOption title='Drafts' Icon={NoteIcon} number={54} />
      <SidebarOption title='Important' Icon={LabelImportantIcon} number={54} />
      <SidebarOption title='More' Icon={ExpandMoreIcon} number={54} />

      <div className='sidebar_footer'>
        <div className='sidebar_footericon'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

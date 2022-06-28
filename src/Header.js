import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AppsIcon from '@mui/icons-material/Apps'
const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png'
          alt=''
        />
      </div>
      <div className='header_middle'>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type='text' placeholder='Search mail' />
        <IconButton>
          <ArrowDropDownIcon className='header_inputCaret' />
        </IconButton>
      </div>
      <div className='header_rigth'>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar className='avatar' />
        </IconButton>
      </div>
    </div>
  )
}

export default Header

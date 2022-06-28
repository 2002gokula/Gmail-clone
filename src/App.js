import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { Routes, Router, Route } from 'react-router-dom'
import Mail from './Mail'
import Sendmail from './Sendmail'
import EmailLIst from './EmailLIst'
import sendMessageIsOpen from './features/mailSlice'
import { useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'
import { selectUser } from './features/userSlice'
// import { Switch } from 'react-router-dom'
import Login from './Login'
const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  return (
    <>
      {/* {!user ? (
        <Login />
      ) : ( */}
      <div className='app'>
        <Header />
        <div className='app_body'>
          <Sidebar />

          <Routes>
            <Route path='/' exact element={<EmailLIst />} />
            <Route path='/mail' element={<Mail />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <Sendmail />}
      </div>
      {/* )} */}
    </>
  )
}

export default App

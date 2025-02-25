import { Route, Routes } from 'react-router'
import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world!</h1>
      <NavBar/>
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}/>
        <Route path='mailboxes' element={<MailboxList/>}/>
        <Route path='new-mailbox' element={<MailboxForm/>}/>
        <Route path='mailboxes/:mailboxId' element={<MailboxDetails/>}/>
      </Routes>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router'
import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'

function App() {
  const [count, setCount] = useState(0)

  const [mailboxes, setMailboxes] = useState([])

  function addBox(newMailboxData){
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData])
  }

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}/>
        <Route path='mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
        <Route path='mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}/>
      </Routes>
    </>
  )
}

export default App

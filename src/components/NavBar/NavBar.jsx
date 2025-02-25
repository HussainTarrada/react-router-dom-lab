import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    <div>

        <Link to='/'>Home</Link>
        <br/>
        <Link to='/mailboxes'>Mailboxes</Link>
        <br/>
        <Link to='/new-mailbox'>New Mailbox</Link>

      
    </div>
  )
}

export default NavBar

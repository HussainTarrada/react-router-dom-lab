import React from 'react'
import { Link } from 'react-router'
import './NavBar.css'

function NavBar() {
  return (
    <div>

        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/mailboxes'>Mailboxes</Link>
        <Link className='navLink' to='/new-mailbox'>New Mailbox</Link>

      
    </div>
  )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router';


function MailboxList(props) {
  console.log(props.mailboxes)
  return (
    <>
          <h2>Mailboxes List</h2>
          <ul>
            {props.mailboxes.map((currentMailbox) => (
              <li key={currentMailbox._id}>
              <Link to={`/mailboxes/${currentMailbox._id}`}>{currentMailbox.boxOwner}</Link>
            </li>  
            ))}
          </ul>
         
    </>
  )
}

export default MailboxList

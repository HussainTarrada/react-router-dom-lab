import React from 'react'
import { Link } from 'react-router';


function MailboxList(props) {
  return (
    <>
         <li key={props.mailboxes._id}>
            <Link to={`/pokemon/${props.mailboxes._id}`}>{props.mailboxes._id}</Link>
          </li>

    </>
  )
}

export default MailboxList

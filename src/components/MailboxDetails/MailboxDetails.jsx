import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';

function MailboxDetails(props) {


const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));


  return (
    <>
      <h2>Mailbox {props.mailboxes._id}</h2>
      <dl>
        <dt>Mailbox Owner:</dt>
        <dd>{props.mailboxes.boxOwner}</dd>
        <dt>Mailbox Size:</dt>
        <dd>{props.mailboxes.boxSize}</dd>
      </dl>
    </>
  )
}

export default MailboxDetails

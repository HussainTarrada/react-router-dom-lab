import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';

function MailboxDetails(props) {


const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));


  return (
    <>
      <h2>Mailbox {mailboxId}</h2>
      <h3>Details</h3>
      <dl>
        <dt>Mailbox Owner:</dt>
        <dd>{selectedBox.boxOwner}</dd>
        <dt>Mailbox Size:</dt>
        <dd>{selectedBox.boxSize}</dd>
      </dl>
    </>
  )
}

export default MailboxDetails

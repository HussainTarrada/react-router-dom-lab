import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';


const initialState = {
  boxSize: '',
  boxOwner: '',
};


function MailboxForm(props) {

  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();


  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormData(initialState)
    navigate('/mailboxes');
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };


  return (
    <>
    <main>
    <h2>New Mailbox</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxOwner">Enter a Boxholder:</label>
      <input
        type="text"
        id="boxOwner"
        name="boxOwner"
        value={formData.boxOwner}
        onChange={handleChange}
      />
      <label htmlFor="boxSize">Enter a Box Size:</label>
      <input
        type="text"
        id="boxSize"
        name="boxSize"
        value={formData.boxSize}
        onChange={handleChange}
      />
   
      <button type="submit">Submit</button>
    </form>
  </main>
  </>
  )
}

export default MailboxForm

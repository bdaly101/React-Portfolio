import { useState } from 'react';

function ContactForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      name: name,
      email: email,
      message: message,
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact</h2>
        <h3>Name:</h3>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          className="name-input"
          onChange={handleNameChange}
        ></input>
        <h3>Email address:</h3>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          className="email-input"
          onChange={handleEmailChange}
        ></input>
        <h3>Message:</h3>
        <textarea // Changed to textarea for message input
          placeholder="Enter message"
          value={message}
          className="message-input"
          onChange={handleMessageChange}
        ></textarea>
        <button className="contact-button">Submit</button>
      </form>
    </div>
  );
}


export default ContactForm;

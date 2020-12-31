import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log(`Form submitted with name of ${formData.name} and ${formData.email}.`)
    event.preventDefault();
  }

  return (
    <div>
      <h1>Keep up to date on the tomato.</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="email">Email address</label>
        <input type="text" id="email" name="email" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

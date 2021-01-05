import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 2rem;
  background-color: #e7eff9;
  background-image: linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%);
`;

const StyledForm = styled.form`
  padding: 4rem;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
`;

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
    console.log(`Form submitted with name of ${formData.name} and ${formData.email}.`);
    event.preventDefault();
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Keep up to date on the tomato.</h1>
        <span>Enter your name and email address below to receive weekly updates on the status of the tomato.</span>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="email">Email address</label>
        <input type="text" id="email" name="email" onChange={handleChange} />
        <button type="submit">Submit</button>
      </StyledForm>
    </FormContainer>
  );
};

export default ContactForm;

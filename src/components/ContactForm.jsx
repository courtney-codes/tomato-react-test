import React, { useState } from 'react';
import styled from 'styled-components';
import { Header1, Body } from './typography';

const ContactFormContainer = styled.div`
  padding: 2rem;
  background-color: #e7eff9;
  background-image: linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%);
`;

const ContactFormBody = styled.form`
  padding: 4rem;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
`;

const ContactFormInput = styled.input`
  display: inline;
  padding: 0.6rem;
  font-size: 16px;
  border: 2px solid #f0f5f8;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ContactFormLabel = styled.label`
  display: inline;
  font-weight: 600;
`;

const ContactFormSubmit = styled.button`
  box-sizing: border-box;
  display: inline;
  background: #203354;
  border: 2px solid #203354;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem 4rem;
  margin: auto;
  border-radius: 2rem;
  transition: border 0.2s ease, color 0.2s ease, background-color 0.2s ease;

  &:hover,
  &:focus {
    color: #203354;
    background: #99f;
    font-weight: 700;
  }
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
    <ContactFormContainer>
      <ContactFormBody onSubmit={handleSubmit}>
        <Header1>Keep up to date on the tomato.</Header1>
        <Body>Enter your name and email address below to receive weekly updates on the status of the tomato.</Body>
        <ContactFormLabel htmlFor="name">Name</ContactFormLabel>
        <ContactFormInput type="text" id="name" name="name" onChange={handleChange} />
        <ContactFormLabel htmlFor="email">Email address</ContactFormLabel>
        <ContactFormInput type="text" id="email" name="email" onChange={handleChange} />
        <ContactFormSubmit type="submit">Submit</ContactFormSubmit>
      </ContactFormBody>
    </ContactFormContainer>
  );
};

export default ContactForm;

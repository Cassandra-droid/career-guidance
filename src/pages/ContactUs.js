// src/pages/ContactUs.js
import React, { useState } from 'react';
import './styles/ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Message sent!');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;

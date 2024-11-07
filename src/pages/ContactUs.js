import React, { useState } from "react";
import map from "../assets/map.jpeg";
import { Email, WhatsApp, Twitter } from "@mui/icons-material"; // Import Material UI icons
import "../styles/ContactUs.css"; // Import the CSS file

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
      {/* Contact Us Header and Icons */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <div className="contact-icons">
          <div className="contact-icon">
            <a href="mailto:your-email@example.com">
              <Email fontSize="large" /> {/* Email Icon */}
            </a>
            <p>info@gmail.com</p> {/* Email Address */}
          </div>
          <div className="contact-icon">
            <a href="https://wa.me/your-whatsapp-number">
              <WhatsApp fontSize="large" /> {/* WhatsApp Icon */}
            </a>
            <p>+1234567890</p> {/* WhatsApp Number */}
          </div>
          <div className="contact-icon">
            <a href="https://twitter.com/your-twitter-handle">
              <Twitter fontSize="large" /> {/* Twitter Icon */}
            </a>
            <p>@yourTwitterHandle</p> {/* Twitter Handle */}
          </div>
        </div>
      </div>

      {/* Contact Form and Google Map */}
      <div className="contact-body">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="map">
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

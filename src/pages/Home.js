import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import "../styles/Home.css";
import map from "../assets/map.jpeg";

function Home() {
  const navigate = useNavigate(); 
  
  const handleExistingUserClick = () => {
    navigate("/login"); // Navigate to Login page
  };

  const services = [
    {
      id: 1,
      title: 'Career Matching',
      description:
        'Receive personalized career recommendations based on your skills, interests, and education.',
    },
    {
      id: 2,
      title: 'Skill Assessment',
      description:
        'Identify strengths and areas for improvement with our adaptive skill assessments.',
    },
    {
      id: 3,
      title: 'Learning Path Suggestions',
      description:
        'Get course and certification recommendations to help you develop skills for your career goals.',
    },
    {
      id: 4,
      title: 'Job Listings',
      description:
        'Browse job opportunities tailored to your qualifications and preferences.',
    },
    {
      id: 5,
      title: 'Progress Tracking',
      description:
        'Monitor your career development and track achievements over time with goal-oriented tracking.',
    },
  ];

  const [resources] = useState([
    { id: 1, title: 'Introduction to Programming', type: 'Course', link: '#' },
    { id: 2, title: 'Data Analysis Certification', type: 'Certification', link: '#' },
    { id: 3, title: 'Effective Communication Skills', type: 'Tutorial', link: '#' },
    { id: 4, title: 'Project Management Basics', type: 'Course', link: '#' },
    { id: 5, title: 'Advanced Machine Learning', type: 'Course', link: '#' },
  ]);

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
    <>
      <div className="homepage">
        <div className="left-section">
          <div className="moving-text">
            <p>Welcome to the AI Career Guidance Website!</p>
            <p>Ready to take the next step in your career?</p>
            <p>Your future is in your hands. Let's shape it together.</p>
            <p>Empower yourself with AI-powered career advice.</p>
            <p>Ignite your passion, accelerate your career.</p>
          </div>
        </div>
        
        <div className="right-section">
          <div className="image-circle">
            <img src={image1} alt="" className="moving-image" />
            <img src={image2} alt="" className="moving-image" />
            <img src={image3} alt="" className="moving-image" />
          </div>
          <button className="get-started-btn" onClick={handleExistingUserClick}>Get Started</button>
        </div>
      </div>

      {/* Services section displayed below the homepage content */}
      <div className="services-container">
        <h1>Our Services</h1>
        <p>Explore the services offered by the E-Career Guidance System:</p>

        <div>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="resources-container">
      <h1>Career Development Resources</h1>
      <p>Explore resources to help advance your career and acquire new skills:</p>
      
      <div>
        {resources.map(resource => (
          <div key={resource.id} className="resource-card">
            <h2>{resource.title}</h2>
            <p>Type: {resource.type}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              View Resource
            </a>
          </div>
        ))}
      </div>
    </div>
    <div className="about-container">
      <h1>About</h1>
      <p>
        Welcome to the AI-Based Career Guidance System, a platform created to assist students and job seekers in Uganda with personalized career guidance. Our mission is to bridge the gap between skills and job market demands through advanced AI-driven recommendations.
      </p>
      <h2>Our Mission</h2>
      <p>
        To empower individuals in their career journey by providing tailored advice, skill assessments, and job matching services.
      </p>
      <h2>Our Team</h2>
      <p>
        We are a team of dedicated professionals from Makerere University committed to helping users reach their full potential in their career paths.
      </p>
    </div>
    <div className="contact-container">
      {/* Contact Us Header and Icons */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>For more information please contact us!!</p>
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
    </>
  );
}

export default Home;

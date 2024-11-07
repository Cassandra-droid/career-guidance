import React from 'react';
import '../styles/Services.css'; // Import the CSS file

const Services = () => {
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

  return (
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
  );
};

export default Services;

import { useState } from 'react';

const Resources = () => {
  const [resources] = useState([
    { id: 1, title: 'Introduction to Programming', type: 'Course', link: '#' },
    { id: 2, title: 'Data Analysis Certification', type: 'Certification', link: '#' },
    { id: 3, title: 'Effective Communication Skills', type: 'Tutorial', link: '#' },
    { id: 4, title: 'Project Management Basics', type: 'Course', link: '#' },
    { id: 5, title: 'Advanced Machine Learning', type: 'Course', link: '#' },
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Career Development Resources</h1>
      <p>Explore resources to help advance your career and acquire new skills:</p>
      
      <div>
        {resources.map(resource => (
          <div key={resource.id} style={resourceCardStyle}>
            <h2>{resource.title}</h2>
            <p>Type: {resource.type}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              View Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styling for simplicity
const resourceCardStyle = {
  border: '1px solid #ddd',
  padding: '15px',
  marginBottom: '10px',
  borderRadius: '5px',
};

export default Resources;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/LearningPath.css';

const LearningPath = () => {
  const [personalizedPaths, setPersonalizedPaths] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Simulate fetching personalized learning paths
    const fetchPersonalizedPaths = async () => {
      const paths = [
        { id: 1, title: 'Full Stack Developer', description: 'A comprehensive path to become a full stack developer.' },
        { id: 2, title: 'Data Science', description: 'Learn the skills required to become a data scientist.' },
        { id: 3, title: 'UI/UX Design', description: 'Master the principles of user interface and experience design.' },
      ];
      setPersonalizedPaths(paths);
    };

    // Simulate fetching progress data
    const fetchProgressData = async () => {
      const progress = [
        { id: 1, title: 'Full Stack Developer', percentage: 70 },
        { id: 2, title: 'Data Science', percentage: 40 },
        { id: 3, title: 'UI/UX Design', percentage: 90 },
      ];
      setProgressData(progress);
    };

    fetchPersonalizedPaths();
    fetchProgressData();
  }, []);

  useEffect(() => {
    // Scroll to section if provided in the state
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <div className="learning-path-container">
      <h2>Learning Paths</h2>

      <div id="personalized-learning" className="personalized-learning">
        <h3>Personalized Learning Paths</h3>
        <ul>
          {personalizedPaths.map(path => (
            <li key={path.id}>
              <strong>{path.title}</strong>: {path.description}
            </li>
          ))}
        </ul>
      </div>

      <div id="progress-tracker" className="progress-tracker">
        <h3>Progress Tracker</h3>
        <ul>
          {progressData.map(progress => (
            <li key={progress.id}>
              <strong>{progress.title}</strong>: {progress.percentage}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LearningPath;

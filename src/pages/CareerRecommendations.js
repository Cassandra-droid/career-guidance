import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CircularProgress from '../components/CircularProgress'; // Import the CircularProgress component
import "../styles/CareerRecommendations.css";

const CareerRecommendations = () => {
  const [careerSuggestions, setCareerSuggestions] = useState([]);
  const [skillMatchPercentage, setSkillMatchPercentage] = useState(0);
  const [emergingFields, setEmergingFields] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchCareerData = async () => {
      const careerData = [
        { title: "Data Scientist", matchPercentage: 85 },
        { title: "Software Engineer", matchPercentage: 90 },
        { title: "UX/UI Designer", matchPercentage: 75 },
      ];
      setCareerSuggestions(careerData);
      setSkillMatchPercentage(80); // Simulated match percentage
    };

    const fetchEmergingFields = async () => {
      const fields = [
        { title: "Artificial Intelligence", description: "Exploring AI and machine learning technologies." },
        { title: "Cybersecurity", description: "Protecting systems and networks from digital attacks." },
        { title: "Sustainability Consulting", description: "Advising businesses on sustainable practices." },
      ];
      setEmergingFields(fields);
    };

    fetchCareerData();
    fetchEmergingFields();
  }, []);

  useEffect(() => {
    // Scroll to section if provided in the state
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <div className="career-recommendations-container">
      <h2>Career Recommendations</h2>

      <div id="career-suggestions" className="career-suggestions">
        <h3>Career Suggestions</h3>
        <ul>
          {careerSuggestions.map((career, index) => (
            <li key={index}>
              {career.title} - Match Percentage: {career.matchPercentage}%
            </li>
          ))}
        </ul>
      </div>

      <div id="skill-match" className="skill-match">
        <h3>Your Skill Match Percentage</h3>
        <CircularProgress percentage={skillMatchPercentage} /> {/* Use the CircularProgress component */}
      </div>

      <div id="emerging-fields" className="emerging-fields">
        <h3>Explore Emerging Fields</h3>
        <ul>
          {emergingFields.map((field, index) => (
            <li key={index}>
              <strong>{field.title}</strong>: {field.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerRecommendations;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.js";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [showWelcome, setShowWelcome] = useState(true); // New state to control welcome message visibility

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || "");

    // Hide the welcome message after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        {showWelcome && username && (
          <div className="welcome-message">
            <h2>WELCOME, {username}!</h2>
          </div>
        )}

        <div className="dashboard-containers">
          <div className="dashboard-container">
            <h3>User Profile</h3>
            <p>Manage and update your user profile information.</p>
            <Link to="/profile">
              <button className="dashboard-button">Update</button>
            </Link>
          </div>

          <div className="dashboard-container">
            <h3>Career Recommendations</h3>
            <p>Discover career suggestions based on your skills and interests.</p>
            <Link to="/career">
              <button className="dashboard-button">Find Career</button>
            </Link>
          </div>

          <div className="dashboard-container">
            <h3>Learning Path</h3>
            <p>Explore personalized learning paths and track your progress.</p>
            <Link to="/learning">
              <button className="dashboard-button">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

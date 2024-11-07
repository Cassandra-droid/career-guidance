import React from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../styles/AltNavbar.css";

function AltNavbar({ username }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="alt-navbar">
      <div className="navbar-content">
        <img src={Logo} alt=""  /> 
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default AltNavbar;

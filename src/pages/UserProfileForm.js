import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserProfileForm.css";

const UserProfileForm = ({ isSignup, onProfileComplete }) => {
  const initialFormData = {
    name: "",
    gender: "",
    skills: "",
    interests: "",
    experience: "",
    education: "",
    dob: "",
    age: "",
    location: "",
  };

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem(`profileData_${localStorage.getItem("username")}`);
    return savedData ? JSON.parse(savedData) : initialFormData;
  });
  const [profileCompletion, setProfileCompletion] = useState(0);

  useEffect(() => {
    const mandatoryFields = ["name", "gender", "skills", "interests", "experience", "education"];
    const filledFields = mandatoryFields.filter((field) => formData[field]?.trim() !== "").length;
    setProfileCompletion(Math.round((filledFields / mandatoryFields.length) * 100));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const username = localStorage.getItem("username");
      const response = await fetch("http://localhost:9000/api/auth/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, username }),
      });
      const data = await response.json();
  
      if (response.ok) {
        alert("Profile saved successfully!");
        localStorage.setItem(`profileData_${username}`, JSON.stringify(formData));
        if (typeof onProfileComplete === "function") onProfileComplete();
      } else {
        alert("Error saving profile: " + data.message);
      }
    } catch (error) {
      console.error("Error while saving profile:", error);
      alert("An error occurred while saving the profile.");
    }
  };
  
  const handleUpdate = async () => {
    const username = localStorage.getItem("username");
    if (!username) {
      alert("Username is missing. Cannot update profile.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:9000/api/auth/profile/${username}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Profile updated successfully!");
        localStorage.setItem(`profileData_${username}`, JSON.stringify(formData));
        if (typeof onProfileComplete === "function") onProfileComplete();
      } else {
        alert("Error updating profile: " + data.message);
      }
    } catch (error) {
      console.error("Error while updating profile:", error);
      alert("An error occurred while updating the profile.");
    }
  };
  
  return (
    <div className="user-profile-container">
      <h2>{isSignup ? "Complete Your Profile" : "Fill in Your Profile"}</h2>
      {!isSignup && (
        <p className="profile-completion">Profile Completion: {profileCompletion}%</p>
      )}
      <form className="user-profile-form">
        {[ 
          { label: "Name*", name: "name" }, 
          { label: "Gender*", name: "gender" }, 
          { label: "Skills*", name: "skills" }, 
          { label: "Interests*", name: "interests" }, 
          { label: "Experience*", name: "experience" }, 
          { label: "Education*", name: "education" }, 
          { label: "Date of Birth", name: "dob", type: "date" }, 
          { label: "Age", name: "age", type: "number" }, 
          { label: "Location", name: "location" } 
        ].map(({ label, name, type = "text" }) => (
          <label key={name}>
            {label}:
            <input
              type={type}
              name={name}
              value={formData[name] || ""}
              onChange={handleInputChange}
              required
            />
          </label>
        ))}
        
        <div className="button-container">
          <button type="button" onClick={handleSave} className="user-profile-button">Save</button>
          {!isSignup && (
            <button type="button" onClick={handleUpdate} className="user-profile-button">Update</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;

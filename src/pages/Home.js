import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate(); 
  const handleNewUserClick = () => {
    navigate("/signup"); // Navigate to Signup page
};
  return (
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
        <button className="get-started-btn" onClick={handleNewUserClick}>Get Started</button>
        
      </div>
    </div>
  );
}

export default Home;
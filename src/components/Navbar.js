import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false); // State to control welcome message
    const navigate = useNavigate(); 

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    const handleLoginClick = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setShowWelcome(true); // Show the welcome message
    };

    const handleCancelClick = () => {
        setShowWelcome(false); // Hide the welcome message
    };
    //Functions to navigate to the respective pages
    const handleNewUserClick = () => {
        navigate("/signup"); // Navigate to Signup page
    };

    const handleExistingUserClick = () => {
        navigate("/login"); // Navigate to Login page
    };

    return (
        <div>
            <nav className="navbar">
                <div className="leftside" id={openLinks ? "open" : "close"} data-testid="leftside-navbar">
                    <img src={Logo} alt="" />
                    <div className="hiddenLinks">
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/resources">Resources</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <div className="navbar-actions">
                            
                            <Link to="/login" onClick={handleLoginClick}> {/* Moved click handler here */}
                                <button className="navbar-btn">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rightside">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>

                    <div className="navbar-actions">
                        
                        <Link to="/login" onClick={handleLoginClick}> {/* Moved click handler here */}
                            <button className="navbar-btn">Login</button>
                        </Link>
                    </div>

                    <div className="toggle-button">
                        <button onClick={toggleNavbar} aria-label="Toggle Navbar">
                            <ReorderIcon />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Welcome message container */}
            {showWelcome && (
                <div className="overlay">
                    <div className="welcome-message">
                        <button className="cancel-button" onClick={handleCancelClick}>&times;</button> {/* Cancel button */}
                        <h2>Welcome to</h2>
                        <h2>AI Career Guidance!</h2>
                        <p>Choose an option:</p>
                        <button className="option-button" onClick={handleNewUserClick}>New User</button>
                        <button className="option-button" onClick={handleExistingUserClick}>Existing User</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;

import React, { useState } from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Woman from "../assets/woman.jpg";
import GoogleIcon from "@mui/icons-material/Google";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [signedInUsername, setSignedInUsername] = useState(""); 
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
    
        // Email and password validation
        if (!email.includes("@") || !email.includes(".com")) {
            setErrorMessage("Please enter a valid email address with '@' and '.com'.");
            return;
        }
    
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 8 characters long and contain both letters and numbers.");
            return;
        }
    
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }
    
        const user = { username, email, password };
    
        try {
            const response = await fetch("http://localhost:9000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log("Signup Success:", data);
                localStorage.setItem('token', data.token);
                // After successful login or signup
                localStorage.setItem("userId", data.userId);
                localStorage.setItem('username', data.username); // Store username
                navigate("/dashboard"); // Redirect to dashboard
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            setErrorMessage("An error occurred while signing up.");
        }
    };
    
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-form">
                    <img src={Logo} alt="Logo" />
                    {signedInUsername && <h2>Welcome back, {signedInUsername}!</h2>} {/* Welcome message */}
                    <form onSubmit={handleSignup}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="password-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button type="button" onClick={togglePasswordVisibility}>
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="login-button">Sign Up</button>
                    </form>
                    <div className="social-login">
                        <p>Or continue with:</p>
                        <button className="google-button">
                            <GoogleIcon /> Google
                        </button>
                    </div>
                    <p className="signup-link">
                        Already have an account? <Link to="/login">Login</Link>
                        <p><Link to="/">Go Home</Link></p>
                    </p>
                </div>
                <div className="welcome-image">
                    <img src={Woman} alt="Welcome" />
                    <h2>Welcome: Sign up today for our AI Career Guidance web!</h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;

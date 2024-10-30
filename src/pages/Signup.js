import React, { useState } from "react";
import "../styles/Signup.css"; // Import your CSS styles
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Woman from "../assets/woman.jpg";
import GoogleIcon from "@mui/icons-material/Google";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <img src={Logo} alt="" />
                <form onSubmit={handleLogin}>
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
                <img src={Woman} alt="" />
                <h2>Welcome:Sign up today for our AI Career Guidance web!</h2>
            </div>
        </div>
    );
}

export default Signup;

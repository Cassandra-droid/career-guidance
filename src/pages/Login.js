import React, { useState } from "react";
import "../styles/Signup.css"; // Import your CSS styles
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Woman from "../assets/woman.jpg";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
    const [username, setUsername] = useState("");
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
                    <Link to="/forgot-password" className="forgot-password-link">
                        Forgot Password?
                    </Link>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="social-login">
                    <p>Or continue with:</p>
                    <button className="google-button">
                        <GoogleIcon /> Google
                    </button>
                </div>
                <p className="signup-link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                    <p><Link to="/">Go Home</Link></p>
                </p>
            </div>
            <div className="welcome-image">
                <img src={Woman} alt="" />
                <h2>Welcome back to the journey of 1000 miles one step at a time.</h2>
            </div>
        </div>
    );
}

export default Login;

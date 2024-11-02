import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Resources from "./pages/Resources.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import SplashScreen from "./components/SplashScreen.js";
import Socialicons from "./components/Socialicons.js";

// New component to manage the layout
function Layout() {
  const location = useLocation();
  
  // List of paths where the Navbar should not appear
  const noNavbarPaths = ["/signup", "/login", "/dashboard"]; // Add more paths as needed

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <Socialicons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {loading ? (
        <SplashScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Router>
          <Layout /> {/* Use the new Layout component */}
        </Router>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Resources from "./pages/Resources.js";
import About from "./pages/About.js";
import Contact from "./pages/ContactUs.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import CareerRecommendations from "./pages/CareerRecommendations.js";
import UserProfileForm from "./pages/UserProfileForm.js";
import LearningPath from "./pages/LearningPath.js";
import Navbar from "./components/Navbar.js";
import AltNavbar from "./components/AltNavbar.js";
import Footer from "./components/Footer.js";
import Dashboard from "./pages/Dashboard.js";
import SplashScreen from "./components/SplashScreen.js";
import Socialicons from "./components/Socialicons.js";
import Sidebar from "./components/Sidebar.js"; // Import Sidebar

function Layout() {
  const location = useLocation();

  // List of paths where Navbar and Sidebar visibility should be controlled
  const noNavbarPaths = ["/signup", "/login", "/dashboard", "/career", "/profile", "/learning"];
  const altNavbarPaths = ["/career", "/profile", "/dashboard", "/learning"]; 
  const withSidebarPaths = ["/dashboard", "/career", "/profile", "/learning"]; // Pages that should display the sidebar

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      {/* Conditionally render the Navbar or AltNavbar */}
      {altNavbarPaths.includes(location.pathname) && <AltNavbar /> }

      {/* Conditionally render the Sidebar */}
      {withSidebarPaths.includes(location.pathname) && <Sidebar />}

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
        <Route path="/career" element={<CareerRecommendations />} />
        <Route path="/profile" element={<UserProfileForm />} />
        <Route path="/learning" element={<LearningPath />} />
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
          <Layout />
        </Router>
      )}
    </div>
  );
}

export default App;

import React from "react";
import { HashRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import logo from './images/Logo.png'; // Import the logo image

const Navbar = () => {
  const location = useLocation();

  // Function to check if the current path is active
  const isActive = (path) => location.pathname === path;

  return (
    <div style={styles.navbar}>
      <Link to="/" style={styles.logoLink}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </Link>
      <div style={styles.linksContainer}>
        <Link
          to="/#/"
          style={isActive("/") ? { ...styles.link, ...styles.activeLink } : styles.link}
        >
          Home
        </Link>
        <Link
          to="/#/about"
          style={isActive("/about") ? { ...styles.link, ...styles.activeLink } : styles.link}
        >
          About
        </Link>
        <Link
          to="/#/services"
          style={isActive("/services") ? { ...styles.link, ...styles.activeLink } : styles.link}
        >
          Services
        </Link>
        <Link
          to="/#/contact"
          style={isActive("/contact") ? { ...styles.link, ...styles.activeLink } : styles.link}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#f4f4f4",
    marginBottom: "2rem",
  },
  logoLink: {
    textDecoration: "none",
  },
  logo: {
    height: "60px",
    width: "auto",
  },
  linksContainer: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#333",
    fontSize: "18px",
  },
  activeLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
};

export default App;

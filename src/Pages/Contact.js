import React from 'react';
import { FaPhoneAlt, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.description}>Feel free to get in touch for orders or any inquiries! We're always happy to help.</p>
      
      <div style={styles.contactDetails}>
        <p style={styles.contactInfo}>
          <FaPhoneAlt style={styles.icon} /> 
          <strong>Phone Number:</strong> 
          <a href="tel:+919705074430" style={styles.link}>9705074430</a>
        </p>
        <p style={styles.contactInfo}>
          <FaInstagram style={styles.icon} /> 
          <strong>Instagram:</strong> 
          <a href="https://www.instagram.com/_mr_invincible_143/" target="_blank" rel="noopener noreferrer" style={styles.link}>
            @_mr_invincible_143
          </a>
        </p>
      </div>

      <div style={styles.footer}>
        <p style={styles.footerText}>Call us for custom orders or inquiries!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
    textAlign: "center",
    marginBottom: "2rem",
  },
  contactDetails: {
    textAlign: "center",
  },
  contactInfo: {
    fontSize: "1.2rem",
    color: "#333",
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: "10px",
    fontSize: "1.5rem", // Adjust the size of the icon
    color: "#007bff", // Set a color for the icon
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  footer: {
    marginTop: "2rem",
    textAlign: "center",
  },
  footerText: {
    fontSize: "1.1rem",
    color: "#777",
    fontStyle: "italic",
  },
};

export default Contact;

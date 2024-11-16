import React from "react";
import Slider from "react-slick"; // Import react-slick for the carousel
import AlluArjun from "../images/Allu_Arjun.jpg"; 
import RadhaKrishna from "../images/Radha_Krishna.jpg";
import RadhaKrishna2 from "../images/Radha_Krishna2 (2).png";
import Hanuman from "../images/Hanuman.jpg";
import SaiRam from "../images/SaiRam.jpg";
import Krishna from "../images/Krishna.jpg";
import Nivetha_Thomus from "../images/Nivetha_Thomus.jpg";
import DQ from "../images/DQ.jpg";
import saiPallavi from "../images/Sai_Pallavi.jpg";
import Pawan from "../images/pawan.jpg";

// Importing the necessary slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Speed of the slide transition
    slidesToShow: 1, // Show 1 image at a time
    slidesToScroll: 1, // Scroll 1 image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Services</h1>
      <div style={styles.servicesList}>
        
        {/* Black and White Arts */}
        <div style={styles.serviceCard}>
          <Slider {...settings}>
            <div>
              <img
                src={Nivetha_Thomus} // Correct image source
                alt="Black and White Art 1"
                style={styles.image}
              />
            </div>
            <div>
              <img
                src={DQ}
                alt="Black and White Art 2"
                style={styles.image}
              />
            </div>
            <div>
              <img
                src={saiPallavi}
                alt="Black and White Art 3"
                style={styles.image}
              />
            </div>
          </Slider>

          <div style={styles.overlay}></div>
          <h2 style={styles.serviceTitle}>Black and White Arts</h2>
          <p style={styles.serviceDescription}>
            I specialize in creating striking black and white artwork that captures the essence and emotion of the subject. Each piece is crafted with fine detail and high contrast, making it timeless and elegant.
          </p>
        </div>

        {/* Color Arts */}
        <div style={styles.serviceCard}>
          <Slider {...settings}>
            <div>
              <img
                src={Krishna}
                alt="Color Art 1"
                style={styles.image}
              />
            </div>
            <div>
              <img
                src={Hanuman}
                alt="Color Art 2"
                style={styles.image}
              />
            </div>
            <div>
              <img
                src={AlluArjun}
                alt="Color Art 3"
                style={styles.image}
              />
            </div>
            <div>
              <img
                src={Pawan}
                alt="Color Art 3"
                style={styles.image}
              />
            </div>
          </Slider>
          <div style={styles.overlay}></div>
          <h2 style={styles.serviceTitle}>Color Arts</h2>
          <p style={styles.serviceDescription}>
            My color artwork is vibrant, dynamic, and full of life. From bold, colorful portraits to intricate landscapes, each piece is designed to captivate and bring a sense of energy to any space.
          </p>
        </div>

      </div>
      <div style={styles.footer}>
        <p style={styles.footerText}>Feel free to reach out for custom orders or inquiries about any of my services!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "3rem",
    maxWidth: "1200px",
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
    marginBottom: "2rem",
    textAlign: "center",
  },
  servicesList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap", // This ensures the cards wrap on smaller screens
  },
  serviceCard: {
    position: "relative",
    width: "350px", // Fixed width for consistency
    height: "600px", // Fixed height for equal height cards
    borderRadius: "8px",
    overflow: "hidden",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "100%", // Ensure the image fills the card
    objectFit: "cover",
  },
  overlay: {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)",
    zIndex: 1,
  },
  serviceTitle: {
    fontSize: "1.8rem",
    fontWeight: "500",
    color: "#000",
    marginBottom: "1rem",
    zIndex: 2,
  },
  serviceDescription: {
    fontSize: "1.2rem",
    color: "#000",
    lineHeight: "1.6",
    zIndex: 2,
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

export default Services;

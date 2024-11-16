import React, { useState } from "react";

// Import images
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

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    {
      name: "Portraits",
      artworks: [
        {
          title: "Allu Arjun",
          image: AlluArjun,
        },
        {
            title: "Krishna",
            image: Krishna,
          },
          {
            title: "Nivetha Thomus",
            image: Nivetha_Thomus,
          },
          {
            title: "Dulqur Salman ",
            image: DQ,
          },
          {
              title: "Sai Pallavi",
              image: saiPallavi,
            },
            {
                title: "Pawan Kalyan",
                image: Pawan,
              },
              {
                title: "Hanuman",
                image: Hanuman,
              },
        {
          title: "Sumedh",
          image: RadhaKrishna,
        },
        {
          title: "Radha Krishna",
          image: RadhaKrishna2,
        },
        
        {
          title: "Sai Ram",
          image: SaiRam,
        },
       
      ],
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div style={styles.container}>
      {categories.map((category) => (
        <div key={category.name} style={styles.category}>
          <h2 style={styles.categoryTitle}>{category.name}</h2>
          <div style={styles.cards}>
            {category.artworks.map((artwork, index) => (
              <div
                key={index}
                style={styles.card}
                onClick={() => openModal(artwork.image)} // Open modal on card click
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  style={styles.image}
                />
                <h3 style={styles.artworkTitle}>{artwork.title}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal for full image preview */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full Preview"
              style={styles.fullImage}
            />
            <button style={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  category: {
    marginBottom: "2rem",
  },
  categoryTitle: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#333",
  },
  cards: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    flex: "1 1 calc(25% - 1rem)",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1rem",
    textAlign: "center",
    maxWidth: "200px",
    cursor: "pointer", // Indicate the card is clickable
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "0.5rem",
  },
  artworkTitle: {
    fontSize: "1rem",
    color: "#555",
  },

  // Modal Styles
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    position: "relative",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "auto",
  },
  fullImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "10px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
  },

  // Media queries for mobile devices
  "@media (max-width: 768px)": {
    cards: {
      display: "block", // Stack items vertically on smaller screens
    },
    card: {
      flex: "1 1 100%", // Each card takes up 100% of the width on mobile
      marginBottom: "1rem", // Space between stacked cards
    },
  },

  // Media queries for larger screens
  "@media (min-width: 769px)": {
    card: {
      flex: "1 1 calc(25% - 1rem)", // 4 items per row on desktop/laptops
    },
  },
};

export default Gallery;

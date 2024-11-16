import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Me</h1>
      <div style={styles.content}>
        <p style={styles.text}>
          Hi, I’m <strong>Mano</strong>, a portrait artist from <strong>Nellore</strong>.
        </p>
        <p style={styles.text}>
          With a deep passion for capturing human emotions and expressions, I specialize in creating intricate and expressive portraits that reflect the true essence of my subjects. I believe every portrait tells a unique story, and my goal is to bring that story to life through art.
        </p>
        <p style={styles.text}>
          Over the years, I’ve honed my skills and explored various techniques, always striving for precision and creativity in each piece. Whether working with traditional mediums or digital art, my focus is to capture the soul behind every face I create.
        </p>
        <p style={styles.text}>
          I find immense joy in seeing the emotional connection people have with their portraits, as it’s a reflection of who they are and their journey. This inspires me to continue evolving as an artist and to share my work with the world.
        </p>
      </div>
      <div style={styles.footer}>
        <p style={styles.footerText}>Thank you for visiting my page. Feel free to explore my gallery and discover my art!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "3rem",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "1.5rem",
    textTransform: "uppercase",
  },
  content: {
    fontSize: "1.2rem",
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "2rem",
  },
  text: {
    marginBottom: "1rem",
  },
  footer: {
    marginTop: "2rem",
    borderTop: "1px solid #ddd",
    paddingTop: "1rem",
  },
  footerText: {
    fontSize: "1.1rem",
    color: "#777",
    fontStyle: "italic",
  },
};

export default About;

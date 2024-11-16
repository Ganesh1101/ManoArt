import React from "react";
import Gallery from "../components/gallery";

const Home = () => (
  <div style={styles.container}>
     <Gallery />
  </div>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    margin: "1rem 0",
    color: "#333",
  },
  description: {
    fontSize: "1.2rem",
    margin: "1rem 0",
    color: "#666",
  },
  image: {
    width: "150px",
    marginTop: "1.5rem",
  },
};

export default Home;

import React from "react";
import styles from "./HomePage.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  return (
    <main className={styles.homepage}>
      <PageNav bgColor="#000" />
      <section></section>
      <Footer />
    </main>
  );
}

export default HomePage;

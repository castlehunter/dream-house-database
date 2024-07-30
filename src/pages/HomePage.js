import React from "react";
import styles from "./HomePage.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <main className={styles.homepage}>
      <PageNav bgColor="#000" />
      <section>
        <h1>Dream Home Real Estate</h1>
      </section>
      <Footer />
    </main>
  );
}

export default HomePage;

import React from "react";
import styles from "./HomePage.module.css";
import Layout from "../components/Layout";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <Layout>
      <main className={styles.homepage}>
        <section>
          <h1>Dream Home Real Estate</h1>
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;

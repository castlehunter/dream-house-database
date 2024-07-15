import React from "react";
import styles from "./HomePage.module.css";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <main className={styles.homepage}>
        <section>
          <h1>
            DBS501
            <br />
            ---
          </h1>
          <h2>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;

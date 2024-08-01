import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "./Staff.module.css";

function Staff() {
  return (
    // <Layout>
    <main className={styles.staff}>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </main>
    // </Layout>
  );
}

export default Staff;

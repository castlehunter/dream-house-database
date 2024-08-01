import React from "react";
import Layout from "../components/Layout";
import styles from "./Staff.module.css";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <Layout>
      <main className={styles.staff}>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </main>
    </Layout>
  );
}

export default Dashboard;

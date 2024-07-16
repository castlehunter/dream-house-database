import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "./Staff.module.css";
import Sidebar from "../components/StaffComponents/StaffSidebar";
// import StaffList from "../components/StaffComponents/StaffList";

function Staff() {
  return (
    <Layout>
      <main className={styles.staff}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </main>
    </Layout>
  );
}

export default Staff;

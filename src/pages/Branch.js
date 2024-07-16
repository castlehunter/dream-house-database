import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "./Staff.module.css";
import Sidebar from "../components/StaffComponents/StaffSidebar";
// import StaffList from "../components/StaffComponents/StaffList";

function Branch() {
  return (
    <Layout>
      <main className={styles.staff}>ddd</main>
    </Layout>
  );
}

export default Branch;

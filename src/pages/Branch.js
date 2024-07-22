import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "./Staff.module.css";
import Sidebar from "../components/Sidebar";
// import StaffList from "../components/StaffComponents/StaffList";

const sidebarLinks = [
  { linkName: "Identify Branch address", linkPath: "identify-branch-address" },
  { linkName: "Open a branch", linkPath: "open-a-branch" },
];

function Branch() {
  return (
    <Layout>
      <main className={styles.staff}>
        <Sidebar sidebarLinks={sidebarLinks} />
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </main>
    </Layout>
  );
}

export default Branch;

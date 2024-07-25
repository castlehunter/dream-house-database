import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "./Staff.module.css";
import Sidebar from "../components/Sidebar";
// import StaffList from "../components/StaffComponents/StaffList";

const sidebarLinks = [
  { linkName: "Identify Branch Address", linkPath: "identify-branch-address" },
  { linkName: "Branch List", linkPath: "branch-list" },
  { linkName: "Open a Branch", linkPath: "open-a-branch" },
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

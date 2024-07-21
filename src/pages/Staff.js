import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "./Staff.module.css";
import Sidebar from "../components/Sidebar";
// import StaffList from "../components/StaffComponents/StaffList";

const sidebarLinks = [
  { linkName: "Staff List", linkPath: "staff-list" },
  { linkName: "Staff Hire", linkPath: "staff-hire" },
];

function Staff() {
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

export default Staff;

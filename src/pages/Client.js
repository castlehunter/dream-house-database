import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "./Staff.module.css";
import Sidebar from "../components/Sidebar";
// import StaffList from "../components/StaffComponents/StaffList";

const sidebarLinks = [
  { linkName: "Client List", linkPath: "client-list" },
  { linkName: "Add a Client", linkPath: "client-add" },
];

function Client() {
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

export default Client;

import React, { useState } from "react";
import styles from "./SidebarNew.module.css";
import { Link } from "react-router-dom";

function SidebarNew() {
  const [activeMenu1, setActiveMenu1] = useState("");
  const [activeMenu2, setActiveMenu2] = useState("");
  const [activeMenu3, setActiveMenu3] = useState("");

  const toggleStaffMenu = (menu) => {
    setActiveMenu1(activeMenu1 === menu ? "" : menu);
  };
  const toggleBranchMenu = (menu) => {
    setActiveMenu2(activeMenu2 === menu ? "" : menu);
  };
  const toggleClientMenu = (menu) => {
    setActiveMenu3(activeMenu3 === menu ? "" : menu);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.menuItem}>
        <div onClick={() => toggleStaffMenu("staff")}>Staff</div>
        {activeMenu1 === "staff" && (
          <div className={styles.subMenu}>
            <Link to="/dashboard/staff/staff-list">Staff List</Link>
            <Link to="/dashboard/staff/staff-hire">Staff Hire</Link>
          </div>
        )}
      </div>
      <div className={styles.menuItem}>
        <div onClick={() => toggleBranchMenu("branch")}>Branch</div>
        {activeMenu2 === "branch" && (
          <div className={styles.subMenu}>
            <Link to="/dashboard/branch/identify-branch-address">
              Identify a branch
            </Link>
            <Link to="/dashboard/branch/branch-list">Branch List</Link>
            <Link to="/dashboard/branch/open-a-branch">Open a branch</Link>
          </div>
        )}
      </div>
      <div className={styles.menuItem}>
        <div onClick={() => toggleClientMenu("staff")}>Client</div>
        {activeMenu3 === "client" && (
          <div className={styles.subMenu}>
            <Link to="/dashboard/client/client-list">Client List</Link>
            <Link to="/dashboard/client/client-add">Add a client</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SidebarNew;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Sidebar.module.css";

function StaffSideBar() {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarItem}>
          <NavLink to="staff-list" activeClassName={styles.activeLink}>
            Staff List
          </NavLink>
        </li>
        <li className={styles.sidebarItem}>
          <NavLink to="staff-hire" activeClassName={styles.activeLink}>
            Staff Hire
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default StaffSideBar;

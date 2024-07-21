import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function SideBar({ sidebarLinks }) {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        {sidebarLinks.map((link) => (
          <li className={styles.sidebarItem}>
            <NavLink to={link.linkPath} activeClassName={styles.activeLink}>
              {link.linkName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBar;

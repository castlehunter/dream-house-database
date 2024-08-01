import React from "react";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.welcomeContainer}>
      <h1>Welcome to the Dream House Dashboard!</h1>
      <p>
        This is your central hub for managing staff, branches, and clients.
        Navigate through the menu to access various features.
      </p>

      <div className={styles.navigationLinks}>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to="/dashboard/staff/staff-list">View Staff List</Link>
          </li>
          <li>
            <Link to="/dashboard/branch/branch-list">View Branch List</Link>
          </li>
          <li>
            <Link to="/dashboard/client/client-list">View Client List</Link>
          </li>
        </ul>
      </div>

      <div className={styles.announcements}>
        <h2>Announcements</h2>
        <p>No new announcements at this time.</p>
      </div>

      <div className={styles.userInfo}>
        <h2>User Information</h2>
        <p>Logged in as: John Doe</p>
      </div>
    </div>
  );
}

export default Welcome;

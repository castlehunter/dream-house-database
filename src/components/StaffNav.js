import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../components/Logo";

function StaffNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/staff-list">Staff List</NavLink>
        </li>
        <li>
          <NavLink to="/staff-hire">Staff Hire</NavLink>
        </li>
        <li>
          <NavLink to="/staff-update">Staff Update</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default StaffNav;

import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../components/Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/staff">Staff</NavLink>
        </li>
        <li>
          <NavLink to="/branch">Branch</NavLink>
        </li>
        <li>
          <NavLink to="/client">Client</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

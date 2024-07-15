import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../components/Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/staff">Staff Main Menu</NavLink>
        </li>
        <li>
          <NavLink to="/branch">Branch Main Menu</NavLink>
        </li>
        <li>
          <NavLink to="/client">Client Main Menu</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

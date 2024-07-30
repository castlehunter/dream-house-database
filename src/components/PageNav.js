import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
// import Logo from "../components/Logo";
import logo from "../assets/logo.png";
import Button from "./Button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/staff", label: "Staff" },
  { to: "/branch", label: "Branch" },
  { to: "/client", label: "Client" },
];

function PageNav({ bgColor = "" }) {
  return (
    <nav className={styles.navigationBar} style={{ backgroundColor: bgColor }}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <span className={styles.logoText}>Dream Home</span>
      </div>
      <div className={styles.navItems}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <Button>Sign Out</Button>
    </nav>
  );
}

export default PageNav;

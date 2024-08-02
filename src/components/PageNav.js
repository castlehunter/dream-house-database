import { NavLink, useNavigate } from "react-router-dom";
import styles from "./PageNav.module.css";
// import Logo from "../components/Logo";
import logo from "../assets/logo.png";
import Button from "./Button";

function PageNav({ bgColor = "" }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard/");
  }

  return (
    <nav className={styles.navigationBar} style={{ backgroundColor: bgColor }}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <span className={styles.logoText}>Dream Home</span>
      </div>
      <h4>Dream Home System</h4>
    </nav>
  );
}

export default PageNav;

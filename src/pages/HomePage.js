import React, { useState } from "react";
import styles from "./HomePage.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevents page refresh on form submit
    // Mock login logic
    if (username && password) {
      console.log("Logged in with:", { username, password });
      navigate("/dashboard");
    } else {
      alert("Please enter a username and password.");
    }
  };

  return (
    <main className={styles.homepage}>
      <PageNav bgColor="#000" />
      <section className={styles.loginSection}>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </section>
      <Footer />
    </main>
  );
}

export default HomePage;

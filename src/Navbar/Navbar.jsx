import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        FROYO<span className={styles.highlight}>I</span>N
      </h1>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className={styles.authButtons}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.signUpButton}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let's work together!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:wilson.jacob62@gmail.com">Wilson.jacob62@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG29.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/jacobwilson">linkedin.com/JacobWilson</a>
        </li>
        <li className={styles.link}>
          <img src="https://www.pngall.com/wp-content/uploads/13/Github-Logo.png" />
          <a href="https://www.github.com/jwilson1229">github.com/jwilson1229</a>
        </li>
      </ul>
    </footer>
  );
};
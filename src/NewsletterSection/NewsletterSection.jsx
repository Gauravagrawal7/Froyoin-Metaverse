import React from "react";
import styles from "./NewsletterSection.module.css";
import dividerImage from "../assets/divider1.png";
import ellipse from "../assets/Ellipse 7.png";

function NewsletterSection() {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContainer}>
        <h2 className={styles.title}>
          Subscribe
          <img
            src={ellipse}
            alt="Background"
            className={styles.backgroundImage7}
          />
        </h2>

        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Type your email here"
            className={styles.emailInput}
          />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Subscribe to our newsletter for updates and insights from Froyoin.
          Stay <br /> informed about new features and exclusive offers just for
          you!
        </p>

        <p className={styles.privacyPolicy}>
          By subscribing you agree to our{" "}
          <span className={styles.policyLink}>Privacy & Policy</span>
        </p>
      </div>

      <img src={dividerImage} className={styles.divider} alt="Divider" />
    </section>
  );
}

export default NewsletterSection;

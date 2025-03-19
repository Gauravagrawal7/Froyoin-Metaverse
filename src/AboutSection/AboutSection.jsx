import React from "react";
import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.title}>The Universe Maker</h2>
      <p className={styles.description}>
        At Froyoin, we pioneer immersive digital realms, blending technology and
        creativity to craft limitless virtual experiences. Our mission is to
        reshape how people connect, explore, and thrive in a boundless digital
        universe.
      </p>

      <div className={styles.featuresTop}>
        <div className={styles.featureItem}>
          <span className={styles.featureNumber}>01.</span>
          <p className={styles.featureText}>
            Pushing boundaries to deliver <br /> groundbreaking digital
            solutions.
          </p>
        </div>

        <div className={styles.featureItem}>
          <span className={styles.featureNumber}>02.</span>
          <p className={styles.featureText}>
            Crafting experiences that prioritize <br /> intuitive and immersive
            interactions
          </p>
        </div>

        <div className={styles.featureItem}>
          <span className={styles.featureNumber}>03.</span>
          <p className={styles.featureText}>
            Building adaptable spaces for brands <br /> of every size.
          </p>
        </div>
      </div>

      <div className={styles.featuresBottom}>
        <div className={styles.featureItem}>
          <span className={styles.featureNumber}>04.</span>
          <p className={styles.featureText}>
            Connecting users in dynamic, <br /> interactive virtual
            environments.
          </p>
        </div>

        <div className={styles.featureItem}>
          <span className={styles.featureNumber}>05.</span>
          <p className={styles.featureText}>
            Integrating advanced tech for lasting <br /> digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

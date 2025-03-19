import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.heroContent}>
      <div className={styles.contentWrapper}>
        <div className={styles.column}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              The Universe <br /> You Always Wanted
            </h2>
            <p className={styles.description}>
              Step into the metaverse where imagination shapes reality. Explore
              digital spaces designed to connect, inspire, and evolve with you,
              merging innovation and interaction in one immersive world.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.circleGraphic} />
        </div>
      </div>
      <button className={styles.enterButton}>Enter Now</button>
    </div>
  );
}

export default HeroSection;

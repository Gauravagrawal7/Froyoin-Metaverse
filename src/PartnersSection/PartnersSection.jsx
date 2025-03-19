import React from "react";
import styles from "./PartnersSection.module.css";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";
import ellipse from "../assets/Ellipse 5.png";

function PartnersSection() {
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.title}>
        Our Partners
        <img
          src={ellipse}
          alt="Background"
          className={styles.backgroundImage5}
        />
      </h2>
      <div className={styles.partnersContainer}>
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner}
            className={styles.partnerLogo}
            alt={`Partner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default PartnersSection;

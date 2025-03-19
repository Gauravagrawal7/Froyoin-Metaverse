import React from "react";
import styles from "./PricingCard.module.css";

function PricingCard({
  tier,
  description,
  price,
  features,
  checkmarkUrl,
  dividerUrl,
  highlighted = false,
}) {
  return (
    <div
      className={`${styles.pricingCard} ${
        highlighted ? styles.highlighted : ""
      }`}
    >
      <h3 className={styles.tier}>{tier}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.priceContainer}>
        <div className={styles.priceWrapper}>
          <span className={styles.currency}>$</span>
          <span className={styles.price}>{price}</span>
        </div>
        <span className={styles.period}>/month</span>
      </div>

      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <li className={styles.featureItem}>
              <img
                src={checkmarkUrl}
                className={styles.checkmark}
                alt="Checkmark"
              />
              <span className={styles.featureText}>{feature}</span>
            </li>
            {index < features.length - 1 && (
              <img src={dividerUrl} className={styles.divider} alt="Divider" />
            )}
          </React.Fragment>
        ))}
      </ul>

      <button className={styles.subscribeButton}>Subscribe</button>
    </div>
  );
}

export default PricingCard;

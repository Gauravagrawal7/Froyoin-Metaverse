import React from "react";
import styles from "./PricingSection.module.css";
import PricingCard from "../PricingCard/PricingCard";
import checkmarkStandard from "../assets/checkmark-standard.png";
import checkmarkPremium from "../assets/checkmark-premium.png";
import checkmarkExclusive from "../assets/checkmark-exclusive.png";
import dividerImage from "../assets/divider.png";

function PricingSection() {
  const standardFeatures = [
    "Lorem ipsum dolor sit amet vel tempor",
    "Lorem ipsum dolor sit amet",
    "Lorem dolor sit amet vel aliqua enim",
    "Lorem ipsum dolor sit vel minim ut",
    "Lorem ipsum sit amet vel labore sed",
  ];

  const premiumFeatures = [
    "Lorem ipsum dolor sit amet vel tempor",
    "Lorem ipsum dolor sit amet",
    "Lorem dolor sit amet vel aliqua enim",
    "Lorem ipsum dolor sit vel minim ut",
    "Lorem ipsum sit amet vel labore sed",
  ];

  const exclusiveFeatures = [
    "Lorem ipsum dolor sit amet vel tempor",
    "Lorem ipsum dolor sit amet",
    "Lorem dolor sit amet vel aliqua enim",
    "Lorem ipsum dolor sit vel minim ut",
    "Lorem ipsum sit amet vel labore sed",
  ];

  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.title}>Choose The Package You Want</h2>

      <div className={styles.pricingContainer}>
        <div className={styles.pricingColumns}>
          <div className={styles.column}>
            <PricingCard
              tier="STANDARD"
              description="Affordable features for essential needs. Perfect for individuals."
              price={125}
              features={standardFeatures}
              checkmarkUrl={checkmarkStandard}
              dividerUrl={dividerImage}
            />
          </div>

          <div className={styles.column}>
            <PricingCard
              tier="PREMIUM"
              description="Enhanced support for growing brands. Ideal for deeper engagement."
              price={250}
              features={premiumFeatures}
              checkmarkUrl={checkmarkPremium}
              dividerUrl={dividerImage}
              highlighted={true}
            />
          </div>

          <div className={styles.column}>
            <PricingCard
              tier="EXCLUSIVE"
              description="Bespoke solutions for enterprises. Tailored for ultimate experiences."
              price={325}
              features={exclusiveFeatures}
              checkmarkUrl={checkmarkExclusive}
              dividerUrl={dividerImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;

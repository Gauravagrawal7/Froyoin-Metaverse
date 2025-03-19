import React, { useState } from "react";
import styles from "./FaqItem.module.css";

function FaqItem({ question, iconUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem} onClick={() => setIsOpen(!isOpen)}>
      <p className={styles.question}>{question}</p>
      <img src={iconUrl} className={styles.icon} alt="Toggle" />

      {isOpen && (
        <div className={styles.answer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      )}
    </div>
  );
}

export default FaqItem;

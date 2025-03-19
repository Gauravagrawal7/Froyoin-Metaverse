import React from "react";
import styles from "./FaqSection.module.css";
import FaqItem from "../FaqItem/FaqItem";
import dividerImage from "../assets/divider2.png";
import faqIcon1 from "../assets/faq-icon-1.png";
import faqIcon2 from "../assets/faq-icon-2.png";
import faqIcon3 from "../assets/faq-icon-3.png";
import faqIcon4 from "../assets/faq-icon-4.png";
import faqIcon5 from "../assets/faq-icon-5.png";
import ellipse from "../assets/Ellipse 6.png";

function FaqSection() {
  const faqItems = [
    {
      question:
        "What services does Froyoin offer for creating immersive metaverse experiences and solutions?",
      iconUrl: faqIcon1,
    },
    {
      question:
        "How can I get started with Froyoin's solutions, and what does the onboarding process entail?",
      iconUrl: faqIcon2,
    },
    {
      question:
        "What features are included and how can they enhance my brand's presence?",
      iconUrl: faqIcon3,
    },
    {
      question:
        "How does Froyoin prioritize user data security, and what measures are in place to protect it?",
      iconUrl: faqIcon4,
    },
    {
      question:
        "Can I customize my virtual space with Froyoin, and what personalization options do you provide?",
      iconUrl: faqIcon5,
    },
  ];

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>
        Frequently Asked Questions
        <img
          src={ellipse}
          alt="Background"
          className={styles.backgroundImage6}
        />
      </h2>
      <p className={styles.description}>
        Find answers to common questions about our services. We cover everything
        from metaverse solutions to technical support. For <br /> further
        inquiries, feel free to contact us directly.
      </p>

      <div className={styles.faqList}>
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            iconUrl={item.iconUrl}
          />
        ))}
      </div>

      <img src={dividerImage} className={styles.divider} alt="Divider" />
    </section>
  );
}

export default FaqSection;

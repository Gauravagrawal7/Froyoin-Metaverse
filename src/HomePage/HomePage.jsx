"use client";
import React from "react";
import styles from "./HomePage.module.css";
import abstractLine from "../assets/abstract-line.png";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import AboutSection from "../AboutSection/AboutSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import PartnersSection from "../PartnersSection/PartnersSection";
import PricingSection from "../PricingSection/PricingSection";
import FaqSection from "../FaqSection/FaqSection";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import Footer from "../Footer/Footer";
import ellipse from "../assets/Ellipse 1.png";

function HomePage() {
  return (
    <main className={styles.homePage}>
      {
        <img
          src={ellipse}
          alt="Background"
          className={styles.backgroundImage1}
        />
      }
      <div className={styles.background}>
        <section className={styles.heroContainer}>
          {
            <img
              src={abstractLine}
              alt="Background"
              className={styles.backgroundImage}
            />
          }
          <Navbar />
          <HeroSection />
        </section>
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <PartnersSection />
        <PricingSection />
        <FaqSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  );
}

export default HomePage;

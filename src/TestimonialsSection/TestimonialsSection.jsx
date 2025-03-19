import React from "react";
import styles from "./TestimonialsSection.module.css";
import sophiaImage from "../assets/sophia-maracana.jpg";
import jacksonImage from "../assets/jackson-robson.jpg";
import mariaImage from "../assets/maria-hatelstoff.jpg";
import ellipse from "../assets/Ellipse 4.png";

function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>What They Said About Us?</h2>
      <p className={styles.description}>
        Hear from our partners and clients who've transformed their vision into
        reality. Discover how immersive experiences and innovative solutions
        have redefined their digital journey with us.
        <img
          src={ellipse}
          alt="Background"
          className={styles.backgroundImage4}
        />
      </p>

      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialColumns}>
          <div className={styles.column}>
            <article className={styles.testimonialCard}>
              <div className={styles.imageContainer}>
                <img
                  src={sophiaImage}
                  className={styles.testimonialImage}
                  alt="Sophia Maracana"
                />
              </div>
              <h3 className={styles.testimonialName}>Sophia Maracana</h3>
              <p className={styles.testimonialRole}>Marketing Director</p>
              <p className={styles.testimonialText}>
                "Working with Froyoin elevated our brand's <br /> reach. The
                virtual space they created <br /> exceeded our expectations,
                seamlessly <br />
                blending innovation with engagement."
              </p>
            </article>
          </div>

          <div className={styles.column}>
            <article className={styles.testimonialCard}>
              <img
                src={jacksonImage}
                className={styles.testimonialImage}
                alt="Jackson Robson"
              />
              <h3 className={styles.testimonialName}>Jackson Robson</h3>
              <p className={styles.testimonialRole}>Creative Lead</p>
              <p className={styles.testimonialText}>
                "Their team at Froyoin brought our vision to <br /> life in ways
                we never imagined. The immersive <br /> experience allowed our
                audience to connect <br /> in a unique, memorable environment."
              </p>
            </article>
          </div>

          <div className={styles.column}>
            <article className={styles.testimonialCard}>
              <img
                src={mariaImage}
                className={styles.testimonialImage}
                alt="Maria Hatelstoff"
              />
              <h3 className={styles.testimonialName}>Maria Hatelstoff</h3>
              <p className={styles.testimonialRole}>
                Business Development Manager
              </p>
              <p className={styles.testimonialText}>
                "Partnering with Froyoin was a game-changer. <br /> The
                customized metaverse solutions offered <br /> unparalleled
                engagement, helping us to stand <br /> out in a competitive
                market."
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

import React from "react";
import styles from "./ServicesSection.module.css";
import virtualSpacesIcon from "../assets/virtual-spaces.png";
import customizedExperiencesIcon from "../assets/customized-experiences.png";
import metaverseConsultingIcon from "../assets/metaverse-consulting.png";
import ellipse from "../assets/Ellipse 3.png";

function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.column}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Amazing Things We Do for You
              <img
                src={ellipse}
                alt="Background"
                className={styles.backgroundImage3}
              />
            </h2>

            <p className={styles.description}>
              Unlock tailored metaverse solutions crafted for immersive
              experiences, collaborative spaces, and seamless virtual
              environments. Empower your brand to innovate and grow in a digital
              world without boundaries.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.servicesContainer}>
            {[
              {
                icon: virtualSpacesIcon,
                title: "Virtual Spaces",
                description:
                  "Design engaging digital spaces that bring people together seamlessly.",
              },
              {
                icon: customizedExperiencesIcon,
                title: "Customized Experiences",
                description:
                  "Tailor unique metaverse journeys perfectly suited for your brand needs.",
              },
              {
                icon: metaverseConsultingIcon,
                title: "Metaverse Consulting",
                description:
                  "Receive expert guidance on digital landscape strategies and innovation.",
              },
            ].map((service, index) => (
              <div className={styles.serviceCard} key={index}>
                <div className={styles.serviceCardContent}>
                  <div className={styles.iconColumn}>
                    <img
                      src={service.icon}
                      className={styles.serviceIcon}
                      alt={service.title}
                    />
                  </div>
                  <div className={styles.textColumn}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

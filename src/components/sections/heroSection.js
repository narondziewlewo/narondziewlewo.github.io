import React from "react";
import "../../styles/sections/heroSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <h2 className="heroSection__title">Na rondzie w Lewo</h2>
      <h3 className="heroSection__subtitle">ważne, że ładunek cały</h3>
      <AnchorLink to="/#about" className="heroSection__anchor">
        <FontAwesomeIcon icon={faAngleDown} size="4x" />
      </AnchorLink>
    </section>
  );
};
export default HeroSection;

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/sections/companySection.scss";

const CompanySection = () => {
  const companyData = {
    experience: [
      {
        value: 4000,
        desc: "Wykonanych\nZleceń",
      },
      {
        value: 3999,
        desc: "Zadowolonych\nklientów",
      },
      {
        value: 4,
        desc: "Doświadczonych\nkierowców",
      },
      {
        value: 0,
        desc: "Wypadków Drogowych",
      },
    ],
    workers: [
      {
        worker: "Plaszczin",
      },
      {
        worker: "Akatsuki",
      },
      {
        worker: "Darrener",
      },
      {
        worker: "Patpalek",
      },
    ],
  };
  return (
    <section className="section" id="company">
      <h2 className="section__title">Nasze Doświadczenie</h2>
      <section className="company">
        {companyData.experience.map((data) => {
          const { value, desc } = data;
          return (
            <article className="company__data">
              <h3 className="company__data--title">{value}</h3>
              <p className="company__data--desc">{desc}</p>
            </article>
          );
        })}
      </section>
      <h2 className="section__title">Nasza Kadra</h2>
      <section className="company">
        {companyData.workers.map((data) => {
          const { worker } = data;
          return (
            <article className="company__data">
              <FontAwesomeIcon icon={faUser} className="company__icon" />
              <h3 className="company__data--desc">{worker}</h3>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default CompanySection;

import React from "react";

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
    </section>
  );
};

export default CompanySection;

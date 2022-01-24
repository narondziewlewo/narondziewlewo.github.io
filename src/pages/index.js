import React from "react";
import Layout from "../components/layout/layout";
import AboutSection from "../components/sections/aboutSection";
import CompanySection from "../components/sections/companySection";
import HeroSection from "../components/sections/heroSection";
import ContactForm from "../components/utility/contactform/contactForm";
import Head from "../components/utility/Head/Head";

const Index = () => {
  return (
    <Layout>
      <Head pageTitle="Home" />
      <HeroSection />
      <AboutSection />
      <CompanySection />
      <ContactForm />
    </Layout>
  );
};

export default Index;

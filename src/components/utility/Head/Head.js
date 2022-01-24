import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Helmet>
      <title>{`${pageTitle} | ${data.site.siteMetadata.title}`}</title>
    </Helmet>
  );
};

export default Head;

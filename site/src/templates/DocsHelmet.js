import React from "react";
import Helmet from "react-helmet";

function DocsHelmet({ metaTitle, metaDescription, canonicalUrl }) {
  return (
    <Helmet>
      {metaTitle ? <title>{metaTitle}</title> : null}
      {metaTitle ? <meta name="title" content={metaTitle} /> : null}
      {metaDescription ? (
        <meta name="description" content={metaDescription} />
      ) : null}
      {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
      {metaDescription ? (
        <meta property="og:description" content={metaDescription} />
      ) : null}
      {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
      {metaDescription ? (
        <meta property="twitter:description" content={metaDescription} />
      ) : null}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}

export default DocsHelmet;

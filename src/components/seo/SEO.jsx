import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image, schema }) => {
  const siteName = "Deona Archery Academy";
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description} />
      
      {/* Viewport & Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url || "https://deonaarcheryacademy.com/"} />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

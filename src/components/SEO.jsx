import React from 'react';
import { Helmet } from 'react-helmet-async'; // Changed to react-helmet-async for React 19

function SEO({
  title,
  description,
  keywords,
  url,
  image,
  schemaData // Added prop for JSON-LD structured data (image_4e6923.png)
}) {
  // Fallback defaults standard routing ke liye
  const defaultTitle = "Best Cloud Hosting Services in Jaipur | JPRHosting";
  const defaultDesc = "JPRHosting provides high-performance Shared Hosting, VPS Hosting, and Dedicated Servers in Jaipur, India with 99.9% uptime.";
  const defaultKeywords = "web hosting jaipur, vps hosting india, cheap cloud hosting, jprhosting";
  const defaultUrl = "https://jprhosting.in";
  const defaultImage = "https://jprhosting.in/logo192.png";

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title ? `${title} | JPRHosting` : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="robots" content="index, follow" />

      {/* Theme Color Fix (image_4e6923.png) */}
      <meta name="theme-color" content="#0066cc" />

      {/* Canonical */}
      <link rel="canonical" href={url || defaultUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title ? `${title} | JPRHosting` : defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content="website" />

      {/* Dynamic Schema Injection (image_4e6923.png) */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
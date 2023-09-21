import React from "react"
import AppleIcon57 from "../assets/favicon/apple-icon-57x57.png"
import AppleIcon60 from "../assets/favicon/apple-icon-60x60.png"
import AppleIcon72 from "../assets/favicon/apple-icon-72x72.png"
import AppleIcon76 from "../assets/favicon/apple-icon-76x76.png"
import AppleIcon114 from "../assets/favicon/apple-icon-114x114.png"
import AppleIcon120 from "../assets/favicon/apple-icon-120x120.png"
import AppleIcon144 from "../assets/favicon/apple-icon-144x144.png"
import AppleIcon152 from "../assets/favicon/apple-icon-152x152.png"
import AppleIcon180 from "../assets/favicon/apple-icon-180x180.png"
import AndroidIcon192 from "../assets/favicon/android-icon-192x192.png"
import Favicon16 from "../assets/favicon/favicon-16x16.png"
import Favicon32 from "../assets/favicon/favicon-32x32.png"
import Favicon96 from "../assets/favicon/favicon-96x96.png"
import MSTile from "../assets/favicon/ms-icon-144x144.png"

export function HtmlHead({
  title,
  description,
  socialImage,
  path,
  canonicalUrl,
}) {
  const formattedTitle = title
    ? `${title} | Mercedes Bernard`
    : "Mercedes Bernard | Software engineering leader"
  const formattedDescription = description
    ? description
    : "Mercedes Bernard is a values-driven, growth-oriented software engineering leader"

  return (
    <>
      <html lang="en-US" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title>{formattedTitle}</title>
      <meta name="description" content={formattedDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@mercedescodes" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={formattedDescription} />
      <meta name="twitter:creator" content="@mercedescodes" />
      <meta
        name="twitter:image"
        content={socialImage ? `https:${socialImage}?w=800&fit=fill` : ""}
      />
      <meta name="og:title" content={formattedTitle} />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={`http://www.mercedesbernard.com/${path}`}
      />
      <meta
        property="og:image"
        content={socialImage ? `https:${socialImage}?w=800&fit=fill` : ""}
      />
      <meta property="og:description" content={formattedDescription} />
      <meta property="og:site_name" content="Mercedes Bernard" />
      {!!canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <link rel="apple-touch-icon" sizes="57x57" href={AppleIcon57} />
      <link rel="apple-touch-icon" sizes="60x60" href={AppleIcon60} />
      <link rel="apple-touch-icon" sizes="72x72" href={AppleIcon72} />
      <link rel="apple-touch-icon" sizes="76x76" href={AppleIcon76} />
      <link rel="apple-touch-icon" sizes="114x114" href={AppleIcon114} />
      <link rel="apple-touch-icon" sizes="120x120" href={AppleIcon120} />
      <link rel="apple-touch-icon" sizes="144x144" href={AppleIcon144} />
      <link rel="apple-touch-icon" sizes="152x152" href={AppleIcon152} />
      <link rel="apple-touch-icon" sizes="180x180" href={AppleIcon180} />
      <link rel="icon" type="image/png" sizes="192x192" href={AndroidIcon192} />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
      <link rel="icon" type="image/png" sizes="96x96" href={Favicon96} />
      <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileImage" content={MSTile} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-121177820-1"
      ></script>
      <script>
        {`if ("${process.env.NODE_ENV}" === "production") {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "UA-121177820-1");
      }`}
      </script>
    </>
  )
}

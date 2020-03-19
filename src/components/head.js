import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
 return (
  <Helmet>
   <script
    src="https://kit.fontawesome.com/fe4f036823.js"
    crossorigin="anonymous"
   ></script>

   <meta charSet="utf-8" />
   <base href="/" />
   <title>Cliche</title>
   <meta name="Description" content="Изготовление клише спб" />
   <meta property="og:title" content="Cliche" />
   <meta property="og:description" content="Изготовление клише" />
   <meta property="og:image" content="https://something.io/cover.jpeg" />
   <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap"
    rel="stylesheet"
   />
   <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
   />

   <link
    rel="apple-touch-icon"
    sizes="57x57"
    href="/favicon/apple-icon-57x57.png"
   />
   <link
    rel="apple-touch-icon"
    sizes="60x60"
    href="/favicon/apple-icon-60x60.png"
   />
   <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="/favicon/apple-icon-72x72.png"
   />
   <link
    rel="apple-touch-icon"
    sizes="76x76"
    href="/favicon/apple-icon-76x76.png"
   />
   <link
    rel="apple-touch-icon"
    sizes="114x114"
    href="/favicon/apple-icon-114x114.png"
   />
   <link
    rel="apple-touch-icon"
    sizes="120x120"
    href="/favicon/apple-icon-120x120.png"
   />
   <link
    rel="apple-touch-icon"
    sizes="144x144"
    href="/favicon/apple-icon-144x144.png"
   />
   <link
    rel="apple-touch-icon"
    sizes="152x152"
    href="/favicon/apple-icon-152x152.png"
   />
   <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/favicon/apple-icon-180x180.png"
   />
   <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="/favicon/android-icon-192x192.png"
   />
   <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/favicon/favicon-32x32.png"
   />
   <link
    rel="icon"
    type="image/png"
    sizes="96x96"
    href="/favicon/favicon-96x96.png"
   />
   <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/favicon/favicon-16x16.png"
   />
   <link rel="manifest" href="/favicon/manifest.json" />
   <meta name="msapplication-TileColor" content="#ffffff" />
   <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
   <meta name="theme-color" content="#ffffff" />
  </Helmet>
 )
}

export default Head

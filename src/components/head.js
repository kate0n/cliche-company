import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
 return (
  <Helmet>
   <meta charSet="utf-8" />
   <base href="/" />
   <title>Cliche</title>
   <meta name="Description" content="Изготовление клише спб" />
   <meta property="og:title" content="Cliche" />
   <meta property="og:description" content="Изготовление клише и штампов" />
   <meta property="og:image" content="https://something.io/cover.jpeg" />
   {/* яндекс-вебмастер */}
   <meta name="yandex-verification" content="01586322232d2ebc" />
   {/* geo tag */}
   <meta name="geo.region" content="RU" />
   <meta name="geo.placename" content="округ Горелово" />
   <meta name="geo.position" content="59.76677;30.11078" />
   <meta name="ICBM" content="59.76677, 30.11078" />

   {/* Yandex.Metrika counter */}
   {/* <script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(61207873, "init", {
        clickmap: true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/61207873" style="position:absolute; left:-9999px;" alt="" /></div></noscript> */}
   {/* /Yandex.Metrika counter */}
   {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
   {/* <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=UA-161448697-1"
   ></script>
   <script>
    window.dataLayer = window.dataLayer || []; function gtag()
    {dataLayer.push(arguments)}
    gtag('js', new Date()); gtag('config', 'UA-161448697-1');
   </script> */}
   {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

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

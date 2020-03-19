import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Scrollchor from "react-scrollchor"
// import SEO from "../components/seo"
import "../styles/main.scss"
import Head from "../components/head"
import Services from "../components/services"
import Materials from "../components/materials"
import ClecheTypes from "../components/clecheTypes"
import Feature from "../components/features"
import Contacts from "../components/contacts"
import Footer from "../components/footer"
import arrowDown from "../images/down-btn.png"
const IndexPage = () => (
 <>
  <Head />
  <main className="container">
   {/* <SEO title="Home" /> */}

   {/* main section */}
   <div className="main">
    <h1 className="hidden">Изготовление клише</h1>{" "}
    <div className="main_bg">
     <ScrollAnimation animateIn="fadeIn" duration={2}>
      <h2 className="title_h2">Cliche</h2>{" "}
     </ScrollAnimation>
     <ScrollAnimation animateIn="fadeIn" duration={2}>
      <h3 className="title_h3 text">
       Изготовление высококачественных тиражестойких клеше для декаративной
       обрабоки изделий.
      </h3>
     </ScrollAnimation>
     <ScrollAnimation animateIn="fadeIn" duration={2}>
      <p className="text">
       Изготавливаем из латуни, магний и меди. Мы подберем вариант наиболее
       подходящий к вашему тиражу, принимая во внимания тиражестойкость,
       скорость, экономичность и быстроту изготовления.
      </p>
     </ScrollAnimation>
     <ScrollAnimation animateIn="fadeIn" duration={2}>
      <button className="button">
       {" "}
       <Scrollchor to="#contacts">СВЯЗАТЬСЯ </Scrollchor>
      </button>

      <Scrollchor to="#services">
       <img src={arrowDown} className="main__arrow-down" />
      </Scrollchor>
     </ScrollAnimation>
    </div>
   </div>
   <Services />
   <Materials />
   <ClecheTypes />
   <Feature />
   <Contacts />
   <Footer />
  </main>
  <footer></footer>
 </>
)

export default IndexPage

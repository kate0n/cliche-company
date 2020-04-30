import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Scrollchor from "react-scrollchor"
import data from "../data"
import arrowDown from "../images/down-btn.png"

export const Main = () => (
 <div className="main">
  <h1 className="hidden">Изготовление клише и штампов</h1>{" "}
  <div className="main_bg">
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <h2 className="title_h2">{data.main.title}</h2>
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <h3 className="title_h3 text">{data.main.subtitle1}</h3>
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <p className="text">{data.main.subtitle2}</p>
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <Scrollchor to="#contacts">
     <button className="button">{data.main.buttonText}</button>
    </Scrollchor>
    <Scrollchor to="#services">
     <img src={arrowDown} className="main__arrow-down" alt="background" />
    </Scrollchor>
   </ScrollAnimation>
  </div>
 </div>
)

export default Main

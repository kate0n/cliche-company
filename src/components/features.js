import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Container from "./container"
import bg from "../images/features_bg.png"
import data from "../data"

export const Features = () => (
 <Container>
  <div className="features">
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <h3 className="title_h3">{data.features.title}</h3>{" "}
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <div className="features__desc subtitle">{data.features.subtitle}</div>
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <div className="features__list__img-wrapper">
     <div className="features__list__img-overlay">
      <ul className="features__list__text">
       {data.features.features.map(feature => (
        <li>{feature}</li>
       ))}
      </ul>
     </div>
     <img
      src={bg}
      alt="background"
      className="features__list__img"
      alt="background"
     />
    </div>
   </ScrollAnimation>
  </div>
 </Container>
)

export default Features

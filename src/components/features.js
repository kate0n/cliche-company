import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Container from "./container"
import bg from "../images/features_bg.png"

const features = [
 "Изготавливаем из латуни размером до 400x200мм",
 "Осуществляем доставку по России",
 "Используем качественные калиброванные листы металла, производимые для типографских клеше",
 "Тщательно следим за качеством оттиска и изображением",
]

export const Features = () => (
 <Container>
  <div className="features">
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <h3 className="title_h3">НАШИ ОСОБЕННОСТИ</h3>{" "}
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <div className="features__desc subtitle">
     Мы обладаем новейшими технологиями и современным оборудованием, которое
     обслуживается высококвалифицированным персоналом.
    </div>
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <div className="features__list__img-wrapper">
     <div className="features__list__img-overlay">
      <ul className="features__list__text">
       {features.map(feature => (
        <li>{feature}</li>
       ))}
      </ul>
     </div>
     <img src={bg} alt="background" className="features__list__img" />
    </div>
   </ScrollAnimation>
  </div>
 </Container>
)

export default Features

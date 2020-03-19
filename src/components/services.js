import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Container from "./container"
import Card1 from "../images/card1.png"
import Card2 from "../images/card2.png"
import Card3 from "../images/card3.png"
import Card4 from "../images/card4.png"

const services = [
 {
  img: Card1,
  text:
   "Изготовление клеше для тиснения, травление клеше, обработка кромок, доработка клеше",
 },
 {
  img: Card2,
  text: "Конгревное клеше",
 },
 //  {
 //   img: Card3,
 //   text: "Декор предметов гардироба",
 //  },
 //  {
 //   img: Card4,
 //   text: "Клише для кинг, изготовление патриц",
 //  },
]

export const Services = () => (
 <Container>
  <div className="services" id="services">
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <h3 className="title_h3">НАШИ УСЛУГИ</h3>{" "}
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <p className="text_sm">
     Клише – печатная форма, напоминающая по конструкции печать. Производим
     высококачественные клеше для горячего теснения фольгой и конгрева из
     латуни, магния и меди. Тиражестойкость до 300 000 оттисков.
    </p>
   </ScrollAnimation>
   <div className="services__layout">
    <CardItem
     text="Изготовление клеше для тиснения, травление клеше, обработка кромок, доработка клеше"
     img={Card1}
    />
    <div className="services__layout__right-block">
     <CardItem style={{ width: "100%" }} text="Конгревное клеше" img={Card2} />
     <div className="services__layout__inner-block">
      <CardItem text="Декор предметов гардироба" img={Card3} />
      <CardItem text="Клише для кинг, изготовление патриц" img={Card4} />
     </div>
    </div>
   </div>
  </div>
 </Container>
)

const CardItem = ({ text, img, style }) => (
 <div className="services__layout__card" style={style}>
  <ScrollAnimation animateIn="fadeIn" duration={2}>
   <div className="services__layout__card-text">{text}</div>
   <img className="services__layout__card-img" src={img} />
  </ScrollAnimation>
 </div>
)

export default Services

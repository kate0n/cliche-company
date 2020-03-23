import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Container from "./container"
import data from "../data"

export const Services = () => (
 <Container>
  <div className="services" id="services">
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <h3 className="title_h3">{data.services.title}</h3>{" "}
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <p className="text_sm">{data.services.subtitle}</p>
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <div className="services__layout">
     <CardItem
      text={data.services.services[0].text}
      img={data.services.services[0].img}
     />
     <div className="services__layout__right-block">
      <CardItem
       style={{ width: "100%" }}
       text={data.services.services[1].text}
       img={data.services.services[1].img}
      />
      <div className="services__layout__inner-block">
       <CardItem
        text={data.services.services[2].text}
        img={data.services.services[2].img}
       />
       <CardItem
        text={data.services.services[3].text}
        img={data.services.services[3].img}
       />
      </div>
     </div>
    </div>
   </ScrollAnimation>
  </div>
 </Container>
)

const CardItem = ({ text, img, style }) => (
 <div className="services__layout__card" style={style}>
  <div className="services__layout__card-text">{text}</div>
  <img
   className="services__layout__card-img"
   src={img}
   alt="background for service"
  />
 </div>
)

export default Services

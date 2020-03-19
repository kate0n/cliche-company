import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Container from "./container"

const clecheTypes = [
 {
  title: "Горчее теснение фольгой",
  desc:
   "Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm",
 },
 {
  title: "Конгрев",
  desc:
   "Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm",
 },
 {
  title: "Теснение фольшгой конгревом",
  desc:
   "Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm",
 },
 {
  title: "Припрессировка голограмм",
  desc:
   "Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm",
 },
 {
  title: "Текстурирование",
  desc:
   "Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm",
 },
 {
  title: "Блинт",
  desc:
   "Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm Loreum Iplusm",
 },
]

export const ClecheTypes = () => {
 const [isOpen, setIsOpen] = React.useState(null)

 const handleAccordion = index => {
  index === isOpen ? setIsOpen(null) : setIsOpen(index)
 }

 return (
  <Container>
   <div className="cleche-types">
    <ScrollAnimation animateIn="fadeIn" duration={2}>
     <h3 className="title_h3">ТИПЫ КЛЕШЕ</h3>{" "}
    </ScrollAnimation>
    <div className="cleche-types__accordion">
     {clecheTypes.map((clecheType, index) => (
      <QuestionItem
       {...clecheType}
       key={index}
       index={index}
       isOpen={isOpen}
       handleAccordion={handleAccordion}
      />
      // <div className="cleche-types__item">
      //  <div className="cleche-types__item__title">{clecheType.title}</div>
      //  <div className="cleche-types__item__desc">{clecheType.desc}</div>
      // </div>
     ))}
    </div>
   </div>
  </Container>
 )
}

const QuestionItem = ({ title, desc, isOpen, handleAccordion, index }) => (
 <ScrollAnimation animateIn="fadeIn" duration={2}>
  <div
   className="cleche-types__accordion__item"
   onClick={() => handleAccordion(index)}
  >
   <div className="cleche-types__accordion__item__title-wrapper">
    <p className="cleche-types__accordion__item__title">{title}</p>
    {isOpen === index ? (
     <i className="fas fa-chevron-up"></i>
    ) : (
     <i className="fas fa-chevron-down"></i>
    )}
   </div>

   <div
    className={`cleche-types__accordion__item__desc_${
     isOpen === index ? "open" : "hidden"
    }`}
   >
    <p>{desc}</p>
   </div>
  </div>
 </ScrollAnimation>
)

export default ClecheTypes

import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Container from "./container"
import arrowDown from "../images/arrowDown.svg"
import arrowUp from "../images/arrowUp.svg"
import data from "../data"

export const ClicheTypes = () => {
 const [isOpen, setIsOpen] = React.useState(null)

 const handleAccordion = index => {
  index === isOpen ? setIsOpen(null) : setIsOpen(index)
 }

 const handleKeyDown = ev => {
  if (ev.keyCode === 13) {
   this.focus()
  }
 }

 return (
  <Container>
   <div className="cleche-types">
    <ScrollAnimation animateIn="fadeIn" duration={2}>
     <h3 className="title_h3">{data.clicheTypes.title}</h3>{" "}
    </ScrollAnimation>
    <div className="cleche-types__accordion">
     {data.clicheTypes.clicheTypes.map((clecheType, index) => (
      <QuestionItem
       {...clecheType}
       key={index}
       index={index}
       isOpen={isOpen}
       handleAccordion={handleAccordion}
       handleKeyDown={handleKeyDown}
      />
     ))}
    </div>
   </div>
  </Container>
 )
}

const QuestionItem = ({
 title,
 desc,
 isOpen,
 handleAccordion,
 handleKeyDown,
 index,
}) => (
 <ScrollAnimation animateIn="fadeIn" duration={2}>
  <div
   className="cleche-types__accordion__item"
   onClick={() => handleAccordion(index)}
   onKeyDown={handleKeyDown}
   role="button"
   tabIndex={0}
  >
   <div className="cleche-types__accordion__item__title-wrapper">
    <p className="cleche-types__accordion__item__title">{title}</p>
    {isOpen === index ? (
     <img src={arrowDown} alt="arrow down" />
    ) : (
     <img src={arrowUp} alt="arrow up" />
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

export default ClicheTypes

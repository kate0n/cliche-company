import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Container from "./container"

const clecheTypes = [
 {
  title: "Горчее теснение фольгой",
  desc:
   "переносит фольгу на бумагу, картон, пластик, кожу. Возможно заказать дополнительное зеркалирование тиснящих элементов для придания оттиску зеркального глянца",
 },
 {
  title: "Конгрев",
  desc:
   "выполняется подъем изображения (выпуклость). В комплект необходимо заказать одно из: пластиковую матрицу, фирменную магниевую патрицу (увеличение прочности и тиражестойкости), матричные картоны",
 },
 {
  title: "Теснение фольшгой конгревом",
  desc:
   " сокращение сроков тиража применяется технология тиснения фольгой с конгревом в один удар. Это удорожает клише, но сокращает время тиража вдвое. Обязательно наличие хорошего пресса и применение компрессионных пленок",
 },
 {
  title: "Припрессировка голограмм",
  desc:
   "голограммы бывают на самоклейке и в виде фольги для тиснения. Важно точное позиционирование оттиска. Чаще используется латунное клише",
 },
 {
  title: "Текстурирование",
  desc:
   "чаще всего для текстурных материалов (основное изображение делается гладким относительно текстурного фона",
 },
 {
  title: "Блинт",
  desc:
   "из клеше формируется текстурное изображение (фактуры ткани/кожи) и переносится на бумагу или картон",
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

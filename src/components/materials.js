import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

import classNames from "classnames"
import Container from "./container"

const materialsDesc = [
 [
  "оптмально для тисненияна мягких и толстых материалах с средними тиражами",
  "магний гарантирует высокую резкость изображений и прочтность",
  "рекомендуетсядо 300 000 оттисков, однако есть случаи работы на одном клеше на гораздо больших объемах. чем крупннее элементы, тем выше тиражестойкость",
 ],
 [
  "надежное решение для массовых тиражней упаковки со сложным конгревом, штампов для изделий из кожи",
  "основное отличие — возможность заготовления многоуровневых клеше для конгрева с тиснением в один удар",
  "латунь выдерживает давление пресса и тонкие элементы не сминаются",
  "Магниевые недостаточно прочные для таких работ, а медные тяжело обрабатывать механической обработкой",
  "параметры теплопередачи, близки к меди, поэтому клише быстро набирает и отдает тепло, что уменьшает риск брака при оттиске. ",
 ],
 [
  "высочайший коэффициен теплопередачи, что гарантирует стабильность температуры в процессе скоростного тиснения, а значит высокое качество оттиска",
  "cтабильно высокое качество оттиска",
  "прочность медных клише - прочность тонких элементов и возможность изготовления минимальных толщин линий",
 ],
]

const tabs = ["МАГНИЕВЫЕ", "ЛАТУННЫЕ", "МЕДНЫЕ"]

export const Materials = () => {
 const [activeTab, setActiveTab] = React.useState(0)

 const handleTabChange = tabIndex => {
  setActiveTab(tabIndex)
 }

 return (
  <Container>
   <div className="materials">
    <ScrollAnimation animateIn="fadeIn" duration={2}>
     <h3 className="title_h3">МАТЕРИАЛЫ</h3>{" "}
    </ScrollAnimation>
    <ul className="materials__tabs">
     {tabs.map((tab, i) => (
      <ScrollAnimation animateIn="fadeIn" duration={2}>
       <li
        className={classNames("materials__tabs__item text_sm", {
         materials__tabs__item_active: activeTab === i,
        })}
        onClick={() => handleTabChange(i)}
       >
        <p>{tab}</p>
       </li>
      </ScrollAnimation>
     ))}
    </ul>
    <ul className="materials__desc">
     {materialsDesc[activeTab].map(desc => (
      <ScrollAnimation animateIn="fadeIn" duration={2}>
       <li className="materials__desc__item text_sm">– {desc} </li>
      </ScrollAnimation>
     ))}
    </ul>
   </div>
  </Container>
 )
}

export default Materials

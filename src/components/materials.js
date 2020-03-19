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
 ["1", "2", "3"],
 ["1", "2", "3"],
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
        className={classNames("materials__tabs__item", {
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
       <li className="materials__desc__item">– {desc} </li>
      </ScrollAnimation>
     ))}
    </ul>
   </div>
  </Container>
 )
}

export default Materials

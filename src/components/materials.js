import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import classNames from "classnames"
import Container from "./container"
import data from "../data"

export const Materials = () => {
 const [activeTab, setActiveTab] = React.useState(0)

 const handleTabChange = tabIndex => {
  setActiveTab(tabIndex)
 }

 return (
  <Container>
   <div className="materials">
    <ScrollAnimation animateIn="fadeIn" duration={2}>
     <h3 className="title_h3">{data.materials.title}</h3>{" "}
    </ScrollAnimation>
    <ul className="materials__tabs">
     {data.materials.tabs.map((tab, i) => (
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
     {data.materials.desc[activeTab].map(desc => (
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

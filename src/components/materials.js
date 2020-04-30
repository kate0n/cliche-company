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

 const handleKeyDown = ev => {
  if (ev.keyCode === 13) {
   this.focus()
  }
 }

 return (
  <Container>
   <div className="materials">
    <ScrollAnimation animateIn="fadeIn" duration={2}>
     <h3 className="title_h3">{data.materials.title}</h3>{" "}
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={2}>
     <ul className="materials__tabs">
      {data.materials.tabs.map((tab, i) => (
       <li
        key={i}
        className={classNames("materials__tabs__item text_sm", {
         materials__tabs__item_active: activeTab === i,
        })}
        onClick={() => handleTabChange(i)}
        onKeyDown={handleKeyDown}
        role="presentation"
        // tabIndex={0}
       >
        {tab}
       </li>
      ))}
     </ul>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={2}>
     <ul className="materials__desc">
      {data.materials.desc[activeTab].map((desc, i) => (
       <li key={i} className="materials__desc__item text_sm">
        – {desc}{" "}
       </li>
      ))}
     </ul>
    </ScrollAnimation>
   </div>
  </Container>
 )
}

export default Materials

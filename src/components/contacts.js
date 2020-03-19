import React from "react"
import axios from "axios"
import ScrollAnimation from "react-animate-on-scroll"
import Container from "./container"
import phoneIcon from "../images/phone_icon.svg"
import mailIcon from "../images/mail_icon.svg"

const inputs = [
 {
  name: "name",
  label: "Имя",
  type: "text",
 },
 {
  name: "email",
  label: "Почта",
  type: "email",
 },
 {
  name: "phone",
  label: "Телефон",
  type: "phone",
 },
 {
  name: "file",
  label: "Файл",
  type: "file",
 },
]

export const Contacts = () => {
 const [serverState, setServerState] = React.useState({
  submitting: false,
  status: null,
 })

 const handleServerResponse = (ok, msg, form) => {
  setServerState({
   submitting: false,
   status: { ok, msg },
  })
  if (ok) {
   form.reset()
  }
 }
 const handleOnSubmit = e => {
  e.preventDefault()
  const form = e.target
  setServerState({ submitting: true })
  axios({
   method: "post",
   enctype: "multipart/form-data",
   url: "https://getform.io/f/a406c2c0-db0d-4b14-bf36-e0e2f2dafea2",
   data: new FormData(form),
  })
   .then(r => {
    handleServerResponse(true, "Мы успешно получили вашу заявку :)", form)
   })
   .catch(r => {
    handleServerResponse(
     false,
     "Что-то пошло не так. Отправьте форму заново",
     form
    )
   })
 }
 return (
  <Container>
   <ScrollAnimation animateIn="fadeIn" duration={2}>
    <h3 className="title_h3">СВЯАТЬСЯ С НАМИ</h3>{" "}
   </ScrollAnimation>
   <div className="contacts">
    {/* left block */}

    <div className="contacts__info">
     <ScrollAnimation animateIn="fadeIn" duration={2}>
      <div className="contacts__info__text">
       <p className="text_md">
        Мы всегда на связи. Пожалуйста, заполните форму. С каждым клиентом мы
        разрабатываем индивидуальные условия сотрудничества
       </p>
       <p className="text_md">
        Для изготовления понадобится файл формата stl, но также подойдет
        jpg/png, cdr, eps, ei
       </p>
      </div>
     </ScrollAnimation>
     <ScrollAnimation animateIn="fadeIn" duration={2}>
      <div className="contacts__info__contacts-list">
       <div className="contacts__info__contacts-list__item text_sm">
        <img src={phoneIcon} />
        <p>
         <a href="tel:+79626869000">+7–(962)–686–90–00</a>
        </p>
       </div>
       <div className="contacts__info__contacts-list__item text_sm">
        <img src={mailIcon} />
        <p>svetlichny.dmitry@gmail.com</p>
       </div>
      </div>
     </ScrollAnimation>
    </div>

    {/* right block form */}

    <form
     className="contacts__form"
     onSubmit={handleOnSubmit}
     enctype="multipart/form-data"
    >
     {inputs.map(input => (
      <div className="contacts__form__input-wrapper">
       <ScrollAnimation animateIn="fadeIn" duration={2}>
        <label className="contacts__form__input-label" for={input.name}>
         {input.label}
        </label>
        <input
         type={input.type}
         className="contacts__form__input"
         name={input.name}
         id={input.name}
        />
       </ScrollAnimation>
      </div>
     ))}
     <ScrollAnimation
      animateIn="fadeIn"
      duration={2}
      className="contacts__form__btn"
     >
      <button
       type="submit"
       className="contacts__form__btn"
       disabled={serverState.submitting}
      >
       ОТПРАВИТЬ
      </button>
     </ScrollAnimation>

     {serverState.status && (
      <p className={!serverState.status.ok ? "errorMsg text_sm" : "text_sm"}>
       {serverState.status.msg}
      </p>
     )}
    </form>
   </div>
  </Container>
 )
}

export default Contacts

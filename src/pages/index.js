import React from "react"
import "../styles/main.scss"
import Head from "../components/head"
import Main from "../components/main"
import Services from "../components/services"
import Materials from "../components/materials"
import ClicheTypes from "../components/clicheTypes"
import Feature from "../components/features"
import Contacts from "../components/contacts"
import Footer from "../components/footer"

const IndexPage = () => (
 <>
  <Head />
  <main className="container">
   <Main />
   <Services />
   <Materials />
   <ClicheTypes />
   <Feature />
   <Contacts />
   <Footer />
  </main>
 </>
)

export default IndexPage

import React from "react"
import { Title, Meta } from "react-head"

import Layout from "../components/Layout"
import HomeHero from "../components/Hero/HomeHero"
import EmailListFormDisplay from "../components/EmailListForm/EmailListFormDisplay"
import About from "../components/About/About"

const Index = () => {
  return (
    <Layout>
      <Title>Welcome to ConcertParty</Title>
      <Meta
        name="description"
        content="Concert Party is a global community connecting music and show lovers to the most amazing
concerts around the world."
      />
      <HomeHero />
      <EmailListFormDisplay />
      <About />
    </Layout>
  )
}

export default Index

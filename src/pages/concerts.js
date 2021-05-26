import React from "react"
import { Title, Meta } from "react-head"

import Layout from "../components/Layout"
import HomeHero from "../components/Hero/HomeHero"
import FeaturedConcerts from "../components/Concerts/FeaturedConcerts"

const Concerts = () => {
  return (
    <Layout>
      <Title>Featured Concerts | ConcertParty</Title>
      <Meta
        name="description"
        content="Explore and experience the greatest music on earth, and share our discoveries with you.."
      />
      <HomeHero />
      <FeaturedConcerts />
    </Layout>
  )
}

export default Concerts

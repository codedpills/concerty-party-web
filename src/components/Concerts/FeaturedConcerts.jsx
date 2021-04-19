import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Concert from "./Concert"

const FeaturedConcerts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFeaturedconcerts(sort: { fields: createdAt }) {
        edges {
          node {
            id
            name
            day
            month
            slug
            description {
              description
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const concerts = data.allContentfulFeaturedconcerts.edges

  const featuredConcerts = concerts.map(concert => {
    const details = {
      name: concert.node.name,
      description: concert.node.description.description,
      month: concert.node.month,
      day: concert.node.day,
      slug: concert.node.slug,
      image: concert.node.image.file.url,
    }
    return (
      <div className="col-md-4" key={concert.node.id}>
        <Concert concertDetails={details} />
      </div>
    )
  })

  return (
    <div className="featured-concerts">
      <div className="container">
        <h4>Featured Concerts</h4>
        <br />
        <div className="row">{featuredConcerts}</div>
      </div>
    </div>
  )
}

export default FeaturedConcerts

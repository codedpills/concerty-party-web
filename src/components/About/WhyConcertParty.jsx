import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import img from "../../images/hero/anthony-delanoix-hzgs56Ze49s-unsplash.jpg"

const WhyConcertParty = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark {
        frontmatter {
          title
        }
      }
    }
  `)

  console.log(data)

  return (
    <div className="why-concert-party">
      <h4>{data.markdownRemark.frontmatter.title}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo
        voluptas officia pariatur molestiae iusto est dolores consequatur
        expedita eveniet porro saepe, consectetur libero nobis assumenda facilis
        magnam dicta natus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo
        voluptas officia pariatur molestiae iusto est dolores consequatur
        expedita eveniet porro saepe, consectetur libero nobis assumenda facilis
        magnam dicta natus!
      </p>
      <img src={img} alt="img" className="img-fluid" />
    </div>
  )
}

export default WhyConcertParty

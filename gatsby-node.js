const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const concertDetailsTemplate = path.resolve(
    `./src/templates/ConcertDetails.jsx`
  )

  // Query data from Contentful
  const result = await graphql(`
    query {
      allContentfulFeaturedconcerts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  if (!result.data.allContentfulFeaturedconcerts) {
    return
  }

  // create pages for each concert
  const concerts = result.data.allContentfulFeaturedconcerts.edges
  concerts.map(({ node }) => {
    node.url = `/concerts/${node.slug}`

    actions.createPage({
      path: node.url,
      component: concertDetailsTemplate,
      context: { slug: node.slug },
    })
  })
}

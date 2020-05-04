const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(
    `src/layouts/CardPreview/CardPreview.js`
  )
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(
    `
      query getSinglePreview {
        allDatoCmsCardspreview {
          nodes {
            cardId
            heading
          }
        }
      }
    `
  )

  // Create blog post pages.
  result.data.allDatoCmsCardspreview.nodes.forEach(card => {
    const slug = slugify(card.heading, {
      lower: true,
    })

    createPage({
      // Path for this page — required
      path: `/${slug}`,
      component: blogPostTemplate,
      context: {
        id: card.cardId,
      },
    })
  })
}

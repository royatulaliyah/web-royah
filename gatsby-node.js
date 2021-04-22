const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "PeopleCsv") {
    const slug = node.name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const peopleTemplate = path.resolve("./src/templates/people.js")

  const res = await graphql(`
    query AllPeople {
      allPeopleCsv {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allPeopleCsv.edges.forEach(person => {
    createPage({
      component: peopleTemplate,
      path: `/${person.node.fields.slug}`,
      context: {
        slug: person.node.fields.slug,
      },
    })
  })
}

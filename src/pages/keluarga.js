import { useStaticQuery, graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Keluarga = () => {
  const data = useStaticQuery(graphql`
    query {
      allPeopleCsv {
        edges {
          node {
            name
            absen
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const nodeList = data.allPeopleCsv.edges

  return (
    <Layout>
      <SEO title="Keluarga Royah" />
      <h1>Keluarga Royah</h1>
      {nodeList.map(({ node }) => {
        return (
          <Link to={`/${node.fields.slug}`}>
            {" "}
            &gt; {node.name} <br />{" "}
          </Link>
        )
      })}
      <Link to="/">
        <p>&lt; kembali</p>
      </Link>
    </Layout>
  )
}

export default Keluarga

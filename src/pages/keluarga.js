import { useStaticQuery, graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

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
      <PageHeader title="Keluarga Royah" />
      {nodeList.map(({ node }) => {
        return (
          <div>
            <Link to={`/${node.fields.slug}`}>&gt; {node.name}</Link>
          </div>
        )
      })}
      <Link to="/">
        <p>&lt; kembali</p>
      </Link>
    </Layout>
  )
}

export default Keluarga

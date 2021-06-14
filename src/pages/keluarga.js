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
      <div className="mx-auto text-center max-w-screen-sm px-10">
        <input
          type="text"
          placeholder="cari berdasarkan nama atau absen"
          className="px-4 py-2 w-full text-center mb-8 shadow rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
        />
      </div>
      <div className="mx-auto">
        <div className="w-11/12 flex flex-wrap justify-center lg:px-5 mx-auto">
          {nodeList.map(({ node }) => {
            return (
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-wrap justify-center my-6 hover:shadow-md rounded-xl p-4">
                <Link to={`/${node.fields.slug}`} className="text-center">
                  <div className="rounded-3xl bg-gray-200 h-32 w-32 mx-auto mb-4"></div>
                  {node.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Keluarga

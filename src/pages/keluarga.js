import { useStaticQuery, graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"
import { FaFilter } from "@react-icons/all-files/fa/FaFilter"

const Keluarga = () => {
  const data = useStaticQuery(graphql`
    query {
      allPeopleCsv {
        edges {
          node {
            name
            nickname
            absen
            fields {
              slug
            }
            gender
            photo {
              childImageSharp {
                fixed(width: 256, height: 256, cropFocus: NORTH, quality: 75) {
                  ...GatsbyImageSharpFixed
                }
              }
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
      <div className="mx-auto text-center max-w-screen-sm px-10 flex">
        <input
          type="text"
          placeholder="cari berdasarkan nama atau absen"
          className="px-4 text-gray-500 py-2 w-full mb-8 shadow rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
        />
        <button className="px-4 text-gray-500 py-2 ml-2 text-center mb-8 shadow rounded-lg focus:outline-none focus:ring-2 focus:border-transparent">
          <FaFilter />
        </button>
      </div>
      <div className="mx-auto">
        <div className="w-11/12 flex flex-wrap justify-center lg:px-5 mx-auto">
          {nodeList.map(({ node }) => {
            return (
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-wrap justify-center my-6 p-2 rounded-xl">
                <Link to={`/${node.fields.slug}`} className="text-center">
                  <div className="card-zoom mx-auto rounded-3xl shadow">
                    <div
                      className="card-zoom-image rounded-3xl mx-auto"
                      style={{
                        backgroundImage: `url(${node.photo.childImageSharp.fixed.src})`,
                      }}
                    ></div>
                  </div>
                  <div className="w-32 mx-auto mt-2">
                    {node.nickname ? node.nickname : node.name}
                  </div>
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

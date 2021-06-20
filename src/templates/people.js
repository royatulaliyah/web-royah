import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaSchool } from "@react-icons/all-files/fa/FaSchool"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft"
import { FaQuoteRight } from "@react-icons/all-files/fa/FaQuoteRight"
import { GiKite } from "@react-icons/all-files/gi/GiKite"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft"
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight"
import PageHeader from "../components/pageheader"

export const query = graphql`
  query($slug: String!) {
    peopleCsv(fields: { slug: { eq: $slug } }) {
      name
      absen
      nickname
      school
      major
      instagram
      interests
      quotes
    }
  }
`

const People = props => {
  const data = props.data.peopleCsv
  const nextLink = props.pageContext.next
  const prevLink = props.pageContext.previous
  return (
    <Layout>
      <SEO title={data.name} description={data.quotes} />
      <div className="flex flex-col h-screen justify-between">
        <PageHeader title={data.name} />
        <div className="flex-grow">
          <table className="mx-auto mt-8 max-w-xs sm:max-w-md">
            <tbody>
              <tr>
                <td>
                  <FaSchool />
                </td>
                <td className="px-3 py-1">
                  {data.school ? `${data.school} - ${data.major}` : "-"}
                </td>
              </tr>
              <tr>
                <td>
                  <FaInstagram />
                </td>
                <td className="px-3 py-1">
                  {" "}
                  {data.instagram ? data.instagram : "-"}
                </td>
              </tr>
              <tr>
                <td>
                  <GiKite />
                </td>
                <td className="px-3 py-1">
                  {" "}
                  {data.interests ? data.interests : "-"}{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-8 max-w-xs sm:max-w-md mx-auto">
            <div className="flex justify-center">
              <FaQuoteLeft />
            </div>
            <div className="align-middle py-4">{data.quotes}</div>
            <div className="flex justify-center">
              <FaQuoteRight />
            </div>
          </div>
        </div>
        <div className="flex justify-center sticky bottom-8">
          <div className="text-center text-md gap-2 items-center shadow rounded-full px-4 h-12 flex justify-center">
            <Link to={prevLink ? `/${prevLink.fields.slug}` : null}>
              <FaChevronLeft />
            </Link>
            <Link
              to="/keluarga"
              className="text-4xl rounded-full bg-white h-16 w-16 -my-2 shadow-md flex items-center justify-center"
            >
              <FaTimes />
            </Link>
            <Link to={nextLink ? `/${nextLink.fields.slug}` : null}>
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default People

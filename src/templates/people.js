import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaSchool } from "@react-icons/all-files/fa/FaSchool"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft"
import { FaQuoteRight } from "@react-icons/all-files/fa/FaQuoteRight"
import { GiKite } from "@react-icons/all-files/gi/GiKite"

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
  return (
    <Layout>
      <SEO title={data.name} description={data.quotes} />
      <p className="text-center text-2xl m-4 mt-10">
        {data.name} ({data.absen})
      </p>
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
      <p className="text-center mt-10">
        <Link to="/keluarga">&lt; kembali</Link>
      </p>
    </Layout>
  )
}

export default People

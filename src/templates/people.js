import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaSchool } from "@react-icons/all-files/fa/FaSchool"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
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
    }
  }
`

const People = props => {
  const data = props.data.peopleCsv
  return (
    <Layout>
      <SEO title={data.name} />
      <p>
        {data.name} ({data.absen}) <br />
        <table>
          <tbody>
            <tr>
              <td>
                <FaSchool />
              </td>
              <td>{data.school ? `${data.school} - ${data.major}` : "-"}</td>
            </tr>
            <tr>
              <td>
                <FaInstagram />
              </td>
              <td> {data.instagram ? data.instagram : "-"}</td>
            </tr>
            <tr>
              <td>
                <GiKite />
              </td>
              <td> {data.interests ? data.interests : "-"} </td>
            </tr>
          </tbody>
        </table>
      </p>
      <p>
        <Link to="/keluarga">&lt; kembali</Link>
      </p>
    </Layout>
  )
}

export default People

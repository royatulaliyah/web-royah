import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    peopleCsv(fields: { slug: { eq: $slug } }) {
      name
      absen
    }
  }
`

const People = props => {
  return (
    <Layout>
      <SEO title={props.data.peopleCsv.name} />
      <p>
        {props.data.peopleCsv.name} ({props.data.peopleCsv.absen})
      </p>
      <p>
        <Link to="/keluarga">&lt; kembali</Link>
      </p>
    </Layout>
  )
}

export default People

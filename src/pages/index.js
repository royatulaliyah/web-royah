import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import illustration from "../images/teamwork.png"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <SEO title="Coming Soon" />
    <div className="flex min-h-screen z-10">
      <div className="m-auto">
        <StaticImage
          src="../images/teamwork.png"
          className="mx-auto"
          draggable="false"
          alt="under construction"
          layout="fixed"
          height="200"
        />

        <h1 className="text-4xl mt-4 mb-10 text-center">coming soon!</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage

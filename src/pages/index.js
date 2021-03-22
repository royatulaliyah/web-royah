import * as React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../assets/logo_2.svg"
import illustration from "../images/teamwork.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Coming Soon" />
    <div className="flex min-h-screen z-10">
      <div className="m-auto">
        <Logo className="mx-auto my-8 h-16" />
        <img
          draggable="false"
          src={illustration}
          alt="teamwork"
          className="mx-auto max-h-72"
        />
        <h1 className="text-4xl mt-4 mb-10 text-center">coming soon!</h1>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage

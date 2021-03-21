import * as React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Under Construction" />
    <div className="flex h-screen">
      <div className="m-auto">
        <img src={logo} alt="logo royah" className="h-40 mx-auto" />
        <h1 className="text-2xl mt-4 text-center">coming soon</h1>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage

import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="mx-auto text-center flex h-screen">
      <div className="m-auto pb-20">
        <h1 className="font-bold text-8xl">404</h1>
        <h1 className="text-3xl mb-20 font-semibold">Oops! Ga ketemu :(</h1>
        <Link to="/" className="shadow p-3 m-2 bg-royah-yellow rounded-xl">
          halaman awal
        </Link>
        <Link
          to="/random"
          className="shadow p-3 m-2 bg-royah-jellyfish rounded-xl"
        >
          random profile
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

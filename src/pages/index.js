import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "bulma/css/bulma.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">Welcome to React scroll</h1>
      <p className="is-size-5" style={{ marginTop: "2%" }}>
        This is React.js Unsplash Infinite scroll Demo
      </p>
      <button className="button is-dark is-large" style={{ marginTop: "10%" }}>
        <Link to="/gallery/" className="has-text-white">
          Load Images
        </Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage

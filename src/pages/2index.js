import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import { Container } from "../components/layoutComponents"
import { SEO } from "../components"

const IndexPage = () => (
 
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>

)

export default IndexPage

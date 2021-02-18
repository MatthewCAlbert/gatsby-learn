import { Link } from "gatsby"
import React from "react"
import { InstaButton } from "../components/button"
import Layout from "../components/Layout"

export default function Home() {
  return <Layout>
    <h1>Hello World</h1>
    <InstaButton>Click Me</InstaButton>
  </Layout>
}

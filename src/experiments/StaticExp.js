import React from "react"
import { StaticQuery, graphql } from "gatsby"

const StaticExp = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
            data
            person {
              age
              name
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default StaticExp

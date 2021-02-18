import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link, useStaticQuery } from 'gatsby';
import Head from '../components/head';

const contentfulPostQuery = graphql`
{
  allContentfulPost {
    nodes {
      id
      slug
      title
      createdAt
      image {
        fluid {
          src
        }
      }
    }
  }
}
`

function Blog() {
    const {allContentfulPost:{nodes}} = useStaticQuery(contentfulPostQuery);

    return (
        <Layout>
            <Head title="Blog"/>
            {
                nodes.map((item,id)=>
                    <div key={id}>
                        <Link to={`/blog/post/${item.slug}`}>{item.title}</Link>
                    </div>
                )
            }
        </Layout>
    )
}

export default Blog

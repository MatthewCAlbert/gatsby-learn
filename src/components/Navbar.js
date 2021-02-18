import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

const getData = graphql`
    query QueryNameMustBeUnique{
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
`

export default function Navbar() {
    const {
        site:{
            siteMetadata
        }
    } = useStaticQuery(getData)

    const {title} = siteMetadata;

    return (
        <div className="navbar">
            <div>
                <p className="site-title">{title}</p>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/images">Images</Link></li>
                <li><Link to="/experiment">Experiment</Link></li>
            </ul>
        </div>
    )
}

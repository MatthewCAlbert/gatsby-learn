import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

const metadataQuery = graphql`
    {
        site{
            siteMetadata{
                title
            }
        }
    }
`

const Head =({title})=>{
    const {site: {siteMetadata}} = useStaticQuery(metadataQuery);

    const siteTitle = siteMetadata.title;

    return (
        <Helmet title={title ? `${title} | ${siteTitle}` : siteTitle} />
    )
}

export default Head

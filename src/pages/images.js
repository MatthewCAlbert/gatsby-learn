import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import basicImage from '../images/img-soso.jpg'
import Image from "gatsby-image"

const filterSampleQuery = graphql`
{
  allFile(
    filter:{
      sourceInstanceName:{eq:"images"},
      relativePath:{eq:"img-soso.jpg"}
    }
  ) {
    nodes {
      relativePath
      relativeDirectory
      publicURL
      sourceInstanceName
    }
  }
}
`

const gquery = graphql`
query MyQuery {
  fixed:file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "img-soso.jpg"}) {
    childImageSharp {
      fixed (width:400, height:300){
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid:file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "img-soso.jpg"}) {
    childImageSharp {
      fluid(maxWidth:800) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`

const Images=()=>{
    const data = useStaticQuery(gquery);

    return (
        <Layout>
            <div className="d-flex">
                <div className="img-contain">
                    <img src={basicImage} alt="basic image"/>
                    <p>Incididunt non tempor ea veniam cillum sint ipsum aliqua cupidatat anim cupidatat Lorem. Ullamco do id duis aliqua proident mollit ad occaecat ipsum eu aliquip in in. Nostrud amet culpa laborum adipisicing laborum. Est Lorem ad officia occaecat.</p>
                </div>
                <div className="img-contain">
                    <Image fixed={data.fixed.childImageSharp.fixed} alt="hi this is dva"/>
                    <p>Incididunt non tempor ea veniam cillum sint ipsum aliqua cupidatat anim cupidatat Lorem. Ullamco do id duis aliqua proident mollit ad occaecat ipsum eu aliquip in in. Nostrud amet culpa laborum adipisicing laborum. Est Lorem ad officia occaecat.</p>
                </div>
                <div className="">
                    <Image fluid={data.fluid.childImageSharp.fluid}/>
                    <p>Incididunt non tempor ea veniam cillum sint ipsum aliqua cupidatat anim cupidatat Lorem. Ullamco do id duis aliqua proident mollit ad occaecat ipsum eu aliquip in in. Nostrud amet culpa laborum adipisicing laborum. Est Lorem ad officia occaecat.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Images

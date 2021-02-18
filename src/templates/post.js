import React from 'react'
import Image from "gatsby-image"
import styles from './blog.module.scss';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const query = graphql`
query SinglePostQuery($slug: String) {
  contentfulPost(slug: {eq: $slug}) {
    slug
    title
    createdAt
    image {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    content {
      raw
    }
  }
}

`

const Post = ({data})=>{
  const postData = data.contentfulPost;

  const richTextContent = JSON.parse(postData.content.raw);

  return (
    <Layout>
      <article className={styles.blog_post_item}>
            <div className={styles.blog_post_header}>
                <h1>{postData.title}</h1>
                <span>{new Date(postData.createdAt).toLocaleDateString()}</span>
                <Image fluid={postData.image.fluid} alt={postData.slug}/>
            </div>
            <div 
              className={styles.blog_post_content}
              dangerouslySetInnerHTML={{__html:documentToHtmlString(richTextContent)}}
            >
            </div>
        </article>
    </Layout>
  )
}
        

export default Post

// create dynamic pages
const path = require(`path`);

exports.createPages = async ({graphql, actions})=>{
    const {createPage} = actions
    const blogPostTemplate = path.resolve(`src/templates/post.js`);
    const res = await graphql(
        `
        {
            posts: allContentfulPost {
                nodes {
                id
                slug
                }
            }
        }
        `
    )
    res.data.posts.nodes.forEach((post)=>{
        createPage({
            path: `/blog/post/${post.slug}`,
            component: blogPostTemplate,
            context: {
                slug: post.slug
            }
        });
    })
}
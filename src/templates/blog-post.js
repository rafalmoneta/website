import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import LayoutBlog from "../components/layout-blog"
import Bio from "../components/bio"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <LayoutBlog location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          style={{margin: '1rem'}}
        >
          <h1
            style={{
              marginBottom: '0'
            }}
          >{post.frontmatter.title}</h1>
          <p
            style={{
              // ...scale(-1 / 5),
              display: `block`,
              margin: '0 0 2rem',
              fontSize: '1rem'
            }}
          >
            {post.frontmatter.date}
            { !post.frontmatter.time || 
              <span>&nbsp; • &nbsp;<span  role="img" aria-label="drink">🥤</span> {post.frontmatter.time} min read</span>
            }
          </p>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr
            style={{
              margin: '3rem 0' ,
            }}
          />
          <Bio />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </article>
      </LayoutBlog>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        time
      }
    }
  }
`

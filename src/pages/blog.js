import React from "react"
import { Link, graphql } from "gatsby"

import LayoutBlog from "../components/layout-blog"
import SEO from "../components/seo"

import styled from 'styled-components'
import Bio from "../components/bio"

const Post = styled(Link)`
  display: block;
  margin: 0 1rem 2rem;
  position: relative;
  box-shadow: rgba(146, 142, 125, 0.2) 0px 10px 20px;
  will-change: transform;
  color: #000000;
  padding: 2.5rem;
  background: rgb(253, 253, 253);
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(246, 246, 249);
  border-image: initial;
  transition: box-shadow 0.2s ease 0s;
  text-decoration: none;
  &:hover {
    box-shadow: rgba(103, 110, 144, 0.05) 0px 4px 4px, rgba(103, 110, 144, 0.05) 0px 2px 2px;
    box-shadow: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`


class Blog extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <LayoutBlog location={this.props.location} >
        <SEO title="Blog" />
        <Bio />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Post
                to={`blog${node.fields.slug}`}
              >
                <div key={node.fields.slug}>
                  <h3
                  style={{
                    marginBottom: '0px',
                    marginTop: '0px'
                  }}
                  >
                    {title}
                  </h3>
                  <small>
                    <span>{node.frontmatter.date}</span>
                    <span></span>
                    { !node.frontmatter.time || 
                      <span>&nbsp; • &nbsp;<span  role="img" aria-label="drink">🥤</span> {node.frontmatter.time} min read</span>
                    }
                  </small>
                  <p
                    style={{
                      marginBottom: 0,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              </Post>

            )
          })}
        </div>
      </LayoutBlog>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            time
          }
        }
      }
    }
  }
`

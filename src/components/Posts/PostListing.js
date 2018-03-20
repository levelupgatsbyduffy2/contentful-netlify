import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ post }) => (
  <article>
    <h3>
      <Link to={post.fields.slug}>
        {post.frontmatter.title}
        {post.frontmatter.image ? (
          <img src={post.frontmatter.image} alt="Level Up Logo" />
        ) : (
          <p>No Image</p>
        )}
      </Link>
    </h3>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
  </article>
)

export default PostListing

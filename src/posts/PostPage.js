import React from 'react'

const PostPage = props => {
  const { data } = props
  if (!data) return null
  return (
    <div>
      <span>{data.contentfulBlogPost.date}</span>
      <h1>{data.contentfulBlogPost.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default PostPage

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
      id
    }
  }
`

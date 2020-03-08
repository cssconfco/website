import Container from '../../components/atoms/Container'
import BlogHeader from '../../components/organisms/BlogHeader'
import PostCard from '../../components/organisms/PostCard'

import blogPosts from '../../blog/blogPosts'

function BlogPage() {
  return (
    <section>
      <Container>
        <BlogHeader />
        <div className="blog-posts__container">
          {blogPosts.map(post => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </Container>
      <style jsx>
        {`
          .blog-posts__container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
        `}
      </style>
    </section>
  )
}

export default BlogPage

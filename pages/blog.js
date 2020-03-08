import Container from '../components/atoms/Container'
import BlogHeader from '../components/organisms/BlogHeader'

function BlogPage() {
  return (
    <section>
      <Container>
        <BlogHeader />
        <div>Blog entries preview</div>
      </Container>
    </section>
  )
}

export default BlogPage

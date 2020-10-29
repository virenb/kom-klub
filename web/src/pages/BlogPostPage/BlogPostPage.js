import HomeLayout from 'src/layouts/HomeLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <HomeLayout>
      <BlogPostCell id={id} />
    </HomeLayout>
  )
}

export default BlogPostPage

import { Link, routes } from '@redwoodjs/router'
import BlogLayout from '../../layouts/BlogLayout/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage

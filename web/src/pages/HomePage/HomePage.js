import { Link, routes } from '@redwoodjs/router'
import HomeLayout from 'src/layouts/HomeLayout/HomeLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <BlogPostsCell />
      </HomeLayout>
    </>
  )
}

export default HomePage

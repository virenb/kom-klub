import { Link, routes } from '@redwoodjs/router'
import HomeLayout from 'src/layouts/HomeLayout/HomeLayout'
import PostsCell from 'src/components/PostsCell'

const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <PostsCell />
      </HomeLayout>
    </>
  )
}

export default HomePage

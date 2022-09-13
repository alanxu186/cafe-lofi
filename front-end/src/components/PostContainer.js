import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostTile from './PostTile'
import CreatePost from './CreatePost'

const PostContainer = () => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get('http://localhost:3001/posts')
        console.log(res.data)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    if (posts.length === 0) getPosts()

  }, [])

  const mappedPosts = posts.map((post) => <PostTile key={post.id} post={post} />)


  return (
    <div className='w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2'>
      <CreatePost/>
      {mappedPosts}
    </div>
  )
}

export default PostContainer
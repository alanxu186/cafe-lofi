import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostTile from './PostTile'
import CreatePost from './CreatePost'
import { useSelector } from 'react-redux'

const PostContainer = ({ setImageUrl, imageUrl }) => {

  const user = useSelector(state => state.user)
  console.log(user)

  const [userPosts, setUserPosts] = useState([])


  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/posts/`)
        setUserPosts(res.data.filter((item) => {
          if (item.id !== user.profile.id) {
            return user
          }
        }))
      } catch (err) {
        console.log(err)
      }
    }
    if (userPosts.length === 0) getPosts()

  }, [])

  useEffect(() => {
    fetch(`http://localhost:3001/users/${user.profile.id}`).then(res => res.json()).then(data => setImageUrl(data.avatar_url))
  }, [])



  return (
    <div className='w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2'>
      <CreatePost userPosts={userPosts} setUserPosts={setUserPosts} imageUrl={imageUrl} setImageUrl={setImageUrl} />
      {userPosts.map((post) => <PostTile key={post.id} post={post} myPosts={userPosts} setMyPosts={setUserPosts} imageUrl={imageUrl} />)}
    </div>
  )
}

export default PostContainer
import React, { useEffect, useState } from 'react'
import PostTile from './PostTile'
import lofipfp2 from '../assets/lofipfp2.png'
import axios from 'axios'
import { useSelector } from 'react-redux'
import PostInput from './CreatePost'
// import { useParams } from 'react-router-dom'

const PostContainer = () => {

  const { currentUser } = useSelector(state => state.user)
  //state for post
  // const [posts, setPosts] = useState([])
  //state for the text in posts (onchange)
  // const [text, setText] = useState('')

  //get all posts of current user
  // const getPosts = async () => {
  //   const res = await axios.get('http://localhost:4000/api/users/find/' + currentUser._id)
  //   // console.log(res.data.posts)
  //   setPosts(res.data.posts)
  // }

  //render all posts of current user 
  // useEffect(() => {
  //   try {
  //     getPosts()
  //   } catch (err) {
  //     console.log('could not get any posts of current user!')
  //   }
  // }, [])


  //function to upload a post 
  // const uploadPost = async () => {
  //   try {
  //     await axios.post('http://localhost:4000/api/posts', {
  //       user: currentUser,
  //       content: text
  //     }, { withCredentials: true })
  //     // alert('post has been made!')

  //   } catch (err) {
  //     console.log(err)
  //   }
  //   getPosts()
  // }

  //function to update a post 
  // const updatePost = async (id) => {
  //   console.log(id)
  //   try {
  //     await axios.put('http://localhost:4000/api/posts/' + id, {
  //       // user: currentUser, 
  //       content: posts
  //     }, { withCredentials: true })
  //   } catch (err) {
  //     console.log(err)
  //     alert('could not update post!')
  //   }
  // }



  //map each individual post in post tile component
  // const mappedPosts = posts.map(singlePost => <PostTile key={singlePost._id} singlePost={singlePost} posts={posts} setPosts={setPosts} getposts={getPosts} />)



  return (
    <div>
      {/* <PostInput setText={setText} uploadPost={uploadPost} /> */}

      {/* {mappedPosts} */}
    </div>
  )
}

export default PostContainer
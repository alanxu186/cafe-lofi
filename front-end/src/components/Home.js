import React, { useEffect, useState } from 'react'
import PostContainer from './PostContainer'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

const Home = ({content, uploadPost, setContent}) => {

  return (
    <div className='flex justify-center h-screen'>
      <LeftContainer/>
      <PostContainer content={content} uploadPost={uploadPost} setContent={setContent}/>
      <RightContainer/>  
    </div>
  )
}

export default Home

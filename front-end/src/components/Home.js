import React, { useEffect, useState } from 'react'
import PostContainer from './PostContainer'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import Register from './Register'

const Home = ({ imageUrl, setImageUrl }) => {

  return (
    <div className='flex justify-center h-screen mt-32'>
      <LeftContainer />
      <PostContainer imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <RightContainer />




    </div>
  )
}

export default Home

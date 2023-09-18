import React from 'react'
import Categories from '../categories/categories'
import CreatePost from '../createPost/createPost'
import Posts from '../posts/posts'

const NewsFeed = () => {
  return (
    <div className='  w-4/6 p-3 h-full'>
      {/* header */}
      <h1 className='textHome text-2xl font-bold  '>Home</h1>

      {/* contents or newsfeed */}

      <div className='newsfeedContent w-full     mt-5 flex flex-col   gap-3 overflow-y-scroll  '>
        <Categories />
        <CreatePost />
        <Posts />

      </div>

    </div>
  )
}

export default NewsFeed
import React from 'react'
import NewsFeed from './newsFeed/newsFeed'
import RightSide from './rightSide/rightSide'

const Home = () => {
  return (
    <div className='home w-4/5 flex flex-row justify-between h-full'>
    <NewsFeed />
    <RightSide />
    </div>
  )
}

export default Home
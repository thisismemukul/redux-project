import React from 'react'
import MovieDetail from '../MovieDetail/MovieDetail'

const Home = () => {
  return (
    <>
      <div className='banner-img'>
        <div className='banner-text'>
          <h1>Welcome to Movie App</h1>
          <p>This is a movie app that will help you find the best movies to watch</p>
        </div>
      </div>
      <MovieDetail />
    </>
  )
}

export default Home
import React, { useEffect } from 'react';
import movieApi from '../../constants/Apis/movieApi';
import MovieDetail from '../MovieDetail/MovieDetail';
import { API_KEY } from '../../constants/Apis/MovieApiKey';
const Home = () => {
  useEffect(() => {
    const movieText = "batman";
    const fetchMovies = async () => {
      try {
        const response = await movieApi.get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`);
      } catch (error) {
        console.log(error);
      }
    }
  }, [])

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
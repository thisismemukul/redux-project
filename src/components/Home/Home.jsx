import React, { useEffect } from 'react';
import movieApi from '../../constants/Apis/movieApi';
import { API_KEY } from '../../constants/Apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovieSuccess } from '../../redux/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "batman";
    const fetchMovies = async () => {
      try {
        const response = await movieApi.get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`);
        dispatch(addMovieSuccess(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [dispatch])

  return (
    <>
      <div className='banner-img'>
        <div className='banner-text'>
          <h1>Welcome to Movie App</h1>
          <p>This is a movie app that will help you find the best movies to watch</p>
        </div>
      </div>
      <MovieListing />
    </>
  )
}

export default Home
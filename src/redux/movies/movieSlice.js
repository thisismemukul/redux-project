import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    movies: {},
    loading: false,
    error: null,
    message: '',
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovieStart: (state) => {
            state.loading = true;
        },
        addMovieSuccess: (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        },
        addMovieFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const { addMovieStart, addMovieSuccess, addMovieFailure } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;
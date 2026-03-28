import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    TrailerVideo:null,
    popularMovie:null,
    topRatedMovie:null,
    upcomingMovie:null
  },

  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovie=action.payload
    },

    addTrailerVideo(state,action){
      state.TrailerVideo=action.payload
    },
    addPopularMovies(state,action){
      state.popularMovie=action.payload
    },
    addTopRatedMovie(state,action){
      state.topRatedMovie=action.payload
    },
    addUpcomingMovies(state,action){
      state.upcomingMovie=action.payload
    }
  },
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovie} = movieSlice.actions;
export default movieSlice.reducer

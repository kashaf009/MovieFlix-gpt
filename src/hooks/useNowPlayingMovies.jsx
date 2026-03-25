import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MovieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
     const url = "https://api.themoviedb.org/3/movie/now_playing";
    const getNowPlayingMovie = async () => {
    const data = await fetch(url, API_OPTION);
    const JSON= await data.json()
    console.log(JSON);
    dispatch(addNowPlayingMovies(JSON.results))
    
  };

  useEffect(() => {
    getNowPlayingMovie()
  }, [])
  return <div></div>;
};

export default useNowPlayingMovies;

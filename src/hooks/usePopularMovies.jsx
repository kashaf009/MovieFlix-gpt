import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/MovieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/popular";
  const getPopularMovies = async () => {
    const data = await fetch(url, API_OPTION);
    const Json_data = await data.json();
    console.log(Json_data);
    
    dispatch(addPopularMovies(Json_data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return <div></div>;
};

export default usePopularMovies;

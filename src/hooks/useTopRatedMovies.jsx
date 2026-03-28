import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/MovieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/top_rated";
  const getTopRatedMovies = async () => {
    const data = await fetch(url, API_OPTION);
    const json_data = await data.json();
    dispatch(addTopRatedMovie(json_data.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return <div></div>;
};

export default useTopRatedMovies;

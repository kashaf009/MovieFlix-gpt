import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/MovieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/upcoming";
  const getUpcomingMovies = async () => {
    const data = await fetch(url, API_OPTION);
    const json_data = await data.json();
    dispatch(addUpcomingMovies(json_data.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  return <div></div>;
};

export default useUpcomingMovies;

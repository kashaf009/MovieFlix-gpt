import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/MovieSlice';

const useTrailerVideo = (id) => {
    const dispatch=useDispatch()
    const movieID = id;
  const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`;
  const getMovieVideo = async () => {
    const viddata = await fetch(url, API_OPTION);

    const dataJSON = await viddata.json();
    const trailer = dataJSON?.results?.filter(
      (item) => item.type === "Trailer",
    );
    console.log(trailer);

    dispatch(addTrailerVideo(trailer[0]?.key))
    
  };

  useEffect(() => {
    getMovieVideo();
  }, []);


  return (
    <div></div>
  )
}

export default useTrailerVideo
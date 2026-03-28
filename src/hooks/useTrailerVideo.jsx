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
    console.log(dataJSON.results);
    const trailer = dataJSON?.results?.find(
  (item) =>
    item.type === "Trailer" &&
    item.site === "YouTube"
);

const key = trailer ? trailer.key : dataJSON?.results?.[0]?.key;

dispatch(addTrailerVideo(key));
console.log(trailer);

  };

  useEffect(() => {
    getMovieVideo();
  }, []);


  return (
    <div></div>
  )
}

export default useTrailerVideo
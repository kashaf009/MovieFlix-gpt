import React from "react";
import { API_OPTION } from "../utils/constant";

const VideoBackground = ({ id }) => {
  const movieID = id;
  const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`;
  const getMovieVideo = async () => {
    const viddata = await fetch(url, API_OPTION);

    const dataJSON = await viddata.json();
  };

  return <div>Video</div>;
};

export default VideoBackground;

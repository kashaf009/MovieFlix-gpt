import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((Store) => Store.movies?.nowPlayingMovie);

  if (!movies) return;

  const mainMovies = movies[0];

  console.log(mainMovies);

  const { title, overview, id } = mainMovies;

  return (
    <div className="h-screen">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id}/>
    </div>
  );
};

export default MainContainer;

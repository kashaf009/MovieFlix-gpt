import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const trailerKey = useSelector((store)=> store?.movies?.TrailerVideo);
  useTrailerVideo(id);

  return (
    <div className="w-screen h-screen  overflow-hidden">
      <iframe
      className="w-full -translate-y-27 aspect-video "
        
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${trailerKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
        
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

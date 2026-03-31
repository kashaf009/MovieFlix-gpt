import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="overflow-hidden ">
      <h3 className="mb-4 mt-3 text-xl font-semibold text-white">{title}</h3> 
      <section className="overflow-x-scroll">
        <div className="flex gap-2 w-450 md:w-600">
          {movies.map((movie) => (
            <MovieCard  key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieList;

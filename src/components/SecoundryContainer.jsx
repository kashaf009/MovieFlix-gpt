import React from 'react'
import MovieCard from './MovieCard'
import { map } from 'firebase/firestore/lite/pipelines'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const SecoundryContainer = () => {
    const movies = useSelector((store) => store.movies);

    if (!movies) return null;

  return (
    <div className='pl-20 bg-black' >
      <section className='-mt-50 z-30 relative'>

      <MovieList title={"now playing"} movies={movies.nowPlayingMovie}/>
      <MovieList title={"trending"} movies={movies.nowPlayingMovie}/>
      <MovieList title={"popular"} movies={movies.nowPlayingMovie}/>
      <MovieList title={"upcoming"} movies={movies.nowPlayingMovie}/>
      

      </section>


     
  
      
    </div>
  )
}

export default SecoundryContainer
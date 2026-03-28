import React from 'react'
import MovieCard from './MovieCard'
import { map } from 'firebase/firestore/lite/pipelines'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const SecoundryContainer = () => {
    const movies = useSelector((store) => store?.movies);

    

  return (
    <div className='pl-20 bg-black' >
      <section className='-mt-50 z-30 relative'>

      <MovieList title={"Now playing"} movies={movies?.nowPlayingMovie}/>
      <MovieList title={"Popular"} movies={movies?.popularMovie}/>
      {/* <MovieList title={"Popular"} movies={movies?.nowPlayingMovie}/> */}
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovie}/>
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovie}/>
      

      </section>


     
  
      
    </div>
  )
}

export default SecoundryContainer
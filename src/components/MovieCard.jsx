import React from 'react'
import { useSelector } from 'react-redux'


const MovieCard = ({movie}) => {
    if (!movie?.poster_path) return null;
    
  return (

    <div className="">

        <img className='w-screen' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="img" />
        {/* <p className='text-[14px]'>{movie.title}</p> */}
    </div>
  )
}

export default MovieCard
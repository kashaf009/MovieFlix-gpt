import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const MovieCard = ({movie}) => {
  const navigate = useNavigate();
    if (!movie?.poster_path) return null;
    const handleMovieInfo = () => {
      navigate(`/movie/${movie.id}`);
    }
    
  return (

    <div onClick={handleMovieInfo} className="">

        <img className='w-screen' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="img" />
        {/* <p className='text-[14px]'>{movie.title}</p> */}
    </div>
  )
}

export default MovieCard
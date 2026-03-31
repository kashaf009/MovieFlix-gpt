import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_OPTION } from '../utils/constant';

const MovieInfo = () => {
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState();

    const getMovieInfo = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        const data = await fetch(url, API_OPTION);
        const JSON = await data.json();
        // console.log(JSON);
        setMovieInfo(JSON);
    }

    console.log(movieInfo?.status);
    
    // const {title, overview, release_date} = movieInfo;
    // console.log(title);
    
    
    useEffect(() => {
        getMovieInfo();
    }, [])


    
    
  return (
    <div>
        <h1 className='text-3xl pt-3 pl-5 font-bold text-black'>{movieInfo?.title} </h1>

    </div>
  )
}

export default MovieInfo
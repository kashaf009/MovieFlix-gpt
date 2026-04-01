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
        console.log(JSON);
        setMovieInfo(JSON);
    }

    console.log(movieInfo?.status);
    
    // const {title, overview, release_date} = movieInfo;
    // console.log(title);
    
    
    useEffect(() => {
        getMovieInfo();
    }, [])


    
    
  return (
    <div className='bg-black h-screen grid grid-cols-[40%_60%] fixed'>
        <section className=''>


        <img className='p-8 w-full h-[98%] mt-2 object-cover' src={`https://image.tmdb.org/t/p/original/${movieInfo?.poster_path}`} alt="" />



        </section >

        <section className='pl-8'>
        <h1 className='text-4xl mt-25 font-bold text-white'>{movieInfo?.title}</h1>

            <p className='text-white text-2xl leading-normal pr-15 mt-10'>{movieInfo?.overview}</p>

            <p className='text-white text-xl mt-8'>Duration : {movieInfo?.runtime} minutes</p>
            <p className='text-white text-xl pt-7'>Release Date :{movieInfo?.release_date}</p>

        </section>

    </div>
  )
}

export default MovieInfo
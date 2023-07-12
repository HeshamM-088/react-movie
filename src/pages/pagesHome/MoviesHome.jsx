import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { GetMovies } from '../../ReduxSystem/GetMovieSlice';
import {useNavigate} from "react-router-dom"
import { Credits, DetailsMovies } from '../../ReduxSystem/DetailsMoviesSlice';

const MoviesHome = () => {

    const dispatch = useDispatch()
    const { dataMovies } = useSelector(state => state.movieData)

    useEffect(() => {
        dispatch(GetMovies())
    }, [])



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const navigate = useNavigate()

    const handleDetails = (movie)=>{
        dispatch(DetailsMovies(movie.id))
        dispatch(Credits(movie.id))
        navigate(`/detailsMoviesPage/${movie.id} - ${movie.title}`)
    }



    return (
        <div className='container'>

            <h2 className='mt-5 mb-5'>MOVIES</h2>
            <Slider {...settings} className='m-4'>
                {dataMovies.map((movie, index) => (
                    <div key={index} className='d-flex flex-column justify-content-center align-items-center'>
                        <img className='cursor-pointer' onClick={()=> handleDetails(movie)} style={{ width: "18rem" }} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}



export default MoviesHome
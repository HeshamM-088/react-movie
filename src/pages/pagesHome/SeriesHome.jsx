import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { GetSeries } from '../../ReduxSystem/GetMovieSlice';
import { useNavigate } from "react-router-dom"
import { CreditsSeries, DetailsSeries } from '../../ReduxSystem/DetailsSeriesSlice';

const SeriesHome = () => {

    const dispatch = useDispatch()
    const { dataSeries } = useSelector(state => state.movieData)

    useEffect(() => {
        dispatch(GetSeries())
    }, [])



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const navigate = useNavigate()

    const handleDetails = (series) => {
        dispatch(DetailsSeries(series.id))
        dispatch(CreditsSeries(series.id))
        navigate(`/detailsSeriesPage/${series.id} - ${series.name}`)
    }

    return (

        <div className='container'>

            <h2 className='mt-5 mb-5'>SERIES</h2>
            <Slider {...settings} className='m-4'>
                {dataSeries.map((series, index) => (
                    <div key={index} className='d-flex flex-column justify-content-center align-items-center'>
                        <img className='cursor-pointer' onClick={() => handleDetails(series)} style={{ width: "18rem" }} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${series.poster_path}`} />
                    </div>
                ))}
            </Slider>
        </div>

    )
}

export default SeriesHome
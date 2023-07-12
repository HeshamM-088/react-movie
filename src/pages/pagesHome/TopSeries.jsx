import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { GetSeries } from '../../ReduxSystem/GetMovieSlice';
import StarRatings from 'react-star-ratings';
import { useNavigate } from "react-router-dom"
import { CreditsSeries, DetailsSeries } from '../../ReduxSystem/DetailsSeriesSlice';


const TopSeries = () => {

    const dispatch = useDispatch()
    const { topSeries } = useSelector(state => state.movieData)


    useEffect(() => {
        dispatch(GetSeries())
    }, [])

    const navigate = useNavigate()

    const handleDetails = (seriesTop) => {
        dispatch(DetailsSeries(seriesTop.id))
        dispatch(CreditsSeries(seriesTop.id))
        navigate(`/detailsSeriesPage/${seriesTop.id} - ${seriesTop.name}`)
    }


    return (
        <div>
            <div className='container'>

                <h2 className='mt-5 mb-5'>TOP SERIES</h2>

                <div className='d-flex justify-content-center align-items-center flex-wrap'>
                    {topSeries.map((seriesTop, index) => (
                        <Card variant="dark" key={index} style={{ width: '18rem' }} className='me-4 bg-dark'>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${seriesTop.poster_path}`} />
                            <Card.Body>
                                <Card.Title className='text-light'>TAITLE : {seriesTop.name}</Card.Title>
                                <div className='text-light'>
                                    <div className='d-flex justify-content-between align-items-start'>
                                        <div className='pt-1'>
                                            RATE : <span className='text-info'>{seriesTop.vote_average}</span>
                                        </div>
                                        <div >
                                            <StarRatings
                                                rating={seriesTop.vote_average / 2}
                                                starRatedColor="gold"
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="20px"
                                                starSpacing="3px"
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className='text-center'>
                                    <Button variant="outline-info" onClick={() => handleDetails(seriesTop)}>DETAILS</Button>

                                </div>
                            </Card.Body>
                        </Card>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default TopSeries
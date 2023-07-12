import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { GetMovies } from '../../ReduxSystem/GetMovieSlice';
import StarRatings from 'react-star-ratings';
import { useNavigate } from "react-router-dom"
import { Credits, DetailsMovies } from '../../ReduxSystem/DetailsMoviesSlice';


const TopMovies = () => {

    const dispatch = useDispatch()
    const { topMovies } = useSelector(state => state.movieData)


    useEffect(() => {
        dispatch(GetMovies())
    }, [])

    const navigate = useNavigate()

    const handleDetails = (movieTop) => {
        dispatch(DetailsMovies(movieTop.id))
        dispatch(Credits(movieTop.id))
        navigate(`/detailsMoviesPage/${movieTop.id} - ${movieTop.title}`)
    }


    return (
        <div>
            <div className='container'>

                <h2 className='mt-5 mb-5'>TOP MOVIES</h2>

                <div className='d-flex justify-content-center align-items-center flex-wrap'>
                    {topMovies.map((movieTop, index) => (
                        <Card variant="dark" key={index} style={{ width: '18rem' }} className='me-4 bg-dark'>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieTop.poster_path}`} />
                            <Card.Body>
                                <Card.Title className='text-light'>TAITLE : {movieTop.title}</Card.Title>
                                <div className='text-light'>
                                    <div className='d-flex justify-content-between align-items-start'>
                                        <div className='pt-1'>
                                            RATE : <span className='text-info'>{movieTop.vote_average}</span>
                                        </div>
                                        <div >
                                            <StarRatings
                                                rating={movieTop.vote_average / 2}
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
                                    <Button variant="outline-info" onClick={() => handleDetails(movieTop)}>DETAILS</Button>

                                </div>
                            </Card.Body>
                        </Card>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default TopMovies
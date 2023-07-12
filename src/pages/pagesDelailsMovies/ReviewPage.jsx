import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import ShowMore from 'react-show-more';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AiFillStar } from 'react-icons/ai';
import { GetReviewsMovies } from '../../ReduxSystem/ReviewsMoviesSlice';
import { DetailsMovies } from '../../ReduxSystem/DetailsMoviesSlice';

const ReviewPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { dataDetailsMovies } = useSelector(state => state.DetailsForMovies)
    const { loading, dataReviewsMovies} = useSelector(state => state.ReviewsMovies)


    const { id } = useParams()
    const firstPart = id.split(" ")[0];


    useEffect(() => {
        dispatch(GetReviewsMovies(firstPart))
        dispatch(DetailsMovies(firstPart))
    }, [firstPart])

    return (
        <>
            {loading === true ? (
                <div className='loadDetails d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                <section>
                    <div variant="dark" className='col-12 bg-dark'>
                        <Card className="col-12 border border-0 container bg-dark">
                            <Card.Body variant="dark" className='text-light d-flex bg-dark align-items-center gap-3'>
                                <Card.Img variant="top" style={{ width: '5rem' }} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${dataDetailsMovies && dataDetailsMovies.poster_path}`} />
                                <div>
                                    <Card.Title className='fs-4'>{dataDetailsMovies && dataDetailsMovies.title} <span className='text-secondary'>({dataDetailsMovies && dataDetailsMovies.release_date})</span></Card.Title>
                                    <Card.Text as={Link} className='Link text-secondary' onClick={() => navigate(-1)}>
                                        <BsArrowLeftShort />Back to main
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='d-flex flex-column gap-5 p-5'>

                        {dataReviewsMovies && dataReviewsMovies.map((review) => {
                            const rawDate = review.created_at;
                            const formattedDate = new Date(rawDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

                            return (
                                <div key={review.id} className="d-flex gap-5 bg-dark text-light p-5">
                                    <div>
                                        <Stack direction="row">
                                            <Avatar className='col-5' alt="Remy Sharp" src={`${review.author_details.avatar_path && review.author_details.avatar_path.substring(1)}`} />
                                        </Stack>
                                    </div>
                                    <div>
                                        <div className='d-flex gap-4'>
                                            <h2 className='fw-bold fs-4'>A review by <span className='text-info'>{review.author}</span></h2>
                                            {review.author_details.rating && (
                                                <span className='border rounded text-light text-center' style={{ width: "3.5rem", height: "2%" }}><AiFillStar className='text-light' /> {review.author_details.rating.toFixed(1)}</span>
                                            )}

                                        </div>
                                        <p>
                                            Written by <span className='fw-bold text-info'>{review.author}</span> on <span className='text-danger'>{formattedDate}</span>
                                        </p>
                                        <p>
                                            <ShowMore
                                                lines={3}
                                                more='Show more'
                                                less='Show less'
                                                anchorClass='text-info'
                                            >
                                                {review.content}
                                            </ShowMore>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </section>
            )}
        </>
    )
}

export default ReviewPage
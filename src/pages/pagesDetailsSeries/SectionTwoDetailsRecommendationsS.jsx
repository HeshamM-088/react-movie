import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailsRecommendationsMovies } from '../../ReduxSystem/DetailsRecommendationsMoviesSlice';
import Card from 'react-bootstrap/Card';
import { Credits, DetailsMovies } from '../../ReduxSystem/DetailsMoviesSlice';
import { DetailsRecommendationsSeries } from '../../ReduxSystem/DetailsRecommendationsSeriesSlice';
import { CreditsSeries, DetailsSeries } from '../../ReduxSystem/DetailsSeriesSlice';

const SectionTwoDetailsRecommendationsS = () => {

    const { id } = useParams()
    const firstPart = id.split(" ")[0];


    const { dataRecommendationsSeries, loading } = useSelector(state => state.RecommendationsSeries)
    const { dataDetailsSeries } = useSelector(state => state.DetailsForSeries)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDetails = (series) => {

        dispatch(DetailsSeries(series.id))
        dispatch(CreditsSeries(series.id))
        navigate(`/detailsSeriesPage/${series.id} - ${series.name}`)
    }

    useEffect(() => {
        dispatch(DetailsRecommendationsSeries(firstPart))
        dispatch(DetailsSeries(firstPart))
    }, [firstPart])



    return (
        <>
            {loading === true ? (
                <div className='loadDetails d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (

                <section className='row mt-5'>
                    <div className='section-acting d-flex flex-column flex-wrap gap-2'>
                        <div>
                            <h4 className='text-light'>Recommendations</h4>
                        </div>

                        {dataRecommendationsSeries.length > 0 ? (
                            <div className='ms-auto col-12 d-flex flex-nowrap overflow-auto style-cards-acting position-relative gap-3 rounded'>

                                {dataRecommendationsSeries.length > 0 && dataRecommendationsSeries.map((recommend, index) => (
                                    <Card key={recommend.id} variant="dark" className='bg-dark text-light col-lg-4 col-md-5 col-sm-6 col-8 shadow bg-dark-tertiary rounded'>
                                        <Card.Body className='col-12 d-flex flex-column gap-3'>
                                            <img variant="top" onClick={() => handleDetails(recommend)} className='col-12 cursor-pointer' src={recommend && recommend.poster_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${recommend.poster_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                            <div onClick={() => handleDetails(recommend)} className='d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-sm-between gap-4 gap-sm-0 cursor-pointer'>
                                                <span>{recommend && recommend.name}</span>
                                                <span className='text-info'>{recommend && ((recommend.vote_average * 10).toFixed())}%</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                           <div>
                             <span>
                                We don't have enough data to suggest any Series based on <span className='text-info'>{dataDetailsSeries && dataDetailsSeries.name}</span>
                            </span>
                           </div>
                        )}

                    </div>
                </section>
            )}

        </>
    )
}

export default SectionTwoDetailsRecommendationsS

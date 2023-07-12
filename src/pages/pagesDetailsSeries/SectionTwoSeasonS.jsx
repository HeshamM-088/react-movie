import React from 'react'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DetailsSeries } from '../../ReduxSystem/DetailsSeriesSlice';
import { HiStar } from 'react-icons/hi';
import { GetTvSeasonDetails } from '../../ReduxSystem/TvSeasonsDetailsSlice';

const SectionTwoSeasonS = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, dataDetailsSeries } = useSelector(state => state.DetailsForSeries)


    const { id } = useParams()
    const firstPart = id.split(" ")[0];
    const twoPart = id.split("-")[1];


    const handleBtnPageSeason = (season) => {
        dispatch(GetTvSeasonDetails({ seriesId: firstPart, seasonEpisodeNumber: season.season_number }))
        navigate(`/seasonpageofseries/${firstPart} - ${season.name} - ${season.season_number}`)
    }


    useEffect(() => {
        dispatch(DetailsSeries(firstPart))
    }, [firstPart])

    return (
        <>
            {loading === true ? (
                <div className='loadDetails d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (

                <section>
                    <div className='d-flex flex-column gap-4 p-5'>
                        <h2 className='text-info text-center text-lg-start'>Last Season</h2>
                        <div className='d-flex flex-column align-items-center align-items-lg-start flex-wrap gap-5 gap-lg-4'>
                            {dataDetailsSeries && dataDetailsSeries.seasons && dataDetailsSeries.seasons.length > 0 &&
                                <Card className='col-10 col-sm-9 col-md-4 col-lg-12 bg-dark rounded' >
                                    <Card.Body className='d-flex flex-column flex-lg-row align-items-center align-items-lg-start gap-3 gap-lg-2 p-0'>
                                        <img onClick={() => handleBtnPageSeason(dataDetailsSeries && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1])} className="col-12 col-lg-2 rounded-start cursor-pointer" variant="top" src={dataDetailsSeries && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1] && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1].poster_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1].poster_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                        <div className='d-flex flex-column align-items-center align-items-lg-start  p-3 p-lg-4 ps-lg-2 gap-2 gap-lg-4'>
                                            <div className='fw-bold d-flex flex-column flex-lg-row align-items-center align-items-lg-start gap-3'>

                                                <span className='fs-5 cursor-pointer Link' onClick={() => handleBtnPageSeason(dataDetailsSeries && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1])}>
                                                    {dataDetailsSeries && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1] && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1].name}
                                                </span>

                                                {dataDetailsSeries && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1] && (
                                                    <span className='border ms-3 rounded text-dark text-center pe-2 ps-2 bg-light'><HiStar />{dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1].vote_average}</span>
                                                )}

                                                <div>
                                                    <span className='fw-bold' >
                                                        {dataDetailsSeries && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1] && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1].air_date.split("-")[0]}{dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1] && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1].episode_count && ` | ${dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1].episode_count} Episodes`}
                                                    </span>
                                                </div>
                                            </div>

                                            <span  className='text-center text-lg-start'>
                                                {dataDetailsSeries && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1] && dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1].overview ? dataDetailsSeries.seasons[dataDetailsSeries.seasons.length - 1].overview : `There is no Overview for this Season`}

                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            }

                        </div>
                        {dataDetailsSeries && dataDetailsSeries.seasons.length > 1 &&
                            <div>
                                <Card.Title as={Link} to={`/seasonspage/${firstPart} - ${twoPart}`} className='fs-6 Link cursor-pointer text-light p-2'>View All Seasons</Card.Title>
                            </div>
                        }
                    </div>

                </section>
            )}
        </>
    )
}

export default SectionTwoSeasonS
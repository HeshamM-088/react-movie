import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DetailsSeries } from '../../ReduxSystem/DetailsSeriesSlice';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { BsArrowLeftShort } from 'react-icons/bs';
import { HiStar } from 'react-icons/hi';
import { format } from 'date-fns';
import { GetTvSeasonDetails } from '../../ReduxSystem/TvSeasonsDetailsSlice';

const SeasonPageS = () => {


    const { id } = useParams()
    const firstPart = id.split(" ")[0];

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, dataDetailsSeries } = useSelector(state => state.DetailsForSeries)


    const handleBtnPageSeason = (season)=>{
        dispatch(GetTvSeasonDetails({seriesId : firstPart, seasonEpisodeNumber : season.season_number}))
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
                    <div variant="dark" className='col-12 bg-dark'>
                        <Card className="col-12 border border-0 container bg-dark">
                            <Card.Body variant="dark" className='text-light d-flex bg-dark align-items-center gap-3'>
                                <Card.Img variant="top" style={{ width: '5rem' }} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${dataDetailsSeries && dataDetailsSeries.poster_path}`} />
                                <div>
                                    <Card.Title className='fs-4'>{dataDetailsSeries && dataDetailsSeries.name} <span className='text-secondary'>({dataDetailsSeries && dataDetailsSeries.first_air_date.split("-")[0]})</span></Card.Title>
                                    <div as={Link} className='Link text-secondary' onClick={() => navigate(-1)}>
                                        <BsArrowLeftShort />Back to main
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='d-flex flex-column align-items-center align-items-lg-start gap-5 p-5'>
                        {dataDetailsSeries && dataDetailsSeries.seasons && dataDetailsSeries.seasons.map((season) => {

                            const dateStr = season.air_date && season.air_date
                            const formattedData = format(new Date(dateStr) , `MMMM d, yyyy`)

                            return (
                                <Card className='col-10 col-sm-8 col-md-7 col-lg-12 bg-dark rounded' >
                                    <Card.Body className={season.overview ? 'col-12 d-flex flex-column flex-lg-row align-items-start gap-3 gap-lg-2 p-0' : 'col-12 d-flex flex-column flex-lg-row align-items-center gap-3 gap-lg-2 p-0'}>
                                        <img onClick={()=> handleBtnPageSeason(season)} className="col-12 col-lg-2 rounded-start cursor-pointer" variant="top" src={season.poster_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${season.poster_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                        <div className='d-flex flex-column text-center text-lg-start p-4 p-lg-4 ps-lg-2  gap-2 gap-lg-4'>
                                            <div className='d-flex flex-column flex-lg-row flex-wrap align-items-center gap-3 gap-lg-2 fw-bold Link'>
                                                <div>
                                                    <span onClick={()=> handleBtnPageSeason(season)} className='fs-3 cursor-pointer text-center text-lg-start Link'>
                                                        {season.name}
                                                    </span>
                                                </div>
                                                {season.vote_average !== 0 && (
                                                    <div className={season.overview ? 'col-3 col-sm-2 col-md-2 col-lg-1 d-flex flex-wrap border rounded text-center text-lg-start align-items-center justify-content-center bg-light' : 'col-4 col-sm-3 col-md-3 col-lg-2 d-flex flex-wrap border rounded text-center text-lg-start align-items-center justify-content-center bg-light'}>
                                                        <span className='text-dark'><HiStar /></span>
                                                        <span className='text-dark'>{season.vote_average}</span>
                                                    </div>
                                                )}

                                                <div>
                                                    <span>{season.air_date?.split("-")[0]}{season.episode_count && ` | ${season.episode_count} Episodes`}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className='d-flex flex-column flex-lg-row gap-2 align-items-center'>
                                                     <span>Season <span className='text-info fw-bold'>{season.season_number && season.season_number}</span> of</span> <span className='border-bottom'>{dataDetailsSeries && dataDetailsSeries.name}</span> premiered on <span> <span className='text-info fw-bold'>{formattedData}</span>.</span>
                                                </span>
                                            </div>

                                            <span className='overflew-auto'>
                                                {season.overview ? season.overview : `There is no Overview for this Season`}
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )


                        })

                        }

                    </div>
                </section>
            )}
        </>
    )
}

export default SeasonPageS
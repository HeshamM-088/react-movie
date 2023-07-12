import { useEffect } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import { GetCreditsEpisodeOfSeasonSeries } from '../../ReduxSystem/CreditsEpisodeOfSeasonSeriesSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GetDetailsTvEpisode, GetDetailsTvEpisodeImages } from '../../ReduxSystem/DetailsTvEpisodeSlice';
import { getDetailsActor, getDetailsActorExternalIDS, getDetailsActorKnownFor } from '../../ReduxSystem/PeopleDetailsSlice';

const PageCreditsEpisodeOfSeasonSeries = () => {

    const { seriesId, seasonNumber, episodeNumber } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loading, dataCreditsEpisodeOfSeasonSeries, dataCreditsEpisodeOfSeasonSeriesCast, dataCreditsEpisodeOfSeasonSeriesCrew, artCrew, cameraCrew, writingCrew, crewCrew, directingCrew, editingCrew, lightingCrew, soundCrew, visualEffectsCrew, costumeMakeUp, } = useSelector(state => state.CreditsEpisodeOfSeasonSeries)
    const { dataDetailsTvEpisode, dataDetailsTvEpisodeImages } = useSelector(state => state.DetailsTvEpisode)



    useEffect(() => {
        dispatch(GetCreditsEpisodeOfSeasonSeries({ seriesId, seasonNumber, episodeNumber }))
        dispatch(GetDetailsTvEpisode({ seriesId, seasonNumber, episodeNumber }))
        dispatch(GetDetailsTvEpisodeImages({ seriesId, seasonNumber, episodeNumber }))

    }, [])




    const getPerson = (actor) => {
        dispatch(getDetailsActorKnownFor(actor.name))
        dispatch(getDetailsActor(actor.id))
        dispatch(getDetailsActorExternalIDS(actor.id))
        navigate(`/personseriesdetails/${actor.id} - ${actor.name}`)
    }


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
                                <Card.Img variant="top" style={{ width: '5rem' }} src={dataDetailsTvEpisodeImages[0] && dataDetailsTvEpisodeImages[0].file_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${dataDetailsTvEpisodeImages[0] && dataDetailsTvEpisodeImages[0].file_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                <div>
                                    <Card.Title className='fs-4'>{dataDetailsTvEpisode && dataDetailsTvEpisode?.name} <span className='text-secondary'>({dataDetailsTvEpisode && dataDetailsTvEpisode.air_date && dataDetailsTvEpisode.air_date.split("-")[0]})</span></Card.Title>
                                    <div as={Link} className='Link text-secondary' onClick={() => navigate(-1)}>
                                        <BsArrowLeftShort />Back to episode
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='d-flex flex-column flex-lg-row align-items-center align-items-lg-start  container'>
                        <div className='col-10 col-lg-6 gap-4 d-flex flex-column p-5'>
                            {dataCreditsEpisodeOfSeasonSeriesCast.length > 0 ? (
                                <h2>Cast <span className='text-info'>{dataCreditsEpisodeOfSeasonSeriesCast.length}</span></h2>
                            ) : (
                                <h2>Cast not found</h2>
                            )}
                            {dataCreditsEpisodeOfSeasonSeriesCast.map((cast) => (
                                <Card className="col-12 border border-0 container bg-dark">
                                    <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start bg-dark align-items-center gap-3'>
                                        <Card.Img className='cursor-pointer' variant="top" onClick={() => getPerson(cast)} style={{ width: '5rem' }} src={cast.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${cast.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                        <div className='text-center text-lg-start'>
                                            <Card.Title onClick={() => getPerson(cast)} className='fs-4 cursor-pointer'>{cast.name}</Card.Title>
                                            <Card.Text className='text-secondary'>
                                                {cast.character}
                                            </Card.Text>
                                        </div>

                                    </Card.Body>
                                </Card>
                            ))}
                        </div>



                        <div className='col-10 col-lg-6 gap-4 d-flex flex-column p-5'>
                            {dataCreditsEpisodeOfSeasonSeriesCrew.length > 0 ? (
                                <h2>Crew <span className='text-info'>{dataCreditsEpisodeOfSeasonSeriesCrew.length}</span></h2>
                            ) : (
                                <>
                                    <h2>Crew</h2>
                                    <p className='text-light'>There are no crew records added to <span className='text-info'>{dataDetailsTvEpisode && dataDetailsTvEpisode.name}.</span></p>
                                </>
                            )}



                            {artCrew.length > 0 && (
                                <div className='gap-4 d-flex flex-column p-4'>
                                    <h2>Art</h2>
                                    {artCrew.map((crew) => (
                                        <Card className="col-12 border border-0 container bg-dark">
                                            <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start  bg-dark align-items-center gap-3'>
                                                <Card.Img className='cursor-pointer' onClick={() => getPerson(crew)} variant="top" style={{ width: '5rem' }} src={crew.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                <div className='text-center text-lg-start'>
                                                    <Card.Title onClick={() => getPerson(crew)} className='fs-4 cursor-pointer'>{crew.name}</Card.Title>
                                                    <Card.Text className='text-secondary'>
                                                        {crew.known_for_department} {crew.job}
                                                    </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            )}



                            {cameraCrew.length > 0 && (
                                <div className='gap-4 d-flex flex-column p-4'>
                                    <h2>Camera</h2>
                                    {cameraCrew.map((crew) => (
                                        <Card className="col-12 border border-0 container bg-dark">
                                            <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start bg-dark align-items-center gap-3'>
                                                <Card.Img className='cursor-pointer' variant="top" onClick={() => getPerson(crew)} style={{ width: '5rem' }} src={crew.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                <div className='text-center text-lg-start'>
                                                    <Card.Title onClick={() => getPerson(crew)} className='fs-4 cursor-pointer'>{crew.name}</Card.Title>
                                                    <Card.Text className='text-secondary'>
                                                        {crew.known_for_department} {crew.job}
                                                    </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            )}


                            {costumeMakeUp.length > 0 && (
                                <div className='gap-4 d-flex flex-column p-4'>
                                    <h2>Costume & Make-Up</h2>
                                    {costumeMakeUp.map((crew) => (
                                        <Card className="col-12 border border-0 container bg-dark">
                                            <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start bg-dark align-items-center gap-3'>
                                                <Card.Img className='cursor-pointer' variant="top" onClick={() => getPerson(crew)} style={{ width: '5rem' }} src={crew.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                <div className='text-center text-lg-start'>
                                                    <Card.Title onClick={() => getPerson(crew)} className='fs-4 cursor-pointer'>{crew.name}</Card.Title>
                                                    <Card.Text className='text-secondary'>
                                                        {crew.known_for_department} {crew.job}
                                                    </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            )}




                            {writingCrew.length > 0 && (
                                <div className='gap-4 d-flex flex-column p-4'>
                                    <h2>Writing</h2>
                                    {writingCrew.map((crew) => (
                                        <Card className="col-12 border border-0 container bg-dark">
                                            <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start bg-dark align-items-center gap-3'>
                                                <Card.Img className='cursor-pointer' variant="top" onClick={() => getPerson(crew)} style={{ width: '5rem' }} src={crew.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                <div className='text-center text-lg-start'>
                                                    <Card.Title onClick={() => getPerson(crew)} className='fs-4 cursor-pointer'>{crew.name}</Card.Title>
                                                    <Card.Text className='text-secondary'>
                                                        {crew.known_for_department} {crew.job}
                                                    </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            )}



                            {crewCrew.length > 0 && (
                                <div className='gap-4 d-flex flex-column p-4'>
                                    <h2>Crew</h2>
                                    {crewCrew.map((crew) => (
                                        <Card className="col-12 border border-0 container bg-dark">
                                            <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start bg-dark align-items-center gap-3'>
                                                <Card.Img className='cursor-pointer' variant="top" onClick={() => getPerson(crew)} style={{ width: '5rem' }} src={crew.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                <div className='text-center text-lg-start'>
                                                    <Card.Title onClick={() => getPerson(crew)} className='fs-4 cursor-pointer'>{crew.name}</Card.Title>
                                                    <Card.Text className='text-secondary'>
                                                        {crew.known_for_department} {crew.job}
                                                    </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            )}


                            {directingCrew.length > 0 && (
                                <div className='gap-4 d-flex flex-column p-4'>
                                    <h2>Directing</h2>
                                    {directingCrew.map((crew) => (
                                        <Card className="col-12 border border-0 container bg-dark">
                                            <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start bg-dark align-items-center gap-3'>
                                                <Card.Img className='cursor-pointer' variant="top" onClick={() => getPerson(crew)} style={{ width: '5rem' }} src={crew.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                <div className='text-center text-lg-start'>
                                                    <Card.Title onClick={() => getPerson(crew)} className='fs-4 cursor-pointer'>{crew.name}</Card.Title>
                                                    <Card.Text className='text-secondary'>
                                                        {crew.known_for_department} {crew.job}
                                                    </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            )}





                            {editingCrew.length > 0 && (

                                <div className='gap-4 d-flex flex-column p-4'>
                                    <h2>Editing</h2>
                                    {editingCrew.map((crew) => (
                                        <Card className="col-12 border border-0 container bg-dark">
                                            <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start bg-dark align-items-center gap-3'>
                                                <Card.Img className='cursor-pointer' variant="top" onClick={() => getPerson(crew)} style={{ width: '5rem' }} src={crew.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                <div className='text-center text-lg-start'>
                                                    <Card.Title onClick={() => getPerson(crew)} className='fs-4 cursor-pointer'>{crew.name}</Card.Title>
                                                    <Card.Text className='text-secondary'>
                                                        {crew.known_for_department} {crew.job}
                                                    </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            )}


                            {lightingCrew.length > 0 && (
                                <div className='gap-4 d-flex flex-column p-4'>
                                    <h2>Lighting</h2>
                                    {lightingCrew.map((crew) => (
                                        <Card className="col-12 border border-0 container bg-dark">
                                            <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start bg-dark align-items-center gap-3'>
                                                <Card.Img className='cursor-pointer' variant="top" onClick={() => getPerson(crew)} style={{ width: '5rem' }} src={crew.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                <div className='text-center text-lg-start'>
                                                    <Card.Title onClick={() => getPerson(crew)} className='fs-4 cursor-pointer'>{crew.name}</Card.Title>
                                                    <Card.Text className='text-secondary'>
                                                        {crew.known_for_department} {crew.job}
                                                    </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            )}




                            {soundCrew.length > 0 && (

                                <div className='gap-4 d-flex flex-column p-4'>
                                    <h2>Sound</h2>
                                    {soundCrew.map((crew) => (
                                        <Card className="col-12 border border-0 container bg-dark">
                                            <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start bg-dark align-items-center gap-3'>
                                                <Card.Img className='cursor-pointer' variant="top" onClick={() => getPerson(crew)} style={{ width: '5rem' }} src={crew.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                <div className='text-center text-lg-start'>
                                                    <Card.Title onClick={() => getPerson(crew)} className='fs-4 cursor-pointer'>{crew.name}</Card.Title>
                                                    <Card.Text className='text-secondary'>
                                                        {crew.known_for_department} {crew.job}
                                                    </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            )}




                            {visualEffectsCrew.length > 0 && (
                                <div className='gap-4 d-flex flex-column p-4'>
                                    <h2>Visual Effects</h2>
                                    {visualEffectsCrew.map((crew) => (
                                        <Card className="col-12 border border-0 container bg-dark">
                                            <Card.Body variant="dark" className='text-light d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-center justify-content-md-start bg-dark align-items-center gap-3'>
                                                <Card.Img className='cursor-pointer' variant="top" onClick={() => getPerson(crew)} style={{ width: '5rem' }} src={crew.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                <div className='text-center text-lg-start'>
                                                    <Card.Title onClick={() => getPerson(crew)} className='fs-4 cursor-pointer'>{crew.name}</Card.Title>
                                                    <Card.Text className='text-secondary'>
                                                        {crew.known_for_department} {crew.job}
                                                    </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            )}



                        </div>
                    </div>
                </section>
            )}
        </>

    )
}

export default PageCreditsEpisodeOfSeasonSeries
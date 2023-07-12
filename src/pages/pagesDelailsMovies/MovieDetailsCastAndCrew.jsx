import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { getDetailsActor, getDetailsActorExternalIDS, getDetailsActorKnownFor } from '../../ReduxSystem/PeopleDetailsSlice';
import { DetailsMovies, Credits } from '../../ReduxSystem/DetailsMoviesSlice';

const MovieDetailsCastAndCrew = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, costumeMakeUp, artCrew, cameraCrew, writingCrew, crewCrew, directingCrew, editingCrew, lightingCrew, soundCrew, visualEffectsCrew, dataCast, dataCrew, dataDetailsMovies } = useSelector(state => state.DetailsForMovies)

    const { id } = useParams()
    const firstPart = id.split(" ")[0];



    const getPerson = (actor) => {
        dispatch(getDetailsActorKnownFor(actor.name))
        dispatch(getDetailsActor(actor.id))
        dispatch(getDetailsActorExternalIDS(actor.id))
        navigate(`/personDetails/${actor.id} - ${actor.name}`)
    }

    useEffect(() => {
        dispatch(DetailsMovies(firstPart))
        dispatch(Credits(firstPart))
    }, [firstPart])

    return (
        <>
            {loading === true ? (
                <div className='loadDetails d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                <section className='row'>
                    <div className='col-12 p-0 d-flex flex-wrap flex-column'>
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
                        <div className='d-flex flex-column flex-lg-row align-items-center align-items-lg-start  container'>
                            <div className='col-10 col-lg-6 gap-4 d-flex flex-column p-5'>
                                {dataCast.length > 0 ? (
                                    <h2>Cast <span className='text-info'>{dataCast.length}</span></h2>
                                ) : (
                                    <h2>Cast not found</h2>
                                )}
                                {dataCast.map((cast) => (
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
                                {dataCrew.length > 0 ? (
                                    <h2>Crew <span className='text-info'>{dataCrew.length}</span></h2>
                                ) : (
                                    <>
                                        <h2>Crew</h2>
                                        <p className='text-light'>There are no crew records added to <span className='text-info'>{dataDetailsMovies && dataDetailsMovies.title}.</span></p>
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
                    </div>
                    <div className='col-12 text-center mb-5'>
                        <Button variant='outline-info' onClick={() => navigate(-1)}>Back a Step</Button>
                    </div>
                </section>
            )}


        </>
    )
}

export default MovieDetailsCastAndCrew
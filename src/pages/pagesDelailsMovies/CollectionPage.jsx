import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { Credits, DetailsMovies, getExternalIDSMovies } from '../../ReduxSystem/DetailsMoviesSlice';
import { DetailsCollectionMovies } from '../../ReduxSystem/DetailsCollectionMoviesSlice';
import Card from 'react-bootstrap/Card';
import { getDetailsActor, getDetailsActorExternalIDS, getDetailsActorKnownFor } from '../../ReduxSystem/PeopleDetailsSlice';

const CollectionPage = () => {

    const { id } = useParams()
    const idWithoutSpaces = id.replace(/\s/g, '');
    const firstPart = idWithoutSpaces.split("-")[0]; // الجزء الأول من الـ id
    const idMoviePart = idWithoutSpaces.split("-")[1]; // الجزء الأول من الـ id

    const { loading, dataCollectionMovies } = useSelector(state => state.CollectionMovies)
    const { dataDetailsMovies } = useSelector(state => state.DetailsForMovies)
    const { dataCast, dataCrew } = useSelector(state => state.DetailsForMovies)

    const dispatch = useDispatch()
    const navigate = useNavigate();


    const getPerson = (actor) => {
        dispatch(getDetailsActorKnownFor(actor.name))
        dispatch(getDetailsActor(actor.id))
        dispatch(getDetailsActorExternalIDS(actor.id))
        navigate(`/personDetails/${actor.id} - ${actor.name}`)
    }

    const handleDetails = (movie) => {
        dispatch(DetailsMovies(movie.id))
        dispatch(Credits(movie.id))
        navigate(`/detailsMoviesPage/${movie.id} - ${movie.name ? movie.name : movie.title}`)
    }

    useEffect(() => {

        dispatch(DetailsCollectionMovies(firstPart));
        dispatch(DetailsMovies(idMoviePart))

        dispatch(getExternalIDSMovies(idMoviePart))
        dispatch(Credits(idMoviePart))

    }, [firstPart])


    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };


    return (
        <>
            {loading === true ? (
                <div className='loadDetails d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                <section className='row d-flex flex-column gap-4'>
                    <div className='vh-75 flex-column flex-wrap w-100 position-relative p-0'>
                        <div className='bg-img-collection w-100 h-100' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2${dataCollectionMovies && dataCollectionMovies.backdrop_path}")` }}>

                            <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 flex-wrap z-index'>
                                <div className={dataCollectionMovies && dataCollectionMovies.poster_path ? 'col-7 col-lg-3 text-center p-lg-5 pe-lg-0  text-lg-start' : 'col-7 col-lg-4 text-center p-lg-5 pe-lg-0 text-lg-start'}>
                                    <img className={dataCollectionMovies && dataCollectionMovies.poster_path ? 'col-12 col-sm-8 col-md-9 col-lg-11 p-3 p-md-5 p-lg-0' : 'col-10 col-md-8 col-lg-12 p-lg-5'} src={dataCollectionMovies && dataCollectionMovies.poster_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${dataCollectionMovies.poster_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`} />
                                </div>
                                <div className={dataCollectionMovies && dataCollectionMovies.poster_path ? 'col-7 col-md-10 col-lg-8 d-flex flex-column align-items-center align-items-lg-start justify-content-center gap-3 flex-wrap text-center text-lg-start' : 'col-7 col-md-10 col-lg-7 d-flex flex-column align-items-center align-items-lg-start justify-content-center gap-3 flex-wrap text-center text-lg-start'}>
                                    <h2>
                                        {dataCollectionMovies && dataCollectionMovies.name}
                                    </h2>
                                    <h2 className='fs-6'>
                                        {dataDetailsMovies && dataDetailsMovies.genres ? dataDetailsMovies.genres.map((genre, index) => (
                                            <span key={index}>{genre.name} {index !== dataDetailsMovies.genres.length - 1 && ","} </span>
                                        )) : `There is no Genres for this ${dataCollectionMovies && dataCollectionMovies.name}`}
                                    </h2>
                                    <h2 className='fs-6 d-flex flex-column gap-2'>
                                        <span className='text-info fs-4'>Overview :- </span>
                                        <span>
                                            {dataCollectionMovies ? dataCollectionMovies.overview : "There is no Overview"}
                                        </span>
                                    </h2>

                                    <h2 className='fs-4'>
                                        <span className='text-info'>Number of Movies : </span>
                                        <span>
                                            {dataCollectionMovies && dataCollectionMovies.parts && dataCollectionMovies.parts.length}
                                        </span>
                                    </h2>

                                    <h2 className='fs-4'>
                                        <span className='text-info'>Revenue : </span>
                                        <span>
                                            {dataDetailsMovies && dataDetailsMovies.revenue ? `$${dataDetailsMovies.revenue.toLocaleString()}` : "-"}
                                        </span>
                                    </h2>

                                    <h2 className='fs-6'>
                                    </h2>
                                    <h2 className='fs-6'>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex flex-column align-items-center align-items-lg-start gap-4 p-lg-5'>
                        <h2 className='text-info text-center text-lg-start'>Featured Cast</h2>
                        <div className='col-12 col-md-12 col-lg-12 d-flex flex-wrap justify-content-center align-items-center align-items-md-start justify-content-lg-start flex-column flex-md-row gap-4'>
                            {dataCast && dataCast.filter((cast, index) => {
                                return (index <= 14 && cast.profile_path !== null)
                            }).map((cast, index) => (
                                <Card key={index} className='col-9 col-sm-7 col-md-5 col-lg-3 bg-dark rounded' >
                                    <Card.Body className='d-flex align-items-center gap-2 p-0'>
                                        <img className="col-2 col-md-2 col-lg-2 rounded-start cursor-pointer" onClick={() => getPerson(cast)} variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${cast.profile_path}`} />
                                        <div className='d-flex flex-wrap flex-column'>
                                            <span className='fw-bold cursor-pointer Link' onClick={() => getPerson(cast)}>{cast.name}</span>
                                            <span>
                                                {cast.character}
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}

                        </div>
                    </div>

                    <div className='d-flex flex-column align-items-center align-items-lg-start gap-4 p-lg-5'>
                        <h2 className='text-info text-center text-lg-start'>Featured Crew</h2>
                        <div className='col-12 col-md-12 col-lg-12 d-flex flex-wrap justify-content-center align-items-center align-items-md-start justify-content-lg-start flex-column flex-md-row gap-4'>
                            {dataCrew && dataCrew.filter((crew, index) => {
                                return (index <= 14 && crew.profile_path !== null)
                            }).map((crew, index) => (
                                <Card key={index} className='col-9 col-sm-7 col-md-5 col-lg-3 bg-dark rounded' >
                                    <Card.Body className='d-flex align-items-center gap-2 p-0'>
                                        <img className="col-2 col-md-2 col-lg-2 rounded-start cursor-pointer" onClick={() => getPerson(crew)} variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${crew.profile_path}`} />
                                        <div className='d-flex  flex-wrap flex-column'>
                                            <span className='fw-bold cursor-pointer Link' onClick={() => getPerson(crew)}>{crew.name}</span>
                                            <span>
                                                {crew.department}
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}

                        </div>
                    </div>

                    <div className='d-flex flex-column gap-4 p-5'>
                        <h2 className='text-info text-center text-lg-start'>{dataCollectionMovies && dataCollectionMovies.parts && dataCollectionMovies.parts.length} movies</h2>
                        <div className='d-flex flex-column align-items-center align-items-lg-start flex-wrap gap-5 gap-lg-4'>
                            {dataCollectionMovies && dataCollectionMovies.parts && dataCollectionMovies.parts.map((parts, index) => (
                                <Card key={index} className='col-8 col-sm-6 col-md-4 col-lg-12 bg-dark rounded' >
                                    <Card.Body className='d-flex flex-column flex-lg-row align-items-center gap-3 gap-lg-2 p-0'>
                                        <img onClick={() => handleDetails(parts)} className="col-12 col-lg-1 rounded-start cursor-pointer" variant="top" src={parts.poster_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${parts.poster_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                        <div className='d-flex flex-column text-center text-lg-start  p-2 gap-2 gap-lg-0'>
                                            <span onClick={() => handleDetails(parts)} className='fw-bold cursor-pointer Link'>{parts.title}</span>
                                            <span className='text-secondary' >
                                                {parts.release_date ? parts.release_date : "There is no Release Date"}
                                            </span>
                                            <span className='overflew-auto'>
                                                {parts.overview ? truncateText(parts.overview, 170) : "There is no Overview"}

                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}

                        </div>
                    </div>



                </section>
            )}
        </>
    )
}

export default CollectionPage



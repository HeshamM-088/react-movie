import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDetailsActor, getDetailsActorExternalIDS, getDetailsActorKnownFor } from '../../ReduxSystem/PeopleDetailsSlice';
import { CreditsSeries, getExternalIDSSeries } from '../../ReduxSystem/DetailsSeriesSlice';


const SectionTwoDetailsActingS = () => {
    const { id } = useParams()
    const firstPart = id.split(" ")[0];
    const twoPart = id.split("-")[1];


    const { dataCast, loading, dataExternalIDSSeries, dataDetailsSeries } = useSelector(state => state.DetailsForSeries)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const getPerson = (actor) => {
        dispatch(getDetailsActorKnownFor(actor.name))
        dispatch(getDetailsActor(actor.id))
        dispatch(getDetailsActorExternalIDS(actor.id))
        navigate(`/personseriesdetails/${actor.id} - ${actor.name}`)
    }


    useEffect(() => {
        dispatch(getExternalIDSSeries(firstPart))
        dispatch(CreditsSeries(firstPart))
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
                            <h4 className='text-light'>Series Cast</h4>
                        </div>
                        <div className={dataCast.length > 9 ? 'ms-auto col-12 d-flex flex-nowrap overflow-auto style-cards-acting position-relative gap-3 rounded': 'ms-auto col-12 d-flex flex-nowrap overflow-auto position-relative gap-3 rounded'}>

                            {dataCast.length > 9 ?
                                (dataCast.filter((cast, index) => index <= 9).map((cast, index) => (
                                    <Card key={cast.id} variant="dark" className='bg-dark text-light col-lg-2 col-md-3 col-sm-4 col-7 shadow bg-dark-tertiary rounded'>
                                        <Card.Img onClick={() => getPerson(cast)} variant="top" className='h-100 cursor-pointer' src={cast && cast.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${cast.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                        <Card.Body className='h-50'>
                                            <Card.Title className='cursor-pointer' onClick={() => getPerson(cast)}>{cast && cast.name}</Card.Title>
                                            <Card.Text>{cast.character}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))) : (dataCast.length > 5 || dataCast.length !== 0) ? (
                                    dataCast.map((cast, index) => (
                                        <Card key={cast.id} variant="dark" className='bg-dark text-light col-lg-2 col-md-3 col-sm-4 col-7 shadow bg-dark-tertiary rounded'>
                                            <Card.Img onClick={() => getPerson(cast)} variant="top" className='h-100 cursor-pointer' src={cast && cast.profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${cast.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                            <Card.Body className='h-50'>
                                                <Card.Title className='cursor-pointer' onClick={() => getPerson(cast)}>{cast && cast.name}</Card.Title>
                                                <Card.Text>{cast.character}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    ))
                                ) : (
                                    <span>
                                        We don't have any Cast for <span className='text-info'>{dataDetailsSeries && dataDetailsSeries.name}</span>
                                    </span>
                                )}

                            {dataCast.length > 9 &&
                                <Card variant="dark" className='bg-dark text-light d-flex justify-content-center align-items-center col-md-2 col-sm-4 col-6 shadow bg-dark-tertiary rounded'>
                                    <Card.Title as={Link} to={`/seriesdetailscastandcrew/${firstPart} - ${twoPart}`} className='fs-6 Link cursor-pointer'>Show more <BsArrowRightShort className='fs-5' /></Card.Title>
                                </Card>
                            }

                        </div>
                        {dataCast.length > 6 &&
                            <div>
                                <Card.Title as={Link} to={`/seriesdetailscastandcrew/${firstPart} - ${twoPart}`} className='fs-6 Link cursor-pointer text-light p-2'>Full Cast & Crew</Card.Title>
                            </div>
                        }

                    </div>
                </section>
            )}
        </>

    )
}

export default SectionTwoDetailsActingS

// {loading === true ? (
//     <div className='loadDetails d-flex justify-content-center align-items-center'>
//         <span class="loader"></span>
//     </div>
// ) : ( )}

import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DetailsCollectionMovies } from '../../ReduxSystem/DetailsCollectionMoviesSlice'
import { Link, useParams } from 'react-router-dom'
import { DetailsMovies } from '../../ReduxSystem/DetailsMoviesSlice'
import Button from 'react-bootstrap/Button';

const SectionTwoDetailsCollection = () => {
    const dispatch = useDispatch()
    const { dataCollectionMovies , loading} = useSelector(state => state.CollectionMovies)
    const { dataDetailsMovies } = useSelector(state => state.DetailsForMovies)

    const { id } = useParams()
    const firstPart = id.split(" ")[0];

    useEffect(() => {

        dispatch(DetailsMovies(firstPart))

    }, [firstPart])

    useEffect(() => {
        if (dataDetailsMovies && dataDetailsMovies.belongs_to_collection) {
            dispatch(DetailsCollectionMovies(dataDetailsMovies.belongs_to_collection.id));
        }
    }, [dataDetailsMovies]);

    return (
        <>
            {loading === true ? (
                <div className='loadDetails d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                dataCollectionMovies && dataDetailsMovies && dataDetailsMovies.belongs_to_collection && (
                    <section className='p-5 row vh-75 d-flex flex-column flex-wrap w-100 position-relative'>
                        <div
                            className='p-4 p-md-5 rounded bg-img-collection col-12 w-100 h-100 '
                            style={{
                                backgroundImage: dataCollectionMovies?.backdrop_path ? `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2${dataCollectionMovies.backdrop_path}")` : 'none'
                            }}
                        >
                            <div className='col-12 d-flex flex-column flex-wrap align-items-center gap-3 z-index fw-bold p-lg-4 ps-lg-0'>
                                <div>
                                    <h2 className='text-center'>Part of {dataCollectionMovies?.name}</h2>
                                </div>
                                <div className='text-center'>
                                    <span className='text-info'>Includes : </span>
                                    {dataCollectionMovies?.parts?.map((title, index) => (
                                        <span key={index}>
                                            <span className='text-primary'> {index + 1}: </span>
                                            {title.title}
                                            {index !== dataCollectionMovies.parts.length - 1 && ','}
                                        </span>
                                    ))}
                                </div>
                                <Button as={Link} to={`/collectionpage/${dataDetailsMovies && dataDetailsMovies.belongs_to_collection && dataDetailsMovies.belongs_to_collection.id} - ${dataDetailsMovies && dataDetailsMovies.id} - ${dataDetailsMovies && dataDetailsMovies.belongs_to_collection && dataDetailsMovies.belongs_to_collection.name}`}
                                    variant='outline-light' className='rounded-pill'>
                                    VIEW THE COLLECTION
                                </Button>
                            </div>
                        </div>
                    </section>
                )
            )}

        </>
    )
}

export default SectionTwoDetailsCollection


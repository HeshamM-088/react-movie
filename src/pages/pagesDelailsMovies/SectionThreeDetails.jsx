import React, { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { getExternalIDSMovies } from '../../ReduxSystem/DetailsMoviesSlice';
import { GetKeyWordsMovies } from '../../ReduxSystem/GetKeyWordsMoviesSlice';
import { useParams } from 'react-router-dom';

const SectionThreeDetails = () => {

    const dispatch = useDispatch()
    const { dataExternalIDSMovies, dataDetailsMovies} = useSelector(state => state.DetailsForMovies)
    const { keyWordsMovie , loading} = useSelector(state => state.KeyWordsMovies)

    const handleLink = (id) => {
        (id === null || id === "") && alert("The Page not found")
    }


    const { id } = useParams()
    const firstPart = id.split(" ")[0];


    useEffect(() => {
        dispatch(getExternalIDSMovies(firstPart))
        dispatch(GetKeyWordsMovies(firstPart))
    }, [firstPart])


    return (
        <>
            {loading === true ? (
                <div className='loadDetails d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                <section className='row mt-5 gap-5'>
                    <div className='col-12 mb-5 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start gap-4 text-light fs-6'>
                        <div className='text-light d-flex gap-5 fs-4'>

                            <a title='Visit Facebook' className={dataExternalIDSMovies.facebook_id ? "cursor-pointer text-info hoverIcons" : "cursor-pointer text-info"} target={dataExternalIDSMovies.facebook_id ? "_blank" : ""} href={dataExternalIDSMovies.facebook_id ? `https://www.facebook.com/${dataExternalIDSMovies.facebook_id}` : `#`}>
                                <BsFacebook onClick={() => handleLink(dataExternalIDSMovies.facebook_id)} />
                            </a>



                            <a title='Visit Twitter' className={dataExternalIDSMovies.twitter_id ? "cursor-pointer text-info hoverIcons" : "cursor-pointer text-info"} target={dataExternalIDSMovies.twitter_id ? "_blank" : ""} href={dataExternalIDSMovies.twitter_id ? `https://twitter.com/${dataExternalIDSMovies.twitter_id}` : `#`}>
                                <BsTwitter onClick={() => handleLink(dataExternalIDSMovies.twitter_id)} />
                            </a>



                            <a title='Visit Instagram' className={dataExternalIDSMovies.instagram_id ? "cursor-pointer text-info hoverIcons" : "cursor-pointer text-info"} target={dataExternalIDSMovies.instagram_id ? "_blank" : ""} href={dataExternalIDSMovies.instagram_id ? `https://www.instagram.com/${dataExternalIDSMovies.instagram_id}` : `#`}>
                                <BsInstagram onClick={() => handleLink(dataExternalIDSMovies.instagram_id)} />
                            </a>


                            <a title='Visit Homepage' className={dataDetailsMovies && dataDetailsMovies.homepage ? "cursor-pointer text-info hoverIcons" : "cursor-pointer text-info"} target={dataExternalIDSMovies.homepage ? "_blank" : ""} href={dataDetailsMovies && (dataDetailsMovies.homepage !== null && dataDetailsMovies.homepage !== "") ? `${dataDetailsMovies.homepage}` : `#`}>
                                <AiOutlineHome onClick={() => handleLink(dataDetailsMovies && dataDetailsMovies.homepage)} />
                            </a>

                        </div>
                        <div className='text-center text-lg-start'>
                            <h5>Status</h5>
                            <span className='text-info'>{dataDetailsMovies && dataDetailsMovies.status}</span>
                        </div>
                        <div className='text-center text-lg-start'>
                            <h5>Original Language</h5>
                            <span className='text-info'>{dataDetailsMovies && dataDetailsMovies.original_language && dataDetailsMovies.original_language.toUpperCase()}</span>
                        </div>
                        <div className='text-center text-lg-start'>
                            <h5>Budget</h5>
                            <span className='text-info'>{dataDetailsMovies && dataDetailsMovies.budget !== 0 ? `$${dataDetailsMovies.budget.toLocaleString()}` : "-"}</span>
                        </div>
                        <div className='text-center text-lg-start'>
                            <h5>Revenue</h5>
                            <span className='text-info'>{dataDetailsMovies && dataDetailsMovies.revenue !== 0 ? `$${dataDetailsMovies.revenue.toLocaleString()}` : "-"}</span>
                        </div>
                    </div>

                    {/* keyWords */}
                    <div>
                        <h2>Keywords</h2>
                        <div className='text-light d-flex gap-1 flex-wrap'>
                            {keyWordsMovie.length > 0 ? keyWordsMovie.map((keyWord) => (
                                <button key={keyWord.id} className='rounded style-hover-btn'>{keyWord.name && keyWord.name}</button>
                            )) : (
                                <p>
                                    No keywords have been added.
                                </p>
                            )}
                        </div>
                    </div>

                </section>
            )}
        </>
    )
}

export default SectionThreeDetails
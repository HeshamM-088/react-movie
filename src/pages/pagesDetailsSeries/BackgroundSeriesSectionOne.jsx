import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillFileAdd } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { DetailsSeries, videoKeySeries } from '../../ReduxSystem/DetailsSeriesSlice';

const BackgroundSeriesSectionOne = () => {

    const { id } = useParams()
    const firstPart = id.split(" ")[0];
    const twoPart = id.split(" ")[2];


    const [show, setShow] = useState(false);

    const { loading, videoData, dataDetailsSeries, actingDataCast, directingData, productionData } = useSelector(state => state.DetailsForSeries)

    const location = useLocation()
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleBackClick = () => {
        if (location.state && location.state.location) {
            location.state.location === "series" && navigate("/series")
        } else {
            navigate(-1);
        }
    };



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePlay = (seriesId) => {
        handleShow()
        dispatch(videoKeySeries(seriesId))
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
                <div className='row vh-75 flex-column flex-wrap w-100 position-relative'>
                    <div className='bg-img w-100 h-100' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2${dataDetailsSeries && dataDetailsSeries.backdrop_path}")` }}>
                        <div className='text-center text-info mb-3 z-index'>
                            <h2>Series - Details</h2>
                        </div>
                        <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 flex-wrap z-index'>
                            <div className='col-7 col-lg-4 text-center text-lg-end'>
                                <img className='col-10 col-md-8 col-lg-9' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${dataDetailsSeries && dataDetailsSeries.poster_path}`} alt="" />
                            </div>
                            <div className='col-7 col-md-10 col-lg-7 d-flex flex-column align-items-center align-items-lg-start justify-content-center gap-3 flex-wrap'>
                                <h2>{dataDetailsSeries && dataDetailsSeries.name}</h2>
                                <h2 className='fs-6'>{dataDetailsSeries && dataDetailsSeries.first_air_date} {`(${dataDetailsSeries && dataDetailsSeries.original_language.toUpperCase()})`} {`\u{1F449}`} {dataDetailsSeries && dataDetailsSeries.genres && dataDetailsSeries.genres.map((genre, index) => (
                                    <span key={index}>{genre.name}{index !== dataDetailsSeries.genres.length -1 && `,`} </span>
                                ))} {`\u{1F448}`} {dataDetailsSeries && dataDetailsSeries.episode_run_time.length > 0 && "Episode Run Time"} {dataDetailsSeries && dataDetailsSeries.episode_run_time.length > 0 && dataDetailsSeries.episode_run_time[0]}{dataDetailsSeries && dataDetailsSeries.episode_run_time.length > 0 && "min"} </h2>
                                <h2 className='text-primary lh-1'>OverView : <span className='text-light fs-6'>{dataDetailsSeries && dataDetailsSeries.overview}</span></h2>
                                <h2 className='text-primary'>Casting :</h2>

                                {/*  */}
                                <div className='d-flex flex-column flex-md-row flex-lg-row align-items-center justify-content-md-evenly align-items-md-start justify-content-lg-evenly align-items-lg-start w-100 flex-wrap'>
                                    <div className='text-center'>
                                        <h2 className='fs-5'>{actingDataCast.length > 0 && actingDataCast[0].original_name}</h2>
                                        <h2 className='fs-6 text-warning'>Acting</h2>
                                    </div>
                                    <div className='text-light'>||</div>
                                    <div className='text-center'>
                                        <h2 className='fs-5'>{actingDataCast.length > 1 && actingDataCast[1].original_name}</h2>
                                        <h2 className='fs-6 text-warning'>Acting</h2>
                                    </div>
                                </div>

                                {/*  */}
                                <div className='d-flex flex-column flex-md-row flex-lg-row align-items-center justify-content-md-evenly align-items-md-start justify-content-lg-evenly align-items-lg-start w-100 flex-wrap'>
                                    <div className='text-center me-md-3 me-lg-0'>
                                        <h2 className='fs-5'>{productionData.length > 0 && productionData[0].original_name}</h2>
                                        <h2 className='fs-6 text-warning'>Production</h2>
                                    </div>
                                    <div className='text-light me-md-3 me-lg-0'>||</div>
                                    <div className='text-center me-md-3 me-lg-0'>
                                        <h2 className='fs-5'>{directingData.length > 0 && directingData[0].original_name}</h2>
                                        <h2 className='fs-6 text-warning'>Directing</h2>
                                    </div>
                                    <div className='text-light me-md-3 me-lg-0'>||</div>
                                    <div className='text-center me-md-3 me-lg-0'>
                                        <h2 className='fs-5'>{productionData.length > 1 && productionData[1].original_name}</h2>
                                        <h2 className='fs-6 text-warning'>Production</h2>
                                    </div>
                                </div>

                                {/*  */}
                                <div className='d-flex justify-content-evenly align-items-start w-100 flex-wrap'>
                                    <div className='text-center cursor-pointer'>
                                        <AiFillFileAdd className='text-success fs-4' />
                                        <h2 className='fs-6'>AddTo WatchList</h2>
                                    </div>
                                    <div className='text-center cursor-pointer'>
                                        <AiOutlineStar className='text-warning fs-4' />
                                        <h2 className='fs-6'>Rate Movie</h2>
                                    </div>
                                    <div className='text-center cursor-pointer' onClick={() => handlePlay(dataDetailsSeries.id)}>
                                        <BsFillPlayCircleFill className='text-danger fs-4' />
                                        <h2 className='fs-6'>Play Trailer</h2>
                                    </div>
                                </div>
                                <div className='text-center w-100'>
                                    <Button onClick={handleBackClick} variant="outline-info">Back a step</Button>
                                </div>

                            </div>


                            <Modal show={show} onHide={handleClose}>
                                <Modal.Body variant="dark" className='bg-dark text-light'>
                                    {videoData.length > 0 ? (
                                        <iframe width="465" height="400" src={`https://www.youtube.com/embed/${videoData[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                    ) : (
                                        <p>
                                            {dataDetailsSeries && dataDetailsSeries.homepage !== "" ? (<a target='_blank' href={`${dataDetailsSeries && dataDetailsSeries.homepage}`}>Go to the Home Page</a>) : ("The video not found")}
                                        </p>
                                    )}
                                </Modal.Body>

                            </Modal>
                        </div>
                    </div>
                </div>
            )}

        </>

    )
}

export default BackgroundSeriesSectionOne

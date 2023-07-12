
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import Pagination from 'react-bootstrap/Pagination';
import { seriesPaginationFirst, seriesPaginationLast, seriesPaginationNext, seriesPaginationPrev } from '../ReduxSystem/BtnsPaginationSlice';
import Spinner from 'react-bootstrap/Spinner';
import { FiftySeries } from '../ReduxSystem/PageSeriesSlice';
import Skeleton from '@mui/material/Skeleton';
import ShowMore from 'react-show-more';
import { CreditsSeries, DetailsSeries } from '../ReduxSystem/DetailsSeriesSlice';
import { useNavigate } from "react-router-dom"


const Series = () => {

  const dispatch = useDispatch()
  const { dataFiftySeries, loading } = useSelector(state => state.PageSeries)
  const { seriesBtnsNumber } = useSelector(state => state.BtnsPagination)
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(FiftySeries(seriesBtnsNumber))
  }, [seriesBtnsNumber])


  const handleDetails = (fiftySeries) => {
    dispatch(DetailsSeries(fiftySeries.id))
    dispatch(CreditsSeries(fiftySeries.id))
    navigate(`/detailsSeriesPage/${fiftySeries.id} - ${fiftySeries.name}`)
  }


  return (
    <div>
      <div className='container'>

        <div className='text-center mt-5 mb-5'>
          <h2>SERIES</h2>
          <h2>PAGE NUMBER <span className='text-info'>{seriesBtnsNumber}</span> FROM <span className='text-info'>500</span></h2>
        </div>

        {loading === true ? (
          <div className='loadDetails d-flex justify-content-center align-items-center'>
            <span className="loader"></span>
          </div>
        ) : (
          <div className='d-flex justify-content-center align-items-center flex-wrap'>
            {dataFiftySeries.map((fiftySeries, index) => (
              <Card variant="dark" key={index} style={{ width: '18rem' }} className='me-4 bg-dark'>
                {fiftySeries.poster_path ? (
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${fiftySeries.poster_path}`} />

                ) : (
                  <Skeleton variant="rectangular" width={290} height={435} />

                )}
                <Card.Body className='text-light'>
                  <Card.Title className='text-light'>TAITLE : {fiftySeries.name}</Card.Title>
                  <ShowMore
                    lines={1}
                    more='Show more'
                    less='Show less'
                    anchorClass='text-info'
                  >
                    <Card.Title className='text-light'>OVERVIEW : {fiftySeries.overview}</Card.Title>
                  </ShowMore>
                  <div className='text-light'>
                    <div className='d-flex justify-content-between align-items-start'>
                      <div className='pt-1'>
                        RATE : <span className='text-info'>{fiftySeries.vote_average}</span>
                      </div>
                      <div >
                        <StarRatings
                          rating={fiftySeries.vote_average / 2}
                          starRatedColor="gold"
                          numberOfStars={5}
                          name='rating'
                          starDimension="20px"
                          starSpacing="3px"
                        />
                      </div>

                    </div>
                  </div>
                  <div className='text-center'>
                    <Button variant="outline-info" onClick={() => handleDetails(fiftySeries)}>DETAILS</Button>

                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
        <div className='m-5 d-flex justify-content-center align-items-center'>
          <Pagination>
            <Pagination.First onClick={() => dispatch(seriesPaginationFirst())} disabled={seriesBtnsNumber === 1} />
            <Pagination.Prev onClick={() => dispatch(seriesPaginationPrev())} disabled={seriesBtnsNumber === 1} />

            <Pagination.Item>{seriesBtnsNumber}</Pagination.Item>

            <Pagination.Next onClick={() => dispatch(seriesPaginationNext())} disabled={seriesBtnsNumber === 500} />
            <Pagination.Last onClick={() => dispatch(seriesPaginationLast())} disabled={seriesBtnsNumber === 500} />
          </Pagination>
        </div>


      </div>
    </div >
  )
}

export default Series
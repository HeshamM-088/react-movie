import React from 'react'
import Controls from './pagesHome/Controls'
import MoviesHome from './pagesHome/MoviesHome'
import SeriesHome from './pagesHome/SeriesHome'
import TopMovies from './pagesHome/TopMovies'
import TopSeries from './pagesHome/TopSeries'

const Home = () => {

  return (
    <div>
      <div className='text-center text-info mt-4'><h1>Home</h1></div>
      <Controls />
      <MoviesHome />
      <SeriesHome />
      <TopMovies />
      <TopSeries />
    </div>
  )
}

export default Home
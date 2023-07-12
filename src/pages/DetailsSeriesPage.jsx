import React from 'react'
import BackgroundSeriesSectionOne from './pagesDetailsSeries/BackgroundSeriesSectionOne'
import SectionTwoDetailsActingS from './pagesDetailsSeries/SectionTwoDetailsActingS'
import SectionThreeDetailsS from './pagesDetailsSeries/SectionThreeDetailsS'
import SectionTwoDetailsTabsReviewS from './pagesDetailsSeries/SectionTwoDetailsTabsReviewS'
import SectionTwoDetailsTabsMediaS from './pagesDetailsSeries/SectionTwoDetailsTabsMediaS'
import SectionTwoDetailsRecommendationsS from './pagesDetailsSeries/SectionTwoDetailsRecommendationsS'
import SectionTwoSeasonS from './pagesDetailsSeries/SectionTwoSeasonS'

const DetailsSeriesPage = () => {
  return (
    <div>
        <BackgroundSeriesSectionOne/>
        <section className='row flex-column flex-lg-row align-items-center align-items-lg-start '>
            <div className='col-12 col-sm-11 col-md-11 col-lg-9'>
            <SectionTwoDetailsActingS/>
            <SectionTwoSeasonS/>
            <SectionTwoDetailsTabsReviewS/>
            <SectionTwoDetailsTabsMediaS/>
            <SectionTwoDetailsRecommendationsS/>
            </div>
            <div className='col-12 col-sm-11 col-md-11 col-lg-3'>
            <SectionThreeDetailsS/>
            </div>
          </section>
    </div>
  )
}

export default DetailsSeriesPage
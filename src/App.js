import React from "react";
import Header from "./componants/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import DetailsMoviesPage from "./pages/DetailsMoviesPage";
import DetailsSeriesPage from "./pages/DetailsSeriesPage";
import Footer from "./componants/Footer";
import MovieDetailsCastAndCrew from "./pages/pagesDelailsMovies/MovieDetailsCastAndCrew";
import PersonDetails from "./pages/pagesDelailsMovies/PersonDetails";
import ReviewPage from "./pages/pagesDelailsMovies/ReviewPage";
import VideoPage from "./pages/pagesDelailsMovies/VideoPage";
import ImagesBackdropsPage from "./pages/pagesDelailsMovies/ImagesBackdropsPage";
import ImagesPostersPage from "./pages/pagesDelailsMovies/ImagesPostersPage";
import CollectionPage from "./pages/pagesDelailsMovies/CollectionPage";
import PersonSeriesDetails from "./pages/pagesDetailsSeries/PersonSeriesDetails";
import SeriesDetailsCastAndCrew from "./pages/pagesDetailsSeries/SeriesDetailsCastAndCrew";
import ReviewSeriesPage from "./pages/pagesDetailsSeries/ReviewSeriesPage";
import VideoPageSeries from "./pages/pagesDetailsSeries/VideoPageSeries";
import ImagesBackdropsPageSeries from "./pages/pagesDetailsSeries/ImagesBackdropsPageSeries";
import ImagesPostersPageSeries from "./pages/pagesDetailsSeries/ImagesPostersPageSeries";
import SeasonPageS from "./pages/pagesDetailsSeries/SeasonPageS";
import SeasonPageOfSeries from "./pages/pagesDetailsSeries/SeasonPageOfSeries";
import PageCreditsEpisodeOfSeasonSeries from "./pages/pagesDetailsSeries/PageCreditsEpisodeOfSeasonSeries";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detailsMoviesPage/:id" element={<DetailsMoviesPage />} />
        <Route path="/detailsSeriesPage/:id" element={<DetailsSeriesPage />} />
        <Route path="/detailsCastAndCrew/:id" element={<MovieDetailsCastAndCrew />} />
        <Route path="/personDetails/:id" element={<PersonDetails />} />
        <Route path="/reviewAll/:id" element={<ReviewPage />} />
        <Route path="/videoPage/:id" element={<VideoPage />} />
        <Route path="/imagesbackdropspage/:id" element={<ImagesBackdropsPage />} />
        <Route path="/imagesposterspage/:id" element={<ImagesPostersPage />} />
        <Route path="/collectionpage/:id" element={<CollectionPage />} />


        <Route path="/personseriesdetails/:id" element={<PersonSeriesDetails />} />
        <Route path="/seriesdetailscastandcrew/:id" element={<SeriesDetailsCastAndCrew />} />
        <Route path="/reviewseriespage/:id" element={<ReviewSeriesPage />} />
        <Route path="/videopageseries/:id" element={<VideoPageSeries />} />
        <Route path="/imagesbackdropspageseries/:id" element={<ImagesBackdropsPageSeries />} />
        <Route path="/imagesposterspageseries/:id" element={<ImagesPostersPageSeries />} />
        <Route path="/seasonspage/:id" element={<SeasonPageS />} />
        <Route path="/seasonpageofseries/:id" element={<SeasonPageOfSeries />} />
        <Route path="/tv/:seriesId/season/:seasonNumber/episode/:episodeNumber" element={<PageCreditsEpisodeOfSeasonSeries />} />





        <Route path="/*" element={<PageNotFound />} />
      </Routes>    


      <Footer />
    </>
  );
}

export default App;

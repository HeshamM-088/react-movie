import { configureStore } from "@reduxjs/toolkit";
import { movieData } from "./GetMovieSlice";
import { PageMovies } from "./PageMoviesSlice";
import { BtnsPagination } from "./BtnsPaginationSlice";
import { PageSeries } from "./PageSeriesSlice";
import { DetailsForMovies } from "./DetailsMoviesSlice";
import { DetailsForSeries } from "./DetailsSeriesSlice";
import { search } from "./SearchSlice";
import { PeopleDetails } from "./PeopleDetailsSlice";
import { KeyWordsMovies } from "./GetKeyWordsMoviesSlice";
import { ReviewsMovies } from "./ReviewsMoviesSlice";
import { CollectionMovies } from "./DetailsCollectionMoviesSlice";
import { RecommendationsMovies } from "./DetailsRecommendationsMoviesSlice";
import { KeyWordsSeries } from "./GetKeyWordsSeriesSlice";
import { ReviewsSeries } from "./ReviewSeriesSlice";
import { RecommendationsSeries } from "./DetailsRecommendationsSeriesSlice";
import { TvSeasonDetails } from "./TvSeasonsDetailsSlice";
import { CreditsEpisodeOfSeasonSeries } from "./CreditsEpisodeOfSeasonSeriesSlice";
import { DetailsTvEpisode } from "./DetailsTvEpisodeSlice";

const store = configureStore({
    reducer : {
        movieData,
        PageMovies,
        BtnsPagination,
        PageSeries,
        DetailsForMovies,
        DetailsForSeries,
        search,
        PeopleDetails,
        KeyWordsMovies,
        ReviewsMovies,
        CollectionMovies,
        RecommendationsMovies,
        

        KeyWordsSeries,
        ReviewsSeries,
        RecommendationsSeries,
        TvSeasonDetails,
        CreditsEpisodeOfSeasonSeries,
        DetailsTvEpisode,
    }
})

export default store
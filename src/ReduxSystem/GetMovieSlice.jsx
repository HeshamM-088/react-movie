import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const GetMovies = createAsyncThunk("GetMovies", async (id, ThunkAPI)=>{
const {rejectWithValue} = ThunkAPI

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc'
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM4YzY4M2RkYTdhNzgyOWJiOGMzMTJmZTIxZWY5NSIsInN1YiI6IjY0ODM3MDE3OTkyNTljMDBhY2NjMTVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53x9qOJAkbt20QC3Ll1qPTnJTPiS9KGSwGsjXt7J0Qc'
    }
  };
  
  try{
    const response = await axios(options)
    return response.data.results
  }catch(err){
    return rejectWithValue(err)
  }

})

export const GetSeries = createAsyncThunk("GetSeries", async (id, ThunkAPI)=>{
const {rejectWithValue} = ThunkAPI

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/tv',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc'
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM4YzY4M2RkYTdhNzgyOWJiOGMzMTJmZTIxZWY5NSIsInN1YiI6IjY0ODM3MDE3OTkyNTljMDBhY2NjMTVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53x9qOJAkbt20QC3Ll1qPTnJTPiS9KGSwGsjXt7J0Qc'
    }
  };
  
  try{
    const response = await axios(options)
    return response.data.results
  }catch(err){
    return rejectWithValue(err)
  }

})


const MoviesSlice = createSlice({
    name : "GetMoviesSlice",
    initialState: {
        loading : false,
        erorr : null ,
        dataMovies : [],
        dataSeries : [],
        topMovies : [],
        topSeries : [],
    },
    extraReducers : (bilder)=>{
        bilder.addCase(GetMovies.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(GetMovies.fulfilled,(state, action)=>{
            state.loading = false
            state.dataMovies = action.payload

            state.topMovies = action.payload.filter((movie)=>{
                return movie.vote_average > 7 && movie
            })

        })
        bilder.addCase(GetMovies.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })


        // getSeries 

        bilder.addCase(GetSeries.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(GetSeries.fulfilled,(state, action)=>{
            state.loading = false
            state.dataSeries = action.payload

            state.topSeries = action.payload.filter((series)=>{
                return series.vote_average > 5 && series
            })

        })
        bilder.addCase(GetSeries.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })


    }
})

export const movieData = MoviesSlice.reducer
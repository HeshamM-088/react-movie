import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const FiftyMovies = createAsyncThunk("GetMovies", async (id = 1, ThunkAPI)=>{
const {rejectWithValue} = ThunkAPI

const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie`,
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: `${id}`,
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

const PageMoviesSlice = createSlice({
    name : "PageMoviesSlice",
    initialState: {
        loading : false,
        erorr : null ,
        dataFiftyMovies : []
    },
    extraReducers : (bilder)=>{
        bilder.addCase(FiftyMovies.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(FiftyMovies.fulfilled,(state, action)=>{
            state.loading = false
            state.dataFiftyMovies = action.payload
        })
        bilder.addCase(FiftyMovies.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })
    }
})

export const PageMovies = PageMoviesSlice.reducer
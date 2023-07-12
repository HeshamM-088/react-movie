// GetKeyWordsMoviesSlice
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';


export const GetTvSeasonDetails = createAsyncThunk("GetTvSeasonDetails", async (season, ThunkAPI)=>{
  const {rejectWithValue} = ThunkAPI
  const {seriesId, seasonNumber} = season
  

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}`,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM4YzY4M2RkYTdhNzgyOWJiOGMzMTJmZTIxZWY5NSIsInN1YiI6IjY0ODM3MDE3OTkyNTljMDBhY2NjMTVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53x9qOJAkbt20QC3Ll1qPTnJTPiS9KGSwGsjXt7J0Qc'
    }
  };
    
    
    try{
      const response = await axios(options)
      
     
      return response.data
    }catch(err){
      return rejectWithValue(err)
    }
  
  })

const TvSeasonDetailsSlice = createSlice({
    name : "TvSeasonDetailsSlice",
    initialState: {
        loading : false,
        erorr : null ,
        dataTvSeasonDetails : {},
        airDate : null,
        episodes : [],
        

    },
    extraReducers : (bilder)=>{
        // Get TV Season Details
        bilder.addCase(GetTvSeasonDetails.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(GetTvSeasonDetails.fulfilled,(state, action)=>{
            state.loading = false
            state.dataTvSeasonDetails = action.payload
            state.airDate = action.payload.air_date
            state.episodes = action.payload.episodes
        })
        bilder.addCase(GetTvSeasonDetails.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })
    }
})

export const TvSeasonDetails = TvSeasonDetailsSlice.reducer
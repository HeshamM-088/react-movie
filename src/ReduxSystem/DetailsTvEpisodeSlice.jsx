// GetKeyWordsMoviesSlice
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';


export const GetDetailsTvEpisode = createAsyncThunk("GetDetailsTvEpisode", async (season, ThunkAPI)=>{
  const {rejectWithValue} = ThunkAPI
  const {seriesId, seasonNumber, episodeNumber} = season
  

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}`,
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


export const GetDetailsTvEpisodeImages = createAsyncThunk("GetDetailsTvEpisodeImages", async (season, ThunkAPI)=>{
  const {rejectWithValue} = ThunkAPI
  const {seriesId, seasonNumber, episodeNumber} = season
  
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/images`,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM4YzY4M2RkYTdhNzgyOWJiOGMzMTJmZTIxZWY5NSIsInN1YiI6IjY0ODM3MDE3OTkyNTljMDBhY2NjMTVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53x9qOJAkbt20QC3Ll1qPTnJTPiS9KGSwGsjXt7J0Qc'
    }
  };
    
    
    try{
      const response = await axios(options)
      return response.data.stills
    }catch(err){
      return rejectWithValue(err)
    }
  
  })

const DetailsTvEpisodeSlice = createSlice({
    name : "DetailsTvEpisodeSlice",
    initialState: {
        loading : false,
        erorr : null ,
        dataDetailsTvEpisode : {},
        dataDetailsTvEpisodeImages : []

        

    },
    extraReducers : (bilder)=>{
        // Get Details Tv Episode
        bilder.addCase(GetDetailsTvEpisode.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(GetDetailsTvEpisode.fulfilled,(state, action)=>{
            state.loading = false
            state.dataDetailsTvEpisode = action.payload
        })
        bilder.addCase(GetDetailsTvEpisode.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })

        // Get Details Tv Episode Images
        bilder.addCase(GetDetailsTvEpisodeImages.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(GetDetailsTvEpisodeImages.fulfilled,(state, action)=>{
            state.loading = false
            state.dataDetailsTvEpisodeImages = action.payload
        })
        bilder.addCase(GetDetailsTvEpisodeImages.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })
    }
})

export const DetailsTvEpisode = DetailsTvEpisodeSlice.reducer
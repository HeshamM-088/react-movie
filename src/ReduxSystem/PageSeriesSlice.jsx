import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const FiftySeries = createAsyncThunk("FiftySeries", async (id = 1, ThunkAPI)=>{
const {rejectWithValue} = ThunkAPI

const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/discover/tv`,
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

const PageSeriesSlice = createSlice({
    name : "PageMoviesSlice",
    initialState: {
        loading : false,
        erorr : null ,
        dataFiftySeries : []
    },
    extraReducers : (bilder)=>{
        bilder.addCase(FiftySeries.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(FiftySeries.fulfilled,(state, action)=>{
            state.loading = false
            state.dataFiftySeries = action.payload
        })
        bilder.addCase(FiftySeries.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })
    }
})

export const PageSeries = PageSeriesSlice.reducer
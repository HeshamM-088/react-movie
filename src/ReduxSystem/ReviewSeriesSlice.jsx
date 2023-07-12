// GetKeyWordsMoviesSlice
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';


export const GetReviewsSeries = createAsyncThunk("GetReviewsMovies", async (id, ThunkAPI)=>{
  const {rejectWithValue} = ThunkAPI
  
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${id}/reviews`,
    params: {language: 'en-US', page: '1'},
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

const ReviewsSeriesSlice = createSlice({
    name : "ReviewsMoviesSlice",
    initialState: {
        loading : false,
        erorr : null ,
        dataReviewsSeries : []
        

    },
    extraReducers : (bilder)=>{
        // Get Reviews Series
        bilder.addCase(GetReviewsSeries.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(GetReviewsSeries.fulfilled,(state, action)=>{
            state.loading = false
            state.dataReviewsSeries = action.payload
        })
        bilder.addCase(GetReviewsSeries.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })
    }
})

export const ReviewsSeries = ReviewsSeriesSlice.reducer
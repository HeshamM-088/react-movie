import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const DetailsRecommendationsMovies = createAsyncThunk("DetailsRecommendationsMovies", async (id, ThunkAPI)=>{
const {rejectWithValue} = ThunkAPI

const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/recommendations`,
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


const DetailsRecommendationsMoviesSlice = createSlice({
    name : "DetailsRecommendationsMoviesSlice",
    initialState: {
        loading : false,
        erorr : null ,
        dataRecommendationsMovies : [],
    },
    extraReducers : (bilder)=>{
        // Function Collection 
        bilder.addCase(DetailsRecommendationsMovies.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(DetailsRecommendationsMovies.fulfilled,(state, action)=>{
            state.loading = false
            state.dataRecommendationsMovies = action.payload.filter((recommend) => recommend.poster_path !== null)


        })
        bilder.addCase(DetailsRecommendationsMovies.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })


    }
})

export const RecommendationsMovies = DetailsRecommendationsMoviesSlice.reducer
// GetKeyWordsMoviesSlice
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';


export const GetKeyWordsMovies = createAsyncThunk("GetKeyWordsMovies", async (id, ThunkAPI)=>{
  const {rejectWithValue} = ThunkAPI
  
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/keywords`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM4YzY4M2RkYTdhNzgyOWJiOGMzMTJmZTIxZWY5NSIsInN1YiI6IjY0ODM3MDE3OTkyNTljMDBhY2NjMTVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53x9qOJAkbt20QC3Ll1qPTnJTPiS9KGSwGsjXt7J0Qc'
    }
  };
    
    
    try{
      const response = await axios(options)
      
      return response.data.keywords
    }catch(err){
      return rejectWithValue(err)
    }
  
  })

const GetKeyWordsMoviesSlice = createSlice({
    name : "GetKeyWordsMoviesSlice",
    initialState: {
        loading : false,
        erorr : null ,
        keyWordsMovie : []
        

    },
    extraReducers : (bilder)=>{
        // get External IDS for Movie
        bilder.addCase(GetKeyWordsMovies.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(GetKeyWordsMovies.fulfilled,(state, action)=>{
            state.loading = false
            state.keyWordsMovie = action.payload
        })
        bilder.addCase(GetKeyWordsMovies.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })
    }
})

export const KeyWordsMovies = GetKeyWordsMoviesSlice.reducer
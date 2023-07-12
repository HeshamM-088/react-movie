import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const DetailsCollectionMovies = createAsyncThunk("DetailsCollectionMovies", async (id, ThunkAPI)=>{
const {rejectWithValue} = ThunkAPI

const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/collection/${id}`,
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


const DetailsCollectionMoviesSlice = createSlice({
    name : "DetailsCollectionMoviesSlice",
    initialState: {
        loading : false,
        erorr : null ,
        dataCollectionMovies : [],
    },
    extraReducers : (bilder)=>{
        // Function Collection 
        bilder.addCase(DetailsCollectionMovies.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(DetailsCollectionMovies.fulfilled,(state, action)=>{
            state.loading = false
            state.dataCollectionMovies = action.payload

        })
        bilder.addCase(DetailsCollectionMovies.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })


    }
})

export const CollectionMovies = DetailsCollectionMoviesSlice.reducer
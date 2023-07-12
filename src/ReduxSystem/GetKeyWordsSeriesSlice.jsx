// GetKeyWordsMoviesSlice
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';


export const GetKeyWordsSeries = createAsyncThunk("GetKeyWordsSeries", async (id, ThunkAPI)=>{
  const {rejectWithValue} = ThunkAPI
  
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${id}/keywords`,
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

const GetKeyWordsSeriesSlice = createSlice({
    name : "GetKeyWordsSeriesSlice",
    initialState: {
        loading : false,
        erorr : null ,
        keyWordsSeries : []
        

    },
    extraReducers : (bilder)=>{
        // get External IDS for Movie
        bilder.addCase(GetKeyWordsSeries.pending,(state)=>{
            state.loading = true
        })
        bilder.addCase(GetKeyWordsSeries.fulfilled,(state, action)=>{
            state.loading = false
            state.keyWordsSeries = action.payload
        })
        bilder.addCase(GetKeyWordsSeries.rejected,(state, action)=>{
            state.loading = false
            state.erorr = action.payload.message
        })
    }
})

export const KeyWordsSeries = GetKeyWordsSeriesSlice.reducer
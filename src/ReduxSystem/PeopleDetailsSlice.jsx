import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailsActorKnownFor = createAsyncThunk("getDetailsActorKnownFor", async(id , ThunkAPI)=>{
    const {rejectWithValue} = ThunkAPI

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/person',
        params: {
          query: id,
          include_adult: 'false',
          language: 'en-US',
          page: '1'
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
        rejectWithValue(err)
      }
      

})


export const getDetailsActor = createAsyncThunk("getDetailsActor", async(id , ThunkAPI)=>{
    const {rejectWithValue} = ThunkAPI

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/person/${id}`,
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
        rejectWithValue(err)
      }
      

})


export const getDetailsActorExternalIDS = createAsyncThunk("getDetailsActorExternalIDS", async(id , ThunkAPI)=>{
    const {rejectWithValue} = ThunkAPI

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/person/${id}/external_ids`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM4YzY4M2RkYTdhNzgyOWJiOGMzMTJmZTIxZWY5NSIsInN1YiI6IjY0ODM3MDE3OTkyNTljMDBhY2NjMTVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53x9qOJAkbt20QC3Ll1qPTnJTPiS9KGSwGsjXt7J0Qc'
        }
      };


      try{
        const response = await axios(options)
        return response.data
      }catch(err){
        rejectWithValue(err)
      }
      

})


const PeopleDetailsSlice = createSlice({
    name : "PeopleDetailsSlice",
    initialState : {
        loading: false,
        error : null,
        dataActorKnownFor : [],
        dataActor: null,
        dataExternalIDS: null,
        
    },  
    reducers: {},
    extraReducers : (bilder)=>{

        // get data Actor Known For
        bilder.addCase(getDetailsActorKnownFor.pending, (state)=>{
            state.loading = true
        })
        bilder.addCase(getDetailsActorKnownFor.fulfilled, (state, action)=>{
            state.loading = false
            state.dataActorKnownFor = action.payload.flatMap(item => item.known_for);
          })
        bilder.addCase(getDetailsActorKnownFor.rejected, (state, action)=>{
            state.loading = false
            state.error(action.message)

        })


        // get data Actor
        bilder.addCase(getDetailsActor.pending, (state)=>{
            state.loading = true
        })
        bilder.addCase(getDetailsActor.fulfilled, (state, action)=>{
            state.loading = false
            state.dataActor = action.payload
        })
        bilder.addCase(getDetailsActor.rejected, (state, action)=>{
            state.loading = false
            state.error(action.message)

        })

        // get data ExternalIDS
        bilder.addCase(getDetailsActorExternalIDS.pending, (state)=>{
            state.loading = true
        })
        bilder.addCase(getDetailsActorExternalIDS.fulfilled, (state, action)=>{
            state.loading = false
            state.dataExternalIDS = action.payload
        })
        bilder.addCase(getDetailsActorExternalIDS.rejected, (state, action)=>{
            state.loading = false
            state.error(action.message)

        })
    },
})


export const PeopleDetails = PeopleDetailsSlice.reducer
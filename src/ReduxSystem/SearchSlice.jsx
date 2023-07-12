import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const SearchFunction = createAsyncThunk("SearchFunction", async (value, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI

    if (value === "") {
        return []
    } else {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: { query: `${value}`, include_adult: 'false', language: 'en-US', page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM4YzY4M2RkYTdhNzgyOWJiOGMzMTJmZTIxZWY5NSIsInN1YiI6IjY0ODM3MDE3OTkyNTljMDBhY2NjMTVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53x9qOJAkbt20QC3Ll1qPTnJTPiS9KGSwGsjXt7J0Qc'
            }
        };

        try {
            const response = await axios(options)
            return response.data.results
        } catch (err) {
            return rejectWithValue(err)
        }
    }



})

export const SearchFunctionWithSeries = createAsyncThunk("SearchFunctionWithSeries", async (value, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI

    if (value === "") {
        return []
    } else {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/tv',
            params: {query: `${value}` , include_adult: 'false', language: 'en-US', page: '1'},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM4YzY4M2RkYTdhNzgyOWJiOGMzMTJmZTIxZWY5NSIsInN1YiI6IjY0ODM3MDE3OTkyNTljMDBhY2NjMTVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53x9qOJAkbt20QC3Ll1qPTnJTPiS9KGSwGsjXt7J0Qc'
            }
          };

        try {
            const response = await axios(options)
            return response.data.results
        } catch (err) {
            return rejectWithValue(err)
        }
    }



})

const SearchSlice = createSlice({
    name: "SearchSlice",
    initialState: {
        loading: false,
        erorr: null,
        dataSearch: [],
        dataSearchWithSeries: [],
    },
    reducers: {
        defaultValueMovies : (state, action)=>{
            state.dataSearch = []
        },
        defaultValueSeries : (state, action)=>{
            state.dataSearchWithSeries = []
        },
    },
    extraReducers: (bilder) => {
        bilder.addCase(SearchFunction.pending, (state) => {
            state.loading = true
        })
        bilder.addCase(SearchFunction.fulfilled, (state, action) => {
            state.loading = false
            state.dataSearch = action.payload.map((data) => {
                data.title.toLowerCase()
                return data
            })
        })
        bilder.addCase(SearchFunction.rejected, (state, action) => {
            state.loading = false
            state.erorr = action.payload.message
        })

        //SearchFunctionWithSeries
        bilder.addCase(SearchFunctionWithSeries.pending, (state) => {
            state.loading = true
        })
        bilder.addCase(SearchFunctionWithSeries.fulfilled, (state, action) => {
            state.loading = false
            state.dataSearchWithSeries = action.payload.map((data) => {
                data.name.toLowerCase()
                return data
            })
        })
        bilder.addCase(SearchFunctionWithSeries.rejected, (state, action) => {
            state.loading = false
            state.erorr = action.payload.message
        })
    }
})

export const {defaultValueMovies, defaultValueSeries} = SearchSlice.actions
export const search = SearchSlice.reducer
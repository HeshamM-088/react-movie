import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const BtnsPaginationSlice = createSlice({
    name : "BtnsPaginationSlice",
    initialState : {
        moviesBtnsNumber : 1,
        seriesBtnsNumber : 1,

    },
    reducers : {
        moviesPaginationFirst : (state, action)=>{
            state.moviesBtnsNumber = 1 
        },
        moviesPaginationPrev : (state, action)=>{
            state.moviesBtnsNumber -= 1 
        },
        moviesPaginationNext : (state, action)=>{
            state.moviesBtnsNumber += 1 
        },
        moviesPaginationLast : (state, action)=>{
            state.moviesBtnsNumber = 500
        },


        seriesPaginationFirst : (state, action)=>{
            state.seriesBtnsNumber = 1 
        },
        seriesPaginationPrev : (state, action)=>{
            state.seriesBtnsNumber -= 1 
        },
        seriesPaginationNext : (state, action)=>{
            state.seriesBtnsNumber += 1 
        },
        seriesPaginationLast : (state, action)=>{
            state.seriesBtnsNumber = 500
        },
    }
})

export const {
    moviesPaginationFirst,
    moviesPaginationPrev,
    moviesPaginationNext,
    moviesPaginationLast,
    //
    seriesPaginationFirst,
    seriesPaginationPrev,
    seriesPaginationNext,
    seriesPaginationLast,

} = BtnsPaginationSlice.actions
export const BtnsPagination = BtnsPaginationSlice.reducer
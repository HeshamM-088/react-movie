// GetKeyWordsMoviesSlice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const GetCreditsEpisodeOfSeasonSeries = createAsyncThunk("GetCreditsEpisodeOfSeasonSeries", async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI

    const { seriesId, seasonNumber, episodeNumber } = id


    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/credits`,
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM4YzY4M2RkYTdhNzgyOWJiOGMzMTJmZTIxZWY5NSIsInN1YiI6IjY0ODM3MDE3OTkyNTljMDBhY2NjMTVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53x9qOJAkbt20QC3Ll1qPTnJTPiS9KGSwGsjXt7J0Qc'
        }
    };


    try {
        const response = await axios(options)

        return response.data
    } catch (err) {
        return rejectWithValue(err)
    }

})

const CreditsEpisodeOfSeasonSeriesSlice = createSlice({
    name: "CreditsEpisodeOfSeasonSeriesSlice",
    initialState: {
        loading: false,
        erorr: null,
        dataCreditsEpisodeOfSeasonSeries: {},
        dataCreditsEpisodeOfSeasonSeriesCast: [],
        dataCreditsEpisodeOfSeasonSeriesCrew: [],


        //فريق العمل فلترة
        artCrew: [],
        cameraCrew: [],
        writingCrew: [],
        crewCrew: [],
        directingCrew: [],
        editingCrew: [],
        lightingCrew: [],
        soundCrew: [],
        visualEffectsCrew: [],
        costumeMakeUp: [],


    },
    extraReducers: (bilder) => {
        // Credits Episode Of Season Series 
        bilder.addCase(GetCreditsEpisodeOfSeasonSeries.pending, (state) => {
            state.loading = true
        })
        bilder.addCase(GetCreditsEpisodeOfSeasonSeries.fulfilled, (state, action) => {
            state.loading = false
            state.dataCreditsEpisodeOfSeasonSeries = action.payload
            state.dataCreditsEpisodeOfSeasonSeriesCast = action.payload.cast
            state.dataCreditsEpisodeOfSeasonSeriesCrew = action.payload.crew



            //فلترة فريق العمل Crew
            function filterCrewByDepartment(crew, department) {
                return crew.filter((member) => member.known_for_department === department);
              }
              
              state.artCrew = filterCrewByDepartment(action.payload.crew, "Art");
              state.cameraCrew = filterCrewByDepartment(action.payload.crew, "Camera");
              state.writingCrew = filterCrewByDepartment(action.payload.crew, "Writing");
              state.crewCrew = filterCrewByDepartment(action.payload.crew, "Crew");
              state.directingCrew = filterCrewByDepartment(action.payload.crew, "Directing");
              state.editingCrew = filterCrewByDepartment(action.payload.crew, "Editing");
              state.lightingCrew = filterCrewByDepartment(action.payload.crew, "Lighting");
              state.soundCrew = filterCrewByDepartment(action.payload.crew, "Sound");
              state.visualEffectsCrew = filterCrewByDepartment(action.payload.crew, "Visual Effects");
              state.costumeMakeUp = filterCrewByDepartment(action.payload.crew, "Costume & Make-Up");
        
        
            })


        bilder.addCase(GetCreditsEpisodeOfSeasonSeries.rejected, (state, action) => {
            state.loading = false
            state.erorr = action.payload.message
        })
    }
})

export const CreditsEpisodeOfSeasonSeries = CreditsEpisodeOfSeasonSeriesSlice.reducer
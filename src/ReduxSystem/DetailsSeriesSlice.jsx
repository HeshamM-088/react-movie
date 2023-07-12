import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const DetailsSeries = createAsyncThunk("DetailsSeries", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${id}`,
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


export const CreditsSeries = createAsyncThunk("CreditsSeries", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${id}/credits`,
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


// videoKey
export const videoKeySeries = createAsyncThunk("videoKey", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${id}/videos`,
    params: { language: 'en-US' },
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

})


// Images
export const ImagesSeries = createAsyncThunk("ImagesSeries", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${id}/images`,
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


// getExternalIDSSeries
export const getExternalIDSSeries = createAsyncThunk("getExternalIDSSeries", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${id}/external_ids`,
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


// Get Watch Providers
export const getWatchProvidersSeries = createAsyncThunk("getWatchProvidersSeries", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${id}/watch/providers`,
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

})


const DetailsSeriesSlice = createSlice({
  name: "DetailsMoviesSlice",
  initialState: {
    loading: false,
    erorr: null,
    dataDetailsSeries: null,
    creditsData: [],
    directingData: [],
    actingData: [],
    actingDataCast: [],
    productionData: [],
    videoData: [],

    dataCast: [],
    dataCrew: [],

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

    //videoKey
    videoData: [],
    videoDataTrailer: [],
    videoDataTeaser: [],
    videoDataClip: [],
    videoDataFeaturette: [],
    videoDataBloopers: [],
    videoDataBehindtheScenes: [],




    //get ImagesSeries
    imagesbackdrops: [],
    imageslogos: [],
    imagesposters: [],
    //imagesbackdrops
    imagesBackdropsNoLanguage: [],
    imagesBackdropsLanguageEn: [],
    imagesBackdropsLanguagePt: [],
    imagesBackdropsLanguageFr: [],
    imagesBackdropsLanguageDe: [],
    imagesBackdropsLanguageIt: [],
    imagesBackdropsLanguageHu: [],
    //imagesposters
    imagesPostersNoLanguage: [],
    imagesPostersLanguageEn: [],
    imagesPostersLanguageSq: [],
    imagesPostersLanguageBg: [],
    imagesPostersLanguageZh: [],
    imagesPostersLanguageCs: [],
    imagesPostersLanguageDa: [],
    imagesPostersLanguageFr: [],
    imagesPostersLanguageDe: [],
    imagesPostersLanguageEl: [],
    imagesPostersLanguageHe: [],
    imagesPostersLanguageHu: [],
    imagesPostersLanguageIt: [],
    imagesPostersLanguageJa: [],
    imagesPostersLanguageKo: [],
    imagesPostersLanguageLv: [],
    imagesPostersLanguageLt: [],
    imagesPostersLanguageMk: [],
    imagesPostersLanguagePl: [],
    imagesPostersLanguagePt: [],
    imagesPostersLanguageRo: [],
    imagesPostersLanguageRu: [],
    imagesPostersLanguageSk: [],
    imagesPostersLanguageEs: [],
    imagesPostersLanguageSv: [],
    imagesPostersLanguageTh: [],
    imagesPostersLanguageTr: [],
    imagesPostersLanguageUk: [],
    imagesPostersLanguageVi: [],


    // uk: Ukrainian (أوكراني)
    // zh: Chinese (الصينية)
    // hu: Hungarian (الهنغارية)
    // pl: Polish (البولندية)
    // vi: Vietnamese (الفيتنامية)
    // es: Spanish (الإسبانية)
    // ru: Russian (الروسية)
    // cs: Czech (التشيكية)
    // bg: Bulgarian (البلغارية)
    // sk: Slovak (السلوفاكية)
    // th: Thai (التايلاندية)
    // tr: Turkish (التركية)
    // sv: Swedish (السويدية)
    // he: Hebrew (العبرية)
    // mk: Macedonian (المقدونية)
    // el: Greek (اليونانية)
    // ja: Japanese (اليابانية)
    // ko: Korean (الكورية)
    // lt: Lithuanian (الليتوانية)
    // it: Italian (الإيطالية)
    // lv: Latvian (اللاتفية)
    // ro: Romanian (الرومانية)
    // sq: Albanian (الألبانية)



    // getExternalIDSMovies
    dataExternalIDSSeries: [],


    // Get Watch Providers
    dataWatchProvidersSeries: [],

  },
  extraReducers: (bilder) => {
    bilder.addCase(DetailsSeries.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(DetailsSeries.fulfilled, (state, action) => {
      state.loading = false
      state.dataDetailsSeries = action.payload
    })
    bilder.addCase(DetailsSeries.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })

    //credits

    bilder.addCase(CreditsSeries.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(CreditsSeries.fulfilled, (state, action) => {
      state.loading = false
      state.creditsData = action.payload
      state.dataCast = action.payload.cast
      state.dataCrew = action.payload.crew

      state.directingData = action.payload.crew.filter((directing) => {
        return directing.known_for_department === "Directing" && directing
      })

      state.actingData = action.payload.crew.filter((acting) => {
        return acting.known_for_department === "Acting" && acting
      })
      state.actingDataCast = action.payload.cast.filter((acting) => {
        return acting.known_for_department === "Acting" && acting
      })

      state.productionData = action.payload.crew.filter((production) => {
        return production.known_for_department === "Production" && production
      })


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
    bilder.addCase(CreditsSeries.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })


    // Video Key
    bilder.addCase(videoKeySeries.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(videoKeySeries.fulfilled, (state, action) => {
      state.loading = false
      state.videoData = action.payload

      function filterVideoKeySeries(videoKey, dataType) {
        return videoKey.filter((video) => video.type === dataType);
      }

      state.videoDataTrailer = filterVideoKeySeries(action.payload, "Trailer")
      state.videoDataTeaser = filterVideoKeySeries(action.payload, "Teaser")
      state.videoDataClip = filterVideoKeySeries(action.payload, "Clip")
      state.videoDataFeaturette = filterVideoKeySeries(action.payload, "Featurette")
      state.videoDataBloopers = filterVideoKeySeries(action.payload, "Bloopers")
      state.videoDataBehindtheScenes = filterVideoKeySeries(action.payload, "Behind the Scenes")




    })
    bilder.addCase(videoKeySeries.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })



    // Get ImagesMovies
    bilder.addCase(ImagesSeries.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(ImagesSeries.fulfilled, (state, action) => {
      state.loading = false
      state.imagesbackdrops = action.payload.backdrops
      state.imageslogos = action.payload.logos
      state.imagesposters = action.payload.posters

      //imagesbackdrops
      state.imagesBackdropsNoLanguage = action.payload.backdrops.filter((noLanguage) => {
        return noLanguage.iso_639_1 === null && noLanguage
      })


      function filterImagesbackdrops(backdrop, lang) {
        return backdrop.filter((language) => language.iso_639_1 === lang);
      }

      state.imagesBackdropsLanguageEn = filterImagesbackdrops(action.payload.backdrops, "en")
      state.imagesBackdropsLanguagePt = filterImagesbackdrops(action.payload.backdrops, "pt")
      state.imagesBackdropsLanguageFr = filterImagesbackdrops(action.payload.backdrops, "fr")
      state.imagesBackdropsLanguageDe = filterImagesbackdrops(action.payload.backdrops, "de")
      state.imagesBackdropsLanguageIt = filterImagesbackdrops(action.payload.backdrops, "it")
      state.imagesBackdropsLanguageHu = filterImagesbackdrops(action.payload.backdrops, "hu")



      //imagesposters

      //  غير مستخدم حاول ان تختصر الاكواد بهذا الاوبجكت 
      const languages = {
        noLanguage: null,
        en: "English",
        sq: "Albanian",
        bg: "Bulgarian",
        zh: "Chinese",
        cs: "Czech",
        da: "Danish",
        fr: "French",
        de: "German",
        el: "Greek",
        he: "Hebrew",
        hu: "Hungarian",
        it: "Italian",
        ja: "Japanese",
        ko: "Korean",
        lv: "Latvian",
        lt: "Lithuanian",
        mk: "Macedonian",
        pl: "Polish",
        pt: "Portuguese",
        ro: "Romanian",
        ru: "Russian",
        sk: "Slovak",
        es: "Spanish",
        sv: "Swedish",
        th: "Thai",
        tr: "Turkish",
        uk: "Ukrainian",
        vi: "Vietnamese"
      };


      // تخزين نتائج التصفية في كائن واحد
      const imagesPosters = {};
      for (const languageCode in languages) {
        if (languageCode !== "noLanguage") {
          const filteredPosters = action.payload.posters.filter((poster) => {
            return poster.iso_639_1 === languageCode && poster;
          });
          imagesPosters[`imagesPostersLanguage${languageCode.toUpperCase()}`] = filteredPosters;
        } else {
          const filteredPosters = action.payload.posters.filter((poster) => {
            return poster.iso_639_1 === null && poster;
          });
          imagesPosters.imagesPostersNoLanguage = filteredPosters;
        }
      }

      // تعيين النتائج إلى الحالة state
      Object.assign(state, imagesPosters);

      for (const languageCode in imagesPosters) {
        switch (languageCode) {
          case "imagesPostersNoLanguage":
            state.imagesPostersNoLanguage = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageEN":
            state.imagesPostersLanguageEn = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageSQ":
            state.imagesPostersLanguageSq = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageBG":
            state.imagesPostersLanguageBg = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageZH":
            state.imagesPostersLanguageZh = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageCS":
            state.imagesPostersLanguageCs = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageDA":
            state.imagesPostersLanguageDa = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageFR":
            state.imagesPostersLanguageFr = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageDE":
            state.imagesPostersLanguageDe = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageEL":
            state.imagesPostersLanguageEl = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageHE":
            state.imagesPostersLanguageHe = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageHU":
            state.imagesPostersLanguageHu = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageIT":
            state.imagesPostersLanguageIt = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageJA":
            state.imagesPostersLanguageJa = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageKO":
            state.imagesPostersLanguageKo = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageLV":
            state.imagesPostersLanguageLv = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageLT":
            state.imagesPostersLanguageLt = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageMK":
            state.imagesPostersLanguageMk = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguagePL":
            state.imagesPostersLanguagePl = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguagePT":
            state.imagesPostersLanguagePt = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageRO":
            state.imagesPostersLanguageRo = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageRU":
            state.imagesPostersLanguageRu = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageSK":
            state.imagesPostersLanguageSk = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageES":
            state.imagesPostersLanguageEs = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageSV":
            state.imagesPostersLanguageSv = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageTH":
            state.imagesPostersLanguageTh = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageTR":
            state.imagesPostersLanguageTr = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageUK":
            state.imagesPostersLanguageUk = imagesPosters[languageCode];
            break;
          case "imagesPostersLanguageVI":
            state.imagesPostersLanguageVi = imagesPosters[languageCode];
            break;
          default:
            break;
        }
      }


    })
    bilder.addCase(ImagesSeries.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })

    // get External IDS for Series
    bilder.addCase(getExternalIDSSeries.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(getExternalIDSSeries.fulfilled, (state, action) => {
      state.loading = false
      state.dataExternalIDSSeries = action.payload
    })
    bilder.addCase(getExternalIDSSeries.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })



    // Get Watch Providers
    bilder.addCase(getWatchProvidersSeries.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(getWatchProvidersSeries.fulfilled, (state, action) => {
      state.loading = false
      state.dataWatchProvidersSeries = action.payload
    })
    bilder.addCase(getWatchProvidersSeries.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })

  }
})

export const DetailsForSeries = DetailsSeriesSlice.reducer
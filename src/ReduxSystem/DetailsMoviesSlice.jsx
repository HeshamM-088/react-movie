import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const DetailsMovies = createAsyncThunk("DetailsMovies", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
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


export const Credits = createAsyncThunk("Credits", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
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
export const videoKeyMovies = createAsyncThunk("videoKey", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/videos`,
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
export const ImagesMovies = createAsyncThunk("ImagesMovies", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/images`,
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


// getExternalIDSMovies
export const getExternalIDSMovies = createAsyncThunk("getExternalIDSMovies", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/external_ids`,
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

const DetailsMoviesSlice = createSlice({
  name: "DetailsMoviesSlice",
  initialState: {
    // loading
    loading: false,
    erorr: null,
    dataDetailsMovies: null,
    creditsData: [],
    directingData: [],
    actingDataCast: [],
    productionData: [],

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

    //get ImagesMovies
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
    dataExternalIDSMovies: [],

  },
  reducers: {
    returnCastAndCrewAndDataMovie: (state, action) => {

    }
  }

  ,
  extraReducers: (bilder) => {
    bilder.addCase(DetailsMovies.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(DetailsMovies.fulfilled, (state, action) => {
      state.loading = false
      state.dataDetailsMovies = action.payload
    })
    bilder.addCase(DetailsMovies.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })

    //credits
    bilder.addCase(Credits.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(Credits.fulfilled, (state, action) => {
      state.loading = false
      state.creditsData = action.payload.crew
      state.dataCast = action.payload.cast
      state.dataCrew = action.payload.crew

      state.directingData = action.payload.crew.filter((directing) => {
        return directing.known_for_department === "Directing" && directing
      })

      state.actingDataCast = action.payload.cast.filter((acting) => {
        return acting.known_for_department === "Acting" && acting
      })

      state.productionData = action.payload.crew.filter((production) => {
        return production.known_for_department === "Production" && production
      })


      //فلترة فريق العمل Crew
      state.artCrew = action.payload.crew.filter((art) => {
        return art.known_for_department === "Art" && art
      })
      state.cameraCrew = action.payload.crew.filter((camera) => {
        return camera.known_for_department === "Camera" && camera
      })
      state.writingCrew = action.payload.crew.filter((writing) => {
        return writing.known_for_department === "Writing" && writing
      })
      state.crewCrew = action.payload.crew.filter((crew) => {
        return crew.known_for_department === "Crew" && crew
      })
      state.directingCrew = action.payload.crew.filter((directing) => {
        return directing.known_for_department === "Directing" && directing
      })
      state.editingCrew = action.payload.crew.filter((editing) => {
        return editing.known_for_department === "Editing" && editing
      })
      state.lightingCrew = action.payload.crew.filter((lighting) => {
        return lighting.known_for_department === "Lighting" && lighting
      })
      state.soundCrew = action.payload.crew.filter((sound) => {
        return sound.known_for_department === "Sound" && sound
      })
      state.visualEffectsCrew = action.payload.crew.filter((visualEffects) => {
        return visualEffects.known_for_department === "Visual Effects" && visualEffects
      })
      state.costumeMakeUp = action.payload.crew.filter((costume) => {
        return costume.known_for_department === "Costume & Make-Up" && costume
      })
    })



    bilder.addCase(Credits.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })


    // Video Key
    bilder.addCase(videoKeyMovies.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(videoKeyMovies.fulfilled, (state, action) => {
      state.loading = false
      state.videoData = action.payload

      // videoDataTrailer
      state.videoDataTrailer = action.payload.filter((Trailer) => {
        return Trailer.type === "Trailer" && Trailer
      })

      //  videoDataTeaser
      state.videoDataTeaser = action.payload.filter((Teaser) => {
        return Teaser.type === "Teaser" && Teaser
      })

      //  videoDataClip
      state.videoDataClip = action.payload.filter((Clip) => {
        return Clip.type === "Clip" && Clip
      })

      //  videoDataFeaturette
      state.videoDataFeaturette = action.payload.filter((Featurette) => {
        return Featurette.type === "Featurette" && Featurette
      })

      //  videoDataBloopers
      state.videoDataBloopers = action.payload.filter((Bloopers) => {
        return Bloopers.type === "Bloopers" && Bloopers
      })

      //  videoDataBehindtheScenes
      state.videoDataBehindtheScenes = action.payload.filter((BTS) => {
        return BTS.type === "Behind the Scenes" && BTS
      })

    })
    bilder.addCase(videoKeyMovies.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })


    // Get ImagesMovies
    bilder.addCase(ImagesMovies.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(ImagesMovies.fulfilled, (state, action) => {
      state.loading = false
      state.imagesbackdrops = action.payload.backdrops
      state.imageslogos = action.payload.logos
      state.imagesposters = action.payload.posters

      //imagesbackdrops
      state.imagesBackdropsNoLanguage = action.payload.backdrops.filter((noLanguage) => {
        return noLanguage.iso_639_1 === null && noLanguage
      })
      state.imagesBackdropsLanguageEn = action.payload.backdrops.filter((en) => {
        return en.iso_639_1 === "en" && en
      })
      state.imagesBackdropsLanguagePt = action.payload.backdrops.filter((pt) => {
        return pt.iso_639_1 === "pt" && pt
      })
      state.imagesBackdropsLanguageFr = action.payload.backdrops.filter((fr) => {
        return fr.iso_639_1 === "fr" && fr
      })
      state.imagesBackdropsLanguageDe = action.payload.backdrops.filter((de) => {
        return de.iso_639_1 === "de" && de
      })
      state.imagesBackdropsLanguageIt = action.payload.backdrops.filter((it) => {
        return it.iso_639_1 === "it" && it
      })
      state.imagesBackdropsLanguageHu = action.payload.backdrops.filter((hu) => {
        return hu.iso_639_1 === "hu" && hu
      })

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
    bilder.addCase(ImagesMovies.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })



    // get External IDS for Movie
    bilder.addCase(getExternalIDSMovies.pending, (state) => {
      state.loading = true
    })
    bilder.addCase(getExternalIDSMovies.fulfilled, (state, action) => {
      state.loading = false
      state.dataExternalIDSMovies = action.payload
    })
    bilder.addCase(getExternalIDSMovies.rejected, (state, action) => {
      state.loading = false
      state.erorr = action.payload.message
    })
  }
})

export const { returnCastAndCrewAndDataMovie } = DetailsMoviesSlice.actions
export const DetailsForMovies = DetailsMoviesSlice.reducer
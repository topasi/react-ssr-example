import { createSlice } from '@reduxjs/toolkit'

import { httpGetMovies, httpGetMovieDetails } from './movies.action'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        loading: false,
        data: [],
        error: '',
    },
    extraReducers: (builder) => {
        builder.addCase(httpGetMovies.pending, (state) => {
            state.loading = true
        })
        builder.addCase(httpGetMovies.fulfilled, (state, actions) => {
            state.loading = false
            state.data = actions.payload
            state.error = ''
        })
        builder.addCase(httpGetMovies.rejected, (state, actions) => {
            state.loading = false
            state.data = []
            state.error = actions.error.message
        })
    },
})

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState: {
        loading: false,
        data: {},
        error: '',
    },
    extraReducers: (builder) => {
        builder.addCase(httpGetMovieDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(httpGetMovieDetails.fulfilled, (state, actions) => {
            state.loading = false
            state.data = actions.payload
            state.error = ''
        })
        builder.addCase(httpGetMovieDetails.rejected, (state, actions) => {
            state.loading = false
            state.data = []
            state.error = actions.error.message
        })
    },
})

export { moviesSlice, movieDetailsSlice }

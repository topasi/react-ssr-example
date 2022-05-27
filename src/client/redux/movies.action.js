import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const url = 'http://localhost:5000/themoviedb'

const httpGetMovies = createAsyncThunk('movies/httpGetMovies', async ({ page }) => {
    const response = await axios.get(`${url}?page=${page}`)
    return response.data
})

const httpGetMovieDetails = createAsyncThunk('movies/httpGetMoviedetails', async ({ id }) => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
})

export { httpGetMovies, httpGetMovieDetails }

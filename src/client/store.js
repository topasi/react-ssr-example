import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './redux/posts.reducer'
import { moviesSlice, movieDetailsSlice } from './redux/movies.reducer'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        movies: moviesSlice.reducer,
        movieDetails: movieDetailsSlice.reducer,
    },
})

export default store

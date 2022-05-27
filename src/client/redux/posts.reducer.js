import { createSlice } from '@reduxjs/toolkit'

import { httpGetPosts } from './posts.action'

const initialState = {
    loading: false,
    data: [],
    error: '',
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(httpGetPosts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(httpGetPosts.fulfilled, (state, actions) => {
            state.loading = false
            state.data = actions.payload
            state.error = ''
        })
        builder.addCase(httpGetPosts.rejected, (state) => {
            state.loading = false
            state.data = []
            state.error = actions.error.message
        })
    },
})

export default postsSlice.reducer

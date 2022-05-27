import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const httpGetPosts = createAsyncThunk('posts/httpGetPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
})

export { httpGetPosts }

import React from 'react'
import HomePage from './pages/home.page'
import MoviePage from './pages/movie.page'
import PostsPage from './pages/posts.page'

const router = {
    home: {
        path: '/',
    },
    moviePages: {
        path: '/movies/page/:page',
    },
    movieDetails: {
        path: '/movies/details/:id',
    },
    posts: {
        path: '/posts',
    },
}

const routes = [
    {
        path: router.home.path,
        exact: true,
        element: <HomePage.component />,
        loadData: (store, params) => {
            return HomePage.loadData(store, params)
        },
    },
    {
        path: router.moviePages.path,
        element: <HomePage.component />,
        loadData: (store, params) => {
            return HomePage.loadData(store, params)
        },
    },
    {
        path: router.movieDetails.path,
        element: <MoviePage.component />,
        loadData: (store, params) => {
            return MoviePage.loadData(store, params)
        },
    },
    {
        path: router.posts.path,
        element: <PostsPage.component />,
        loadData: (store, params) => {
            return PostsPage.loadData(store, params)
        },
    },
    {
        path: '*',
        element: <h1>404 Not Found</h1>,
    },
]

export { router, routes }

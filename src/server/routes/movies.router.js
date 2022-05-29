const { Router } = require('express')

const { httpGetMovies, httpGetMovieDetails } = require('./movies.controller')

const moviesRouter = Router()

moviesRouter.get('/', httpGetMovies)
moviesRouter.get('/:id', httpGetMovieDetails)

module.exports = {
    default: moviesRouter,
}

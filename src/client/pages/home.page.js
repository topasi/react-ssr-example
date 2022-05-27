import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { router } from '../router'
import { httpGetMovies } from '../redux/movies.action'

const HomePage = ({ movies, httpGetMovies }) => {
    const params = useParams()
    const { loading, data, error } = movies
    useEffect(() => {
        httpGetMovies(params)
    }, [])
    return (
        <>
            <h1>Home Page</h1>
            {loading && <div>Loading</div>}
            {!loading && error && <div>{error}</div>}
            {!loading &&
                data.length &&
                data.map((movie) => (
                    <div key={movie.id}>
                        <Link to={router.movieDetails.path.replace(':id', movie.id)}>
                            <h2>{movie.title}</h2>
                        </Link>
                        <div>{movie.overview}</div>
                    </div>
                ))}
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="home page" />
            </Helmet>
        </>
    )
}

const loadData = (store, params) => {
    return store.dispatch(httpGetMovies(params))
}

const mapToProps = (state) => {
    return {
        movies: state.movies,
    }
}

export default {
    component: connect(mapToProps, { httpGetMovies })(HomePage),
    loadData,
}

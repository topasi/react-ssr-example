import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { httpGetMovieDetails } from '../redux/movies.action'

const MoviePage = ({ movieDetails, httpGetMovieDetails }) => {
    const { loading, data, error } = movieDetails
    const params = useParams()
    useEffect(() => {
        httpGetMovieDetails(params)
    }, [])
    return (
        <>
            <h1>Movie Details Page</h1>
            {loading && <div>Loading</div>}
            {!loading && error && <div>{error}</div>}
            {!loading && data.id && (
                <>
                    <h2>{data.title}</h2>
                    <div>{data.overview}</div>
                </>
            )}
            <Helmet>
                <title>{data.title}</title>
                <meta name="description" content={data.overview} />
            </Helmet>
        </>
    )
}

const loadData = (store, params) => {
    return store.dispatch(httpGetMovieDetails(params))
}

const mapToProps = (state) => {
    return {
        movieDetails: state.movieDetails,
    }
}

export default {
    component: connect(mapToProps, { httpGetMovieDetails })(MoviePage),
    loadData,
}

const axios = require('axios')

const httpGetMovies = async (req, res) => {
    try {
        const page = req.query?.page || 1
        const { MOVIEDB_API_KEY } = process.env
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=${page}`)
        return res.json(response.data.results)
    } catch (err) {
        console.log(err)
        return res.sendStatus(400)
    }
}

const httpGetMovieDetails = async (req, res) => {
    try {
        const { id } = req.params
        const { MOVIEDB_API_KEY } = process.env
        if (id) {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIEDB_API_KEY}&language=en-US`)
            return res.json(response.data)
        } else {
            return res.sendStatus(404)
        }
    } catch (err) {
        return res.sendStatus(400)
    }
}

module.exports = { httpGetMovies, httpGetMovieDetails }

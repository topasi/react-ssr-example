const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const { matchRoutes } = require('react-router-dom')

const moviesRouter = require('./routes/movies.router').default
const { routes } = require('../client/router')
const renderer = require('./renderer').default
const store = require('../client/store').default

const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    next()
})

app.use('/themoviedb', moviesRouter)

app.use('*', async (req, res) => {
    const getRoutes = matchRoutes(routes, req.originalUrl)
    const promises = getRoutes
        ?.map(({ params, route }) => {
            return route.loadData ? route.loadData(store, params) : null
        })
        ?.map((promise) => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(reject)
                })
            }
        })
    Promise.all(promises)
        .then(() => {
            const html = renderer(req, store)
            if (getRoutes[0].route.path === '*') {
                res.status(404)
            }
            res.contentType('text/html')
            return res.send(html)
        })
        .catch((err) => {
            console.log(err)
            const html = renderer(req, store)
            res.status(404)
            res.contentType('text/html')
            return res.send(html)
        })
})

app.on('error', (err) => {
    console.log('Something went wrong', err)
})

app.listen(5000, () => {
    console.log('Listeing on port 5000')
})

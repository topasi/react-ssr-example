const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { StaticRouter } = require('react-router-dom/server')
const { Provider } = require('react-redux')
const { Helmet } = require('react-helmet')
const { HelmetProvider } = require('react-helmet-async')

const AppComponent = require('../client/components/app.component').default

export default function (req, store) {
    const rootHTML = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.originalUrl}>
                <HelmetProvider>
                    <AppComponent />
                </HelmetProvider>
            </StaticRouter>
        </Provider>
    )
    const helmet = Helmet.renderStatic()
    return `
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                ${helmet.meta.toString()}
                ${helmet.title.toString()}
                <link href="/build/styles.css" rel="stylesheet">
                ${helmet.link.toString()}
                ${helmet.script.toString()}
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                <div id="root">${rootHTML}</div>
            </body>
        </html>
    `
}

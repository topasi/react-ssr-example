import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'

import AppComponent from './components/app.component'

import store from './store'

const root = document.getElementById('root')

const container = (
    <ReduxProvider store={store}>
        <BrowserRouter>
            <HelmetProvider>
                <AppComponent />
            </HelmetProvider>
        </BrowserRouter>
    </ReduxProvider>
)

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
    createRoot(root).render(container)
} else {
    hydrateRoot(root, container)
}

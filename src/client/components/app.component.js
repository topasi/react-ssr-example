import React from 'react'
import { useRoutes, Link } from 'react-router-dom'

import { routes } from '../router'

import './app.component.scss'

const AppComponent = () => {
    const getRoutes = useRoutes(routes)
    return (
        <>
            <div>
                <Link to="/">Home</Link> <Link to="/posts">Posts</Link>
            </div>
            {getRoutes}
        </>
    )
}

export default AppComponent

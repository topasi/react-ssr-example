import React from 'react'

const ErrorComponent = ({ error }) => {
    return (
        <div role="alert">
            <p>An error occurred:</p>
            <pre>{error.message}</pre>
        </div>
    )
}

export default ErrorComponent

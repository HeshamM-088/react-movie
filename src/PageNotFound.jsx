import React from 'react'

const PageNotFound = () => {
    return (
        <div className='vh-100 text-light d-flex flex-column justify-content-center align-items-center'>
            <h2>
                Oops! We can't find the page you're looking for
            </h2>
            <p>You tried to request a page that doesn't exist.</p>
        </div>
    )
}

export default PageNotFound
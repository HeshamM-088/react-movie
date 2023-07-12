import Button from 'react-bootstrap/Button';
import React from 'react'

const Controls = () => {
    return (
        <div className='row d-flex flex-wrap justify-content-evenly align-items-center'>
            <div className='text-center col-12 mb-4 mt-4 mb-lg-0 mt-lg-0 col-lg-6'>
                <h2>SORT BY</h2>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <Button variant="outline-light">
                        Title
                    </Button>
                    <Button variant="outline-light" >
                        Poplarity
                    </Button>
                    <Button variant="outline-light" >
                        Date
                    </Button>
                    <Button variant="outline-light" >
                        Ratin
                    </Button>
                </div>
            </div>
            <div className='text-center col-lg-6'>
                <h2>SORT ORDER</h2>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <Button variant="outline-light">
                        Descingin
                    </Button>
                    <Button variant="outline-light" >
                        Ascending
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Controls
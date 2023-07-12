import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SearchFunction, SearchFunctionWithSeries, defaultValueMovies, defaultValueSeries } from '../ReduxSystem/SearchSlice';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Credits, DetailsMovies } from '../ReduxSystem/DetailsMoviesSlice';
import { CreditsSeries, DetailsSeries } from '../ReduxSystem/DetailsSeriesSlice';

const Header = () => {
    const searchValue = useRef()
    const form = useRef()

    const { dataSearch, dataSearchWithSeries } = useSelector(state => state.search)
    const dispatch = useDispatch()
    const searchListRef = useRef(null);


    const [toggelSearch, setToggelSearch] = useState(false)

    const itemsToShow = 6;

    const handleSearch = () => {
        const value = searchValue.current.value.toLowerCase()
        if (toggelSearch === false) {
            dispatch(SearchFunction(value))
        } else {
            dispatch(SearchFunctionWithSeries(value))

        }
    }


    useEffect(() => {
        if (searchListRef.current) {
            const list = searchListRef.current;
            const items = list.children;
            if (items.length > itemsToShow) {
                list.style.maxHeight = `${itemsToShow * items[0].offsetHeight}px`;
            }
        }
    }, [dataSearch, dataSearchWithSeries]);


    const handleToggelSearch = () => {
        if (toggelSearch === false) {
            setToggelSearch(true)
            dispatch(defaultValueSeries())
        } else {
            setToggelSearch(false)
            dispatch(defaultValueMovies())
        }
    }


    const navigate = useNavigate()

    const handleDetailsMovies = (movie) => {

        dispatch(DetailsMovies(movie.id))
        dispatch(Credits(movie.id))
        navigate(`/detailsMoviesPage/${movie.id} - ${movie.title ? movie.title : movie.name}`, {state : {
            location : "movie"
        }})
        dispatch(defaultValueMovies())
        form.current.reset();
    }

    const handleDetailsSeries = (series)=>{
        dispatch(DetailsSeries(series.id))
        dispatch(CreditsSeries(series.id))
        navigate(`/detailsSeriesPage/${series.id} - ${series.name}`, {state : {
            location : "series"
        }})
        dispatch(defaultValueSeries())
        form.current.reset();
    }
    

    return (
        <div className='row sticky-top'>
            <div className='bg-dark col-12 z-index'>
                {/* Start my Header */}
                <Navbar bg="dark" variant="dark" expand="lg" className='container'>
                    <Container fluid>
                        <Navbar.Brand href="#">Redux Movies</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/" href="#action1">Home</Nav.Link>
                                <Nav.Link as={Link} to="/movies" href="#action2">Movies</Nav.Link>
                                <Nav.Link as={Link} to="/series" href="#action3">Series</Nav.Link>
                            </Nav>
                            <div className="position-relative">
                                <Form ref={form} className="d-flex justify-content-between align-items-center" >
                                    <Form.Control
                                        type="search"
                                        placeholder={toggelSearch === false ? ("Search with movies") : ("Search with series")}
                                        className="me-2"
                                        aria-label="Search"
                                        ref={searchValue}
                                        onChange={handleSearch}
                                    />
                                    <Button variant={toggelSearch === false ? "outline-danger fw-bold" : "outline-primary outline-primary fw-bold"} onClick={handleToggelSearch}>{toggelSearch === false ? "serachSeries" : "serachMovies"}</Button>
                                </Form>
                                {toggelSearch === false ? (
                                    dataSearch.length > 0 && (
                                        <ul className="position-absolute w-100 p-0 mt-3 bg-dark text-light overflow-auto" ref={searchListRef}>
                                            {dataSearch.map((result, index) => (
                                                <li key={index} onClick={() => handleDetailsMovies(result)} className="d-flex justify-content-between border border-end-0 border-start-0 mb-2 border-info rounded-2 p-2 hover-movies cursor-pointer">
                                                    <Stack direction="row">
                                                        <Avatar alt="Remy Sharp" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${result.poster_path}`} />
                                                    </Stack>
                                                    <p className='ps-2'>{result.original_title}</p>
                                                </li>


                                            ))}
                                        </ul>
                                    )
                                ) : (dataSearchWithSeries.length > 0 && (
                                    <ul className="position-absolute w-100 p-0 mt-3 bg-dark text-light overflow-auto" ref={searchListRef}>
                                        {dataSearchWithSeries.map((result, index) => (
                                            <li key={index} onClick={() => handleDetailsSeries(result)} className="d-flex justify-content-between p-2 border border-end-0 border-start-0 mb-2 border-info rounded-2 hover-series cursor-pointer">
                                                <Stack direction="row">
                                                    <Avatar alt="Remy Sharp" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${result.poster_path}`} />
                                                </Stack>
                                                <p className='ps-2'>{result.name}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                            <Button variant='outline-info' className='ms-lg-2  fw-bold'>LogIn</Button>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* Start my Header */}
            </div>
        </div>
    )
}

export default Header
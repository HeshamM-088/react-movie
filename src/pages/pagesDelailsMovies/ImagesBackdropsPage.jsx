import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { DetailsMovies, ImagesMovies } from '../../ReduxSystem/DetailsMoviesSlice';
import Card from 'react-bootstrap/Card';
import { BsArrowLeftShort } from 'react-icons/bs';

// تعريف دالة a11yProps
function a11yProps(index) {
    return {
        id: `tabpanel-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

// تعريف مكون TabPanel
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const ImagesBackdropsPage = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, imagesBackdropsLanguageIt, imagesBackdropsLanguageDe, imagesBackdropsLanguageFr, imagesBackdropsLanguagePt, imagesBackdropsLanguageEn, imagesBackdropsNoLanguage, dataDetailsMovies } = useSelector(state => state.DetailsForMovies)

    const { id } = useParams()
    const firstPart = id.split(" ")[0];




    useEffect(() => {
        dispatch(ImagesMovies(firstPart))
        dispatch(DetailsMovies(firstPart))
    }, [firstPart])


    const tabData = [
        {
            label: 'No Language',
            videos: imagesBackdropsNoLanguage,
        },
        {
            label: 'English',
            videos: imagesBackdropsLanguageEn,
        },
        {
            label: 'German',
            videos: imagesBackdropsLanguageDe,
        },
        {
            label: 'French',
            videos: imagesBackdropsLanguageFr,
        },
        {
            label: 'Italian',
            videos: imagesBackdropsLanguageIt,
        },
        {
            label: 'Portuguese',
            videos: imagesBackdropsLanguagePt,
        },
    ];



    return (
        <>
            {loading === true ? (
                <div className='loadDetails d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                <section className='row'>
                    <div variant="dark" className='col-12 bg-dark'>
                        <Card className="col-12 border border-0 container bg-dark">
                            <Card.Body variant="dark" className='text-light d-flex bg-dark align-items-center gap-3'>
                                <Card.Img variant="top" style={{ width: '5rem' }} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${dataDetailsMovies && dataDetailsMovies.poster_path}`} />
                                <div>
                                    <Card.Title className='fs-4'>{dataDetailsMovies && dataDetailsMovies.title} <span className='text-secondary'>({dataDetailsMovies && dataDetailsMovies.release_date})</span></Card.Title>
                                    <Card.Text as={Link} className='Link text-secondary' onClick={() => navigate(-1)}>
                                        <BsArrowLeftShort />Back to main
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-12 text-light p-5 d-flex flex-column gap-3'>
                        <Box sx={{ maxWidth: { xs: 500, sm: 1500 } }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'white', color: 'white' }}>
                                <div className='d-flex flex-wrap gap-4'>
                                    <h4>Social</h4>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="scrollable"
                                        scrollButtons
                                        allowScrollButtonsMobile
                                        aria-label="scrollable force tabs example"
                                        textColor="secondary"
                                        indicatorColor="secondary"
                                    >
                                        {tabData
                                            .filter((tab) => tab.videos.length > 0)
                                            .map((tab, index) => (
                                                <Tab
                                                    key={index}
                                                    label={`${tab.label} (${tab.videos.length})`}
                                                    {...a11yProps(index)}
                                                    sx={{ color: 'white' }}
                                                />
                                            ))}
                                    </Tabs>
                                </div>
                            </Box>
                            <Box className="bg-dark rounded-3">
                                {tabData
                                    .filter((tab) => tab.videos.length > 0)
                                    .map((tab, index) => (
                                        <TabPanel key={index} value={value} index={index}>
                                            <div className="col-12 d-flex flex-wrap gap-5">
                                                {tab.videos.map((images, imageIndex) => (
                                                    <div key={imageIndex} className='col-2 shadow bg-dark-tertiary rounded'>
                                                        <img className='col-12' src={images.file_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${images.file_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                                                    </div>
                                                ))}
                                            </div>
                                        </TabPanel>
                                    ))}
                            </Box>
                        </Box>
                    </div>
                </section>
            )}
        </>
    );
}

export default ImagesBackdropsPage;

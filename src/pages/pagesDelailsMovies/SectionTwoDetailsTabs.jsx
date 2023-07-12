import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { GetReviewsMovies } from '../../ReduxSystem/ReviewsMoviesSlice';
import ShowMore from 'react-show-more';
import { Link, useParams } from 'react-router-dom';

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

const SectionTwoDetailsTabs = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    const dispatch = useDispatch()
    const { dataDetailsMovies, loading } = useSelector(state => state.DetailsForMovies)
    const { dataReviewsMovies } = useSelector(state => state.ReviewsMovies)

    const avatarPath = dataReviewsMovies[0]?.author_details.avatar_path;
    const modifiedAvatarPath = avatarPath && avatarPath.substring(1);

    const rawDate = dataReviewsMovies[0]?.created_at;
    const formattedDate = new Date(rawDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });


    const { id } = useParams()
    const firstPart = id.split(" ")[0];


    useEffect(() => {
        dispatch(GetReviewsMovies(firstPart))
    }, [firstPart])

    return (
        <>
            {loading === true ? (
                <div className='loadDetails d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                <section className='row'>
                    <div className='text-light p-5 d-flex flex-column gap-3'>
                        <h4>Social</h4>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'white', color: 'white' }}>
                                <div className='d-flex gap-4'>
                                    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" textColor="secondary"
                                        indicatorColor="secondary" sx={{ color: 'white' }}>
                                        <Tab label={`Reviews ${dataReviewsMovies && dataReviewsMovies.length}`} {...a11yProps(0)} sx={{ color: 'white' }} />
                                        <Tab label="Discussions" disabled  {...a11yProps(1)} sx={{ color: 'white' }} />
                                    </Tabs>
                                </div>
                            </Box>
                            <Box className="bg-dark rounded-3">
                                <TabPanel value={value} index={0}>
                                    <div className="d-flex gap-5">

                                        {dataReviewsMovies.length > 0 ?
                                            (
                                                <>
                                                    <div>
                                                        {dataReviewsMovies && (
                                                            <Stack direction="row">
                                                                <Avatar className='col-5' alt="Remy Sharp" src={`${modifiedAvatarPath && modifiedAvatarPath}`} />
                                                            </Stack>
                                                        )}

                                                    </div>
                                                    <div>
                                                        {dataReviewsMovies && (
                                                            <>
                                                                <h2 className='fw-bold fs-4'>A review by <span className='text-info'>{dataReviewsMovies[0] && dataReviewsMovies[0].author}</span></h2>

                                                                <p>
                                                                    Written by <span className='fw-bold text-info'>{dataReviewsMovies[0] && dataReviewsMovies[0].author}</span> on <span className='text-danger'>{dataReviewsMovies[0] && formattedDate}</span>
                                                                </p>

                                                                <p>
                                                                    <ShowMore
                                                                        lines={3}
                                                                        more='Show more'
                                                                        less='Show less'
                                                                        anchorClass='text-info'
                                                                    >
                                                                        {dataReviewsMovies[0] && dataReviewsMovies[0].content}
                                                                    </ShowMore>

                                                                </p>
                                                            </>

                                                        )}
                                                    </div>
                                                </>
                                            ) : (
                                                <p>
                                                    We don't have any reviews for <span className='text-info fw-bold'>{dataDetailsMovies && dataDetailsMovies.title}</span>.
                                                </p>
                                            )}
                                    </div>


                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                            </Box>
                        </Box>

                        {dataReviewsMovies.length > 1 && (
                            <div className=''>
                                <Link className='Link' to={`/reviewAll/${dataDetailsMovies && dataDetailsMovies.id}`}>Read All Reviews</Link>
                            </div>
                        )}

                    </div>
                </section>
            )}
        </>
    );
}

export default SectionTwoDetailsTabs;
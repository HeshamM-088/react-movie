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
import { MdDisabledByDefault } from 'react-icons/md';
import { BsCheckCircleFill } from 'react-icons/bs';
import { RiCloseCircleFill } from 'react-icons/ri';
import { HiLockClosed } from 'react-icons/hi';
import { BsClockHistory } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';



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

const ImagesPostersPage = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { imagesposters,
        imagesPostersLanguageHu
        , imagesPostersLanguageVi
        , imagesPostersLanguageUk
        , imagesPostersLanguageTr
        , imagesPostersLanguageTh
        , imagesPostersLanguageSv
        , imagesPostersLanguageEs
        , imagesPostersLanguageSk
        , imagesPostersLanguageRu
        , imagesPostersLanguageRo
        , imagesPostersLanguagePt
        , imagesPostersLanguagePl
        , imagesPostersLanguageMk
        , imagesPostersLanguageLt
        , imagesPostersLanguageLv
        , imagesPostersLanguageKo
        , imagesPostersLanguageJa
        , imagesPostersLanguageIt
        , imagesPostersLanguageHe
        , imagesPostersLanguageEl
        , imagesPostersLanguageDe
        , imagesPostersLanguageFr
        , imagesPostersLanguageDa
        , imagesPostersLanguageCs
        , imagesPostersLanguageZh
        , imagesPostersLanguageBg
        , imagesPostersLanguageSq
        , imagesPostersLanguageEn
        , imagesPostersNoLanguage
        , dataDetailsMovies
        , loading} = useSelector(state => state.DetailsForMovies)

    const { id } = useParams()
    const firstPart = id.split(" ")[0];


    useEffect(() => {
        dispatch(ImagesMovies(firstPart))
        dispatch(DetailsMovies(firstPart))
    }, [firstPart])


    const languages = [
        { label: "No Language", imagesPosters: imagesPostersNoLanguage },
        { label: "English", imagesPosters: imagesPostersLanguageEn },
        { label: "German", imagesPosters: imagesPostersLanguageDe },
        { label: "French", imagesPosters: imagesPostersLanguageFr },
        { label: "Italian", imagesPosters: imagesPostersLanguageIt },
        { label: "Albanian", imagesPosters: imagesPostersLanguageSq },
        { label: "Bulgarian", imagesPosters: imagesPostersLanguageBg },
        { label: "Chinese", imagesPosters: imagesPostersLanguageZh },
        { label: "Czech", imagesPosters: imagesPostersLanguageCs },
        { label: "Danish", imagesPosters: imagesPostersLanguageDa },
        { label: "Greek", imagesPosters: imagesPostersLanguageEl },
        { label: "Hebrew", imagesPosters: imagesPostersLanguageHe },
        { label: "Hungarian", imagesPosters: imagesPostersLanguageHu },
        { label: "Japanese", imagesPosters: imagesPostersLanguageJa },
        { label: "Korean", imagesPosters: imagesPostersLanguageKo },
        { label: "Latvian", imagesPosters: imagesPostersLanguageLv },
        { label: "Lithuanian", imagesPosters: imagesPostersLanguageLt },
        { label: "Macedonian", imagesPosters: imagesPostersLanguageMk },
        { label: "Polish", imagesPosters: imagesPostersLanguagePl },
        { label: "Portuguese", imagesPosters: imagesPostersLanguagePt },
        { label: "Romanian", imagesPosters: imagesPostersLanguageRo },
        { label: "Russian", imagesPosters: imagesPostersLanguageRu },
        { label: "Slovak", imagesPosters: imagesPostersLanguageSk },
        { label: "Spanish; Castilian", imagesPosters: imagesPostersLanguageEs },
        { label: "Swedish", imagesPosters: imagesPostersLanguageSv },
        { label: "Thai", imagesPosters: imagesPostersLanguageTh },
        { label: "Turkish", imagesPosters: imagesPostersLanguageTr },
        { label: "Ukrainian", imagesPosters: imagesPostersLanguageUk },
        { label: "Vietnamese", imagesPosters: imagesPostersLanguageVi },
    ];



    return (
        <>
            {loading === true ? (
                <div className='loadDetails d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                <section className="row">
                    <div variant="dark" className="col-12 bg-dark">
                        <Card className="col-12 border border-0 container bg-dark">
                            <Card.Body variant="dark" className="text-light d-flex bg-dark align-items-center gap-3">
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
                        <Box sx={{ display: 'flex', gap: "5%" }}>
                            <Box sx={{ borderBottom: 1, color: 'white' }}>
                                <h4>Social</h4>
                                <div className='d-flex flex-wrap border bg-dark' style={{ width: "max-content" }}>
                                    <Tabs
                                        value={value}
                                        orientation="vertical"
                                        variant="scrollable"
                                        onChange={handleChange}
                                        aria-label="Vertical tabs example"
                                        sx={{ borderRight: 1, borderColor: 'divider' }}
                                    >
                                        {languages.map((tab, index) => {
                                            if (tab.imagesPosters.length > 0) {
                                                return (
                                                    <Tab
                                                        key={index}
                                                        label={`${tab.label} (${tab.imagesPosters.length})`}
                                                        {...a11yProps(index)}
                                                        sx={{ color: 'white' }}
                                                    />
                                                )
                                            }
                                        })}
                                    </Tabs>
                                </div>
                            </Box>
                            <Box className="col-9 rounded-3 h-auto">
                                {languages.filter((tab) => tab.imagesPosters.length > 0)
                                    .map((tab, index) => (

                                        <TabPanel key={index} value={value} index={index}>
                                            <div className="col-12 d-flex justify-content-center flex-wrap gap-5">
                                                {tab.imagesPosters.length > 0 &&
                                                    tab.imagesPosters.map((posters, posterIndex) => (
                                                        <Card key={posterIndex} className="col-3 bg-dark text-light border">
                                                            <img
                                                                className="col-12"
                                                                src={
                                                                    posters.file_path
                                                                        ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${posters.file_path}`
                                                                        : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                                                                }
                                                                alt="Poster"
                                                            />
                                                            <Card.Header className="border d-flex justify-content-between">
                                                                <span>info</span>
                                                                <span>
                                                                    <HiLockClosed />
                                                                </span>
                                                            </Card.Header>
                                                            <Card.Body className='d-flex flex-column gap-3'>
                                                                <div className="d-flex flex-column">
                                                                    <span>
                                                                        Primary? <MdDisabledByDefault className="rounded-circle" />
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <span>Size</span>
                                                                    <span className="text-info">
                                                                        {posters.width}x{posters.height}
                                                                        <span className="text-light ms-2">
                                                                            {posters.aspect_ratio > 0.667 ? <RiCloseCircleFill /> : <BsCheckCircleFill />}
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="mb-2">Language</span>
                                                                    <Form.Select disabled size="sm">
                                                                        <option>{posters.iso_639_1 === null ? "No Language" : posters.iso_639_1}</option>
                                                                    </Form.Select>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    ))}
                                            </div>
                                        </TabPanel>
                                    ))}
                            </Box>


                        </Box>
                    </div>
                </section >
            )}
        </>
    );
}

export default ImagesPostersPage;


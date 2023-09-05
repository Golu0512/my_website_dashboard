import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const DeleteData = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");
    const { user } = useSelector(state=> state.user);
    const navigate = useNavigate();
    const notify = (message) => toast.success(message, {
        theme: "colored"
    })
    const [ formData, setFormData ] = useState({
        _id:'',
        title:'',
        movie_name:'',
        banner_link:'',
        banner_image:'',
        category:'',
        main_stars:'',
        description:'',
        releasing_year:'',
        language:'',
        resolution:'',
        file_size:'',
        quick_story:'',
        download_low:'',
        download_medium:'',
        download_high:'',
        youtube_trailer:'',
        cover_image:''
    });

    const [sendId, setSendId] = useState({id:''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('https://my-website-api.onrender.com/delete_single_data',sendId)
        if (res.data.message) {
            notify(res.data.message);
            setFormData({
                _id:'',
                title:'',
                movie_name:'',
                banner_link:'',
                banner_image:'',
                category:'',
                main_stars:'',
                description:'',
                releasing_year:'',
                language:'',
                resolution:'',
                file_size:'',
                quick_story:'',
                download_low:'',
                download_medium:'',
                download_high:'',
                youtube_trailer:'',
                cover_image:''
            });
            setSendId({id:''})
        }

    }

    const handleChangeId = async (e) => {
        setSendId({...sendId,[e.target.name]:e.target.value});
    }

    const getData = async () => {
        const res = await axios.post('https://my-website-api.onrender.com/get_single_data',sendId);
        setFormData(res.data)
    }

    useEffect(()=>{
        // console.log('aaa',sendId.id);
    },[sendId.id])

    useEffect(()=>{
        if(user === null) {
            navigate('/')
        }
    },[])

    return (
        <>
            <Box m="20px" pb="100px">
                <Header title="DELETE DATA" subtitle="Delete a single Data" />
                <form onSubmit={handleSubmit}>
                    <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                    >
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Record ID"
                            name="id"
                            value={sendId.id}
                            onChange={handleChangeId}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <Button onClick={getData} color="secondary" variant="contained">
                            Show Data
                        </Button>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Title"
                            name="title"
                            value={formData.title}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Movie Name"
                            name="movie_name"
                            value={formData.movie_name}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Banner Link"
                            name="banner_link"
                            value={formData.banner_link}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Banner Image"
                            name="banner_image"
                            value={formData.banner_image}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Category"
                            name="category"
                            value={formData.category}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Main Stars"
                            name="main_stars"
                            value={formData.main_stars}
                            sx={{ gridColumn: "span 2" }}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Description"
                            name="description"
                            value={formData.description}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Releasing Year"
                            name="releasing_year"
                            value={formData.releasing_year}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Language"
                            name="language"
                            value={formData.language}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Resolution"
                            name="resolution"
                            value={formData.resolution}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="File Size"
                            name="file_size"
                            value={formData.file_size}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Quick Story"
                            name="quick_story"
                            value={formData.quick_story}
                            sx={{ gridColumn: "span 2" }}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Download Low"
                            name="download_low"
                            value={formData.download_low}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Download Medium"
                            name="download_medium"
                            value={formData.download_medium}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Download High"
                            name="download_high"
                            value={formData.download_high}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="YouTube Trailer Link"
                            name="youtube_trailer"
                            value={formData.youtube_trailer}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Cover Image Link"
                            name="cover_image"
                            value={formData.cover_image}
                            sx={{ gridColumn: "span 2" }}
                        />

                        <Button type="submit" color="secondary" variant="contained">
                            Delete Data
                        </Button>

                    </Box>
                    {/* <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" variant="contained">
                            Insert Data
                        </Button>
                    </Box> */}
                </form>
                <ToastContainer />
            </Box>
        </>
    )
}

export default DeleteData

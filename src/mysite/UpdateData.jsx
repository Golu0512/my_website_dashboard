import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const UpdateData = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");
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

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('https://my-website-api.onrender.com/update_old_movie',formData)
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
        try {
            const res = await axios.post('https://my-website-api.onrender.com/get_single_data', sendId);
            setFormData(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
        // console.log('aaa',sendId.id);
    },[sendId.id])

    return (
        <>
            <Box m="20px" pb="100px">
                <Header title="UPDATE DATA" subtitle="Update into inserted data" />
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
                            label="Document ID"
                            name="_id"
                            onChange={handleChangeValue}
                            value={formData._id}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Title"
                            name="title"
                            onChange={handleChangeValue}
                            value={formData.title}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Movie Name"
                            name="movie_name"
                            onChange={handleChangeValue}
                            value={formData.movie_name}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Banner Link"
                            name="banner_link"
                            onChange={handleChangeValue}
                            value={formData.banner_link}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Banner Image"
                            name="banner_image"
                            onChange={handleChangeValue}
                            value={formData.banner_image}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Category"
                            name="category"
                            onChange={handleChangeValue}
                            value={formData.category}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Main Stars"
                            name="main_stars"
                            onChange={handleChangeValue}
                            value={formData.main_stars}
                            sx={{ gridColumn: "span 2" }}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Description"
                            name="description"
                            onChange={handleChangeValue}
                            value={formData.description}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Releasing Year"
                            name="releasing_year"
                            onChange={handleChangeValue}
                            value={formData.releasing_year}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Language"
                            name="language"
                            onChange={handleChangeValue}
                            value={formData.language}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Resolution"
                            name="resolution"
                            onChange={handleChangeValue}
                            value={formData.resolution}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="File Size"
                            name="file_size"
                            onChange={handleChangeValue}
                            value={formData.file_size}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Quick Story"
                            name="quick_story"
                            onChange={handleChangeValue}
                            value={formData.quick_story}
                            sx={{ gridColumn: "span 2" }}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Download Low"
                            name="download_low"
                            onChange={handleChangeValue}
                            value={formData.download_low}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Download Medium"
                            name="download_medium"
                            onChange={handleChangeValue}
                            value={formData.download_medium}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Download High"
                            name="download_high"
                            onChange={handleChangeValue}
                            value={formData.download_high}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="YouTube Trailer Link"
                            name="youtube_trailer"
                            onChange={handleChangeValue}
                            value={formData.youtube_trailer}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Cover Image Link"
                            name="cover_image"
                            onChange={handleChangeValue}
                            value={formData.cover_image}
                            sx={{ gridColumn: "span 2" }}
                        />

                        <Button type="submit" color="secondary" variant="contained">
                            Update Data
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

export default UpdateData

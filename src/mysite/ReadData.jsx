import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Box } from '@mui/material';
import axios from 'axios';
import TableData from '../components/TableData';
import Loader from '../components/Loader';

const ReadData = () => {

    const [ tableData, setTableData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const getAllData = async () => {
        setLoading(true);
        const res = await axios.get('https://my-website-api.onrender.com/old_movies')
        setTableData(res.data)
        setLoading(false);
    }

    useEffect(()=>{
        getAllData();
    },[])
    return (
        <>
            <Box m='20px'>
                <Header title="ALL DATA" subtitle="All data are visible" />
                {
                    !(loading) ? <TableData data={tableData} /> : <Loader />
                }
            </Box>
        </>
    )
}

export default ReadData
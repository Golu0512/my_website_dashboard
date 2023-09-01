import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Box } from '@mui/material';
import axios from 'axios';
import TableData from '../components/TableData';

const ReadData = () => {

    const [ tableData, setTableData ] = useState([]);

    const getAllData = async () => {
        const res = await axios.get('https://my-website-api.onrender.com/old_movies')
        setTableData(res.data)
    }

    useEffect(()=>{
        getAllData();
    },[])
    return (
        <>
            <Box m='20px'>
                <Header title="ALL DATA" subtitle="All data are visible" />
                <TableData data={tableData} />
            </Box>
        </>
    )
}

export default ReadData
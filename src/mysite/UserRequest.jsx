import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Loader from '../components/Loader';
import axios from 'axios';
import UserTable from '../components/UserTable';

const UserRequest = () => {

    const [ loading, setLoading ] = useState(false);
    const [ tableData, setTableData ] = useState([]);
    const [ totalRecord, setTotalRecords ] = useState(0);

    const getAllData = async () => {
        setLoading(true);
        const res = await axios.get('https://funkyanimehubapi.onrender.com/show_movie_request')
        setTableData(res.data.data);
        setTotalRecords(res.data?.data.length);
        setLoading(false);
    }

    useEffect(()=>{
        getAllData();
    },[])

    return (
        <>
            <Box m='20px'>
                <Header title="USER REQUEST" subtitle="All user demands" />
                <div className='d-flex justify-content-between align-items-center pe-5 my-3'>
                    <span className='fw-bold fs-6'>Total Number of Request: {totalRecord}</span>
                </div>
                {
                    !(loading) ? <UserTable data={tableData} /> : <Loader />
                }
            </Box>
        </>
    )
}

export default UserRequest

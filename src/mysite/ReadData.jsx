import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Box } from '@mui/material';
import axios from 'axios';
import TableData from '../components/TableData';
import Loader from '../components/Loader';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const ReadData = () => {

    const { user } = useSelector(state=> state.user);
    const navigate = useNavigate();
    const [ tableData, setTableData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ totalRecord, setTotalRecords ] = useState(0);

    const getAllData = async () => {
        setLoading(true);
        const res = await axios.get('https://funkyanimehubapi.onrender.com/old_movies')
        setTableData(res.data.data);
        setTotalRecords(res.data?.data.length);
        setLoading(false);
    }

    const searchData = (e) => {
        const {value} = e.target;
        if (value) {
            const filteredData = tableData.filter((val)=>{
                return val?.movie_name.toLowerCase().includes(value.toLowerCase()) || val?.title.toLowerCase().includes(value.toLowerCase())
            });
            setTableData(filteredData)
        } else {
            getAllData();
        }
    }

    useEffect(()=>{
        getAllData();
    },[])

    return (
        <>
            <Box m='20px'>
                <Header title="ALL DATA" subtitle="All data are visible" />
                <div className='d-flex justify-content-between align-items-center pe-5 my-3'>
                    <input 
                        type="text" 
                        className='read_search_input bg-dark text-white py-2 px-3 rounded-pill border-danger' 
                        name="search" 
                        onChange={searchData} 
                        placeholder="Search by Movie name or Title" 
                    />
                    <span className='fw-bold fs-6'>Total Number of Records: {totalRecord}</span>
                </div>
                {
                    !(loading) ? <TableData data={tableData} /> : <Loader />
                }
            </Box>
        </>
    )
}

export default ReadData